let notices = [];

export default function handler(req, res) {
    if(req.method === "GET") {
        res.status(200).json(notices);
    } else if(req.method === "POST") {
        const { token, title, content } = req.body;
        if(token !== process.env.ADMIN_TOKEN) return res.status(401).json({ status: "fail" });

        notices.push({ title, content });
        res.status(200).json({ status: "ok" });
    } else {
        res.status(405).end();
    }
}