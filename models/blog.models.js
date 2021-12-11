import mongoose from 'mongoose'

const BlogSchema = new mongoose.Schema(
    {
        title: String,
        description: String,
        Author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    },
    {
        timeStamps: true
    }
)

module.exports = mongoose.model('blog', BlogSchema)