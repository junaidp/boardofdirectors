const express = require('express')
const bodyParser = require('body-Parser')
const Post = require('./models/post')
const MyUser = require('./models/user')
const mongoose = require('mongoose')
const app = express()
const { Client } = require('@elastic/elasticsearch')

////elastic
const client = new Client({
  node: 'http://localhost:9200',
  maxRetries: 5,
  requestTimeout: 60000,
  sniffOnStart: true
})
//await is Promise API.
async function run() {
  // Let's start by indexing some data
  await client.index({
    index: 'game-of-thrones',
    body: {
      character: 'Ned Stark',
      quote: 'Winter is coming.'
    }
  })

  await client.index({
    index: 'game-of-thrones',
    body: {
      character: 'Daenerys Targaryen',
      quote: 'I am the blood of the dragon.'
    }
  })

  await client.index({
    index: 'game-of-thrones',
    // type: '_doc', // uncomment this line if you are using Elasticsearch ≤ 6
    body: {
      character: 'Tyrion Lannister',
      quote: 'A mind needs books like a sword needs a whetstone.'
    }
  })

  // here we are forcing an index refresh, otherwise we will not
  // get any result in the consequent search
  await client.indices.refresh({ index: 'game-of-thrones' })

  // Let's search!
  const { body } = await client.search({
    index: 'game-of-thrones',
    // type: '_doc', // uncomment this line if you are using Elasticsearch ≤ 6
    body: {
      query: {
        match: { quote: 'winter' }
      }
    }
  })

  console.log(body.hits.hits)
}

run().catch(console.log)
////elasticEnd

mongoose
  .connect(
    'mongodb+srv://junaidp:sA1azNacv8vnrgKJ@cluster0-wxkrw.mongodb.net/node-angular?retryWrites=true&w=majority'
  )
  .then(() => {
    console.log('mongo connected')
  })
  .catch(() => {
    console.log('monog connection failed' + ex)
  })

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE, OPTIONS'
  )
  next()
})

/*app.get('/api/user', (req, res, next) => {
  MyUser.find().then(users => {
    res.json({
      message: 'users',
      result: users
    })
  })
})*/

app.get('/api/user', (req, res, next) => {
  client
    .search({
      index: 'game-of-thrones',
      body: {
        query: {
          match: { quote: 'winter' }
        }
      }
    })
    .then(results => {
      console.log(results.body.hits.hits)

      res.json({
        message: 'users',
        result: results.body.hits.hits
      })
    })
})

app.post('/api/posts', (req, res, next) => {
  //const post = req.body;
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  })
  post.save().then(createdPost => {
    console.log(post)
    res.status(201).json({
      message: 'post added',
      postId: createdPost._id
    })
  })
})

app.post('/api/user', (req, res, next) => {
  const user = new MyUser({
    userName: req.body.userName,
    password: req.body.password
  })

  user.save().then(createdUser => {
    console.log(createdUser)
    res.status(201).json({
      message: 'user saved'
    })
  })
})

app.put('/api/user', (req, res) => {
  const user = new MyUser({
    userName: req.body.userName,
    password: req.body.password,
    _id: req.body._id
  })

  user.update().then(createdUser => {
    console.log(createdUser)
    res.status(201).json({
      message: 'user saved'
    })
  })
})
app.get('/api/posts', (req, res, next) => {
  /*const posts =[
        {
         id: 'dssdd',
         title: 'dddd',
          content: 'conttt'
        },
        {
            id: 'dssdd11',
            title: 'dddd22',
             content: 'conttt33'
           }
    ];*/
  //res.json(posts);
  Post.find().then(documents => {
    console.log(documents)
    res.status(200).json({
      message: 'posts fetched',
      posts: documents
    })
  })
})

app.delete('/api/posts/:id', (req, res, next) => {
  console.log(req.params.id)
  Post.deleteOne({ _id: req.params.id }).then(result => {
    console.log(result)
  })
  res.status(200).json({ message: 'POst deleted' })
})

app.delete('/api/user/:id', (req, res, next) => {
  MyUser.deleteOne({ _id: req.params.id }).then(result => {
    console.log(result)
  })
  res.status(200).json({ message: 'user deleted' })
})
module.exports = app
