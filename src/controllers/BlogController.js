import { CreateBlogService, DeleteBlogService, EditBlogService, ReadBlogService } from "../services/BlogServices.js";


export const CreateBlog = async (req, res) => {
    const result = await CreateBlogService(req, res);
    return res.status(201).json(result);
}

export const ReadBlog = async (req, res) => {
    const result = await ReadBlogService(req, res);
    return res.status(200).json(result);
}

export const EditBlog = async (req, res) => {
    const result = await EditBlogService(req, res);
    return res.status(201).json(result);
}

export const DeleteBlog = async (req, res) => {
    const result = await DeleteBlogService(req, res);
    return res.status(201).json(result);
}

