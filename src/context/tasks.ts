import React from 'react';
import { Task } from '../hooks/useMessage';

export const TasksContext = React.createContext<Task[]>([]);