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

export default async function getAllDir(req, res) {
   let data = await fs.promises.readdir("mainBlogs");
   let myFile;
   let allBlogs = [];
   for (let index = 0; index < data.length; index++) {
     const item = data[index];
     myFile = await fs.promises.readFile(('mainBlogs/' + item), 'utf-8')
      allBlogs.push(JSON.parse(myFile))
   }
   res.status(200).json(allBlogs)
}
