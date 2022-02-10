const Comment = require('../models/comment');
const Post = require('../models/post');

module.exports.create = function(req, res){

    let postId = (req.body.post).trim(); 

    Post.findById(postId, function(err, post){

        if(err){
            console.log('error while finding the post');
            return;
        }

        if(post){

            Comment.create({
                content: req.body.content,
                post: postId,
                user: req.user._id
            }, function(err, comment){
                // Handle Error
                if(err){
                    console.log('error in creating comment');
                    return;
                }
                post.comments.push(comment);
                post.save();

                res.redirect('/');
            });

        }

    });
}