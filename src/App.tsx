import React from 'react'

import Message1 from './components/Message1';
import Message2 from './components/Message2';

type Props = {}


function App({ }: Props) {
    // const { error, message } = useMessage()
    return <>
        <Message1 />
        <Message2 />
    </>
}

export default App