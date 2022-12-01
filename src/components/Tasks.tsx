import React from 'react'
import { TasksContext } from '../context';
import { useTasks } from '../hooks/useMessage'
import TasksList from './TasksList';

type Props = {}

function Tasks({ }: Props) {
  const { tasks } = useTasks()

  return (
    <TasksContext.Provider value={tasks || []}>
      <TasksList />
    </TasksContext.Provider>
  )
}

export default Tasks