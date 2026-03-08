const jwt = require('jsonwebtoken');

const ADMIN = {
    username: process.env.ADMIN_USER || "admin@wonhee-mkt.shop",
    password: process.env.ADMIN_PASS || "hfNx5@LR#(#*k7f"
};

const SECRET_KEY = process.env.JWT_SECRET || "awudihuiaosdaiuodawsduoihasduohnawdojnasdbjinasdhuoi123801238907123#981230830870891308712309812309-1239-213409124";

module.exports = async (req, res) => {
    try {
        if (req.method !== "POST") return res.status(405).end();

        let body = '';
        await new Promise((resolve, reject) => {
            req.on('data', chunk => body += chunk);
            req.on('end', resolve);
            req.on('error', reject);
        });
        const { username, password } = JSON.parse(body);

        if (!username || !password) {
            return res.status(400).json({ status: "fail", message: "아이디와 비밀번호를 입력해주세요." });
        }

        if (username === ADMIN.username && password === ADMIN.password) {
            const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: "1h" });
            return res.status(200).json({ status: "ok", token });
        } else {
            return res.status(401).json({ status: "fail", message: "아이디 또는 비밀번호가 잘못되었습니다." });
        }

    } catch (err) {
        console.error(err);
        res.status(500).json({ status: "fail", message: "서버 오류가 발생했습니다." });
    }
};