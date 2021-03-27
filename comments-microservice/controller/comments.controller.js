import { Comment, Post } from "memories_schemas_and_middleware";
// import { Comment } from "../models/comments.schema.js";

const commentsByPostId = {};

const getComments = async (req, res, next) => {
    try {
      // const comments = await Comment.find().sort({ _id: -1 });
      // console.log("POPULATE: ", comments);
      const comments = await Comment.find().populate("post").sort({ _id: -1 });
      console.log(comments);
      res.status(200).json(comments);
    } catch (error) {
      console.log(error);
      res.status(404).json({ message: error });
    }
  },
  createComment = async (req, res, next) => {
    let content = req.body;

    // console.log("Request user ID from auth.middleware: ", req.postId);

    // console.log("COMMENTS >>> ", content);

    const newComment = new Comment(content);

    // const newComment = new Comment({
    //   ...content,
    //   post: req.postId,
    //   createdAt: new Date().toISOString(),
    //   // userCreator: req.userId,
    // });

    try {
      const comment = await newComment.save();
      console.log(req.params.id);
      let post = await Post.findById(req.params.id);
      post.comments.unshift(comment);
      post.save();

      res.status(200).json(newComment);
      console.log("NEW COMMENT: ", newComment);
      console.log("Fresh post: ", post);
    } catch (error) {
      console.log(error);
      res.status(409).json({ message: error.message });
    }
  };

export { getComments, createComment };
