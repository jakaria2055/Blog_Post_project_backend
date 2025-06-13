import BlogModel from "../models/BlogModel.js";
import mongoose from "mongoose";

const { ObjectId } = mongoose.Types;

export const CreateBlogService = async (req, res) => {
  try {
    let reqBody = req.body;
    let data = await BlogModel.create(reqBody);

    return {
      status: "success",
      message: "Created blog successfuly",
      data: data,
    };
  } catch (error) {
    return { status: "fail", error: error.toStrin() };
  }
};

export const ReadBlogService = async (req, res) => {
  try {
    let data = await BlogModel.find();
    //console.log(data);
    return { status: "success", data: data };
  } catch (error) {
    return { status: "fail", error: error.toStrin() };
  }
};

export const DeleteBlogService = async (req, res) => {
  try {
    let id = new ObjectId(req.params.blogId);

    let data = await BlogModel.deleteOne({ _id: id });
    return {
      status: "success",
      message: "Blog deleted successfully",
      data: data,
    };
  } catch (error) {
    return { status: "fail", error: error.toStrin() };
  }
};

export const EditBlogService = async (req, res) => {
  try {
    let id = new ObjectId(req.params.blogId);
    let reqBody = req.body;

    let data = await BlogModel.updateOne({_id: id}, {$set: reqBody});

    return {
      status: "success",
      message: "Blog edited successfully",
      data: data,
    };
  } catch (error) {
    return { status: "fail", error: error.toStrin() };
  }
};
