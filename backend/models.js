const mongoose = require('mongoose');

const lawSchema = new mongoose.Schema({
    user: String,
    title: String,
    description: String,
    scope: String,
    uuid: String,
})

const commentSchema = new mongoose.Schema({
    user: String,
    description: String,
    rating: Number,
    lawUuid: String,
})

const personSchema = new mongoose.Schema({
    name: String,
    description: String,
    riding: String,
    values: String,
    phone: String,
    email: String
})

const Law = mongoose.model('Law', lawSchema)
const Comment = mongoose.model('Comment', commentSchema)
const Person = mongoose.model('Person', personSchema)

module.exports = { Law, Person, Comment }