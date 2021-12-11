import Blog from '../models/blog.models'

const AddNewBlog = async (req, res) => {
    try{
        let {description, tilte, author} = req.body
        let newBlog = new Blog({
            title: title,
            description: description,
            Author: author
        })
        let result = await newBlog.save()
        res.json({
            success: true,
            result: result
        })
    } catch (error) {
        res.json({
            success: false,
            result: error.message
        })
    }
}

const getAllBlogs = async (req, res) => {
    try{
        let result = await Blog.find({}).populate('Author', ['name'])
        res.json({
            success: true,
            result: result
        })
    } catch (error) {
        res.json({
            success: false,
            result: error.message
        })
    }
}

const deleteBlog = async (req,res)=>{
    try{
        let {id} = req.params
        let result = await Blog.findByIdAndDelete(id)
        res.json({
            success: true,
            message: "Blog supprimer"
        })
    } catch (error) {
        res.json({
            success: false,
            result: error.message
        })
    }
}
module.exports = {
    addNewBlog,
    getAllBlogs,
    deleteBlog
}