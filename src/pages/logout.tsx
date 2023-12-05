import React, { useEffect } from 'react'
import { useCookies } from 'react-cookie'

type Props = {}

const Logout = (props: Props) => {
    const [cookies, setCookie, removeCookie] = useCookies(['authToken', 'user'])
    useEffect(() => {

        removeCookie('authToken')
        removeCookie('user')
        window.location.href = '/'
    }, [])
    return (
        <div>Logging you out</div>
    )
}

export default Logout