require("dotenv").config();
const mongoose = require('mongoose');


openai = require('openai')
const { v4: uuidv4 } = require('uuid');

const express = require('express');
const cors = require('cors');

const models = require('./models');


const app = express();

app.use(cors());
// app.options('*', cors())
console.log(process.env.MONGO_DB_URI)
mongoose.connect(process.env.MONGO_DB_URI)

app.use(express.json())

app.get('/test', async function (req, res, next) {
    res.json({msg: 'test'})
    console.log("asdads")
})

app.get('/getAllPolicies', cors(), async function (req, res, next) {
  console.log("Returning all laws")
  res.json({msg: await models.Law.find({})})
})

app.post('/postPolicy', cors(), async function (req, res, next) {
  console.log("Posting policy")

  const policy = req.body.policy;

  const newPolicy = new models.Law({
    user: "Anonymous", //no time for logins
    title: policy.title,
    description: policy.description,
    uuid: uuidv4(),
  })

  await newPolicy.save();

  res.send('Post policy successful');
})

app.post('/postComment', cors(), async function (req, res, next) {
  console.log("Posting comment")

  const comment = req.body.comment;

  const newComment = new models.Comment({
    user: "Anonymous",
    description: comment.description,
    rating: 0,
    lawUuid: comment.uuid,
  })

  await newComment.save();

  res.send('Post comment successful');
})

app.listen(30901, function () {
  console.log('Web server started')
})
