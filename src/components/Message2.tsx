import { api } from '../utils/api'
import { AxiosError } from "axios";
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useMessage } from '../hooks/useMessage';

type Props = {}

function Message1({}: Props) {
    const { error, message } = useMessage()
    return (
        <div>
            <h2>Message 2 Comp</h2>
            <h3>Message from server:</h3>
            {
                error ? (<h4>{error.message}</h4>) : null
            }
            <h4>{message ? message : 'loading...'}</h4>
        </div>
    )
}

export default Message1