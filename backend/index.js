const express = require("express");
const cors = require("cors")
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors())

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));

//
// app.post("/post", function (req, res) {
//
//     console.log(req.body);
//     // console.log(req.body.last_name);
//     res.send("recived");
//     //
//     // // Prepare output in JSON format
//     // response = {
//     //     first_name:req.body.first_name,
//     //     last_name:req.body.last_name
//     // };
//     // console.log(response);
//     // res.end(JSON.stringify(response));
// })
//
//
// // app.post("/post", urlencodedParser, function (req, res) {
// //     console.log("Connected to React " + req.body);
// //     res.redirect("/");
// // });
//
// app.get("/", (req, res) => {
//
//     res.send("Fuck You World")
//     console.log("Connected to Reactsss");
// });

