let products = ["Steal a Brainrot","Discord","Decorations","Bundles","Nameplates","Server Boost","Spotify","Cookie","Top Banner","Premium"];

export default function handler(req, res) {
    const { token } = req.body || {};
    if(token !== process.env.ADMIN_TOKEN) return res.status(401).json({ status: "fail" });

    if(req.method === "GET") {
        res.status(200).json(products);
    } else if(req.method === "POST") {
        const { action, item, index } = req.body;
        if(action === "add") products.push(item);
        else if(action === "delete") products.splice(index,1);
        else if(action === "move") {
            const [from, to] = index;
            const temp = products[from];
            products.splice(from,1);
            products.splice(to,0,temp);
        }
        res.status(200).json({ status: "ok", products });
    } else {
        res.status(405).end();
    }
}