// https://nextjs.org/learn/basics/api-routes/creating-api-routes

// req = HTTP incoming message, res = HTTP server response
//export default function handler(req, res) {
// ...
//}

// This file was renamed "hello.js" to "hello.ts"

import { NextApiRequest, NextApiResponse } from "next";

// Original code before change
// export default function handler(req, res) {
//     res.status(200).json({text: 'Hello'})
// }

export default (_: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ text: "Hello" });
};
