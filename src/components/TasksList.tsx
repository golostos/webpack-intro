import React, { useContext } from 'react'
import { TasksContext } from '../context'
import Task from './Task'

type Props = {}

function TasksList({}: Props) {
  const tasks = useContext(TasksContext)
  return (
    <ul>
      {
        tasks.map((task) => {
          return <Task task={task} />
        })
      }
    </ul>
  )
}

export default TasksList