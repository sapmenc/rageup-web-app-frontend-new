import React, { useEffect } from 'react'
import { useCookies } from 'react-cookie'
import { signout } from '../api/user'

type Props = {}

const Logout = (props: Props) => {
    const [cookies, setCookie, removeCookie] = useCookies(['authToken', 'user'])
    const handleSignuout = async () => {
        try {
            const token = cookies.authToken
            await signout({ token })
            removeCookie('authToken')
            removeCookie('user')
            window.location.href = '/'
        }
        catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        handleSignuout()
    }, [])
    return (
        <div>Logging you out</div>
    )
}

export default Logout