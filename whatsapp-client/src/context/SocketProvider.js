import React, { useContext, useEffect, useState } from 'react'
import io from 'socket.io-client';

const SocketContext = React.createContext()

export const useSocket = () => useContext(SocketContext)

export const SocketProvider = ({ id, children }) => {
    const [socket, setSocket] = useState()

    useEffect(() => {
        const newSocket = io(
            'http://localhost:5000',
            { query: { id } },
            {
                cors: {
                    origin: "http://localhost:3000",
                    credentials: true
                }
            }
        )
        setSocket(newSocket)

        return () => newSocket.close()
    }, [id])


    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    )
}
