import { useState, useEffect } from "react"
import { api } from "../utils/api"
import { AxiosError } from "axios";
import { useQuery } from '@tanstack/react-query'

export type Task = {
    id: number,
    title: string,
    done: boolean
}

export const useMessage = () => {
    const { data: message, error, refetch } = useQuery<string, AxiosError>({
        queryKey: ['message'], queryFn: () => {
            return api.get('hello').then(res => res.data)
        }
    })
    return { message, error }
}

export const useTasks = () => {
    const { data: tasks, error, refetch } = useQuery<Task[], AxiosError>({
        queryKey: ['tasks'], queryFn: () => {
            return api.get('tasks').then(res => res.data)
        }
    })
    return { tasks, error }
}

// export const useMessage = () => {
//     const [message, setMessage] = useState('')
//     const [error, setError] = useState('')
//     useEffect(() => {
//         api.get('hello').then(res => {
//             setMessage(res.data)
//         }).catch((err: AxiosError) => setError(err.message))
//     }, [])
//     return { message, error }
// }

// export const useTasks = () => {
//     const [tasks, setTasks] = useState([])
//     const [error, setError] = useState('')
//     useEffect(() => {
//         let cancel = false
//         api.get('tasks').then(res => {
//             if (!cancel) setTasks(res.data)
//         }).catch((err: AxiosError) => setError(err.message))
//         return () => { cancel = false }
//     }, [])
//     return { tasks, error }
// }