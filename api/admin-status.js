let status = "정상영업";

export default function handler(req, res) {
    const { token, newStatus } = req.body || {};
    if(token !== process.env.ADMIN_TOKEN) return res.status(401).json({ status: "fail" });

    if(req.method === "GET") {
        res.status(200).json({ status });
    } else if(req.method === "POST") {
        if(newStatus) status = newStatus;
        res.status(200).json({ status });
    } else {
        res.status(405).end();
    }
}