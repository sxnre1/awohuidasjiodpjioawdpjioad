import jwt from "jsonwebtoken";

const ADMIN = { 
    username: process.env.ADMIN_USER || "", 
    password: process.env.ADMIN_PASS || "" 
};

const SECRET_KEY = process.env.JWT_SECRET || "supersecretkey";

export default async function handler(req, res) {
    if(req.method === "POST") {
        const body = await req.json();
        const { username, password } = body;

        if(username === ADMIN.username && password === ADMIN.password) {
            const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: "1h" });
            return res.status(200).json({ status: "ok", token });
        } else {
            return res.status(401).json({ status: "fail", message: "아이디 또는 비밀번호가 잘못되었습니다." });
        }
    }

    res.status(405).end();
}