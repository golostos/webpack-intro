import { useState, useEffect } from "react"
import { api } from "../utils/api"
import { AxiosError } from "axios";
import { useQuery } from '@tanstack/react-query'

export const useMessage = () => {
    const { data: message, error, refetch } = useQuery<string, AxiosError>({
        queryKey: ['message'], queryFn: () => {
            return api.get('hello').then(res => res.data)
        }
    })
    return { message, error }
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