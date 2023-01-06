import * as fs from "fs";

// export default function blogHandler(req, res) {
//   fs.readFile(`mainBlogs/${req.query.slug}`, "utf-8", (err, data) => {
//     if(err){
//     res.status(500).json({error : "Internal server Issue"});
//     }
//     res.status(200).json(JSON.parse(data));
//     console.log(req.query.slug);
//   });
// }

export default function getAllDir(req, res) {
  fs.readdir("mainBlogs", (err, data) => {
    res.status(200).json(JSON.parse(data));
    console.log(req.query.slug);
  });
}
