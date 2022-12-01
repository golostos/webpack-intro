// @ts-check

const express = require('express');
const wait = require('node:timers/promises').setTimeout
const app = express()

app.get('/api/hello', async (req, res) => {
  await wait(1000)
  res.send('Hello from server')
})

app.get('/api/tasks', async (req, res) => {
  res.send([
    {
      id: 1,
      title: "Task 1",
      done: true
    },
    {
      id: 2,
      title: "Task 2",
      done: false
    },
  ])
})

app.listen(4000)