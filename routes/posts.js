const express = require("express");
const Post = require("../models/Post");
const router = express.Router();

router.post("/create",function(req,res){
    const postData = new Post({
      title: req.body.title,
      content: req.body.post,
      likes: 0,
      category:req.body.category
    }); 
    postData.save((err)=>{
      if(err){
        console.log(err);
      } else {
        console.log("Post saved successfully");
        res.send("Created Succesfully");
      }
    })
  });
  
  router.get("/list", function(req, res) {
    Post.find({}, function(err, posts) {
      if (err) {
        console.log(err)
      } else {
        res.send(posts);
        console.log(posts)
        // res.render("list", {
        //   posts: posts
        // });
      }
    });
  });

module.exports = router;