import jwt from "jsonwebtoken";

const ADMIN = { username: "admin@wonhee-mkt.shop", password: "hfNx5@LR#(#*k7f" }; // 관리자 계정
const SECRET_KEY = process.env.JWT_SECRET || "supersecretkey";   // 환경변수 사용 가능

export default function handler(req, res) {
    if (req.method === "POST") {
        const { username, password } = req.body;

        if (username === ADMIN.username && password === ADMIN.password) {
            const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: "1h" });
            return res.status(200).json({ status: "ok", token });
        } else {
            return res.status(401).json({ status: "fail", message: "아이디 또는 비밀번호가 잘못되었습니다." });
        }
    }
    res.status(405).end();
}