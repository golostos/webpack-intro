import React from 'react'
import { Task as ITask } from '../hooks/useMessage'

type Props = {
  task: ITask
}

function Task({task}: Props) {
  return (
    <li style={{
      textDecoration: task.done ? 'line-through' : 'none'
    }}>{task.title}</li>
  )
}

export default Task