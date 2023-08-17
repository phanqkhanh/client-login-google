import React from 'react'
import { Link } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'

const Login = () => {
    function getGoogleAuthUrl (){
        const url = 'https://accounts.google.com/o/oauth2/v2/auth'
        const query = {
            client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
            redirect_uri: process.env.REACT_APP_GOOGLE_REDIRECT_URL,
            response_type: 'code',
            scope: [
                'https://www.googleapis.com/auth/userinfo.email',
                'https://www.googleapis.com/auth/userinfo.profile'
            ].join(' '),
            prompt: 'consent'
        }
        const queryString = new URLSearchParams(query).toString()
        return `${url}?${queryString}`
    }
    const googleOAuthUrl = getGoogleAuthUrl()
    return (
        <div>
        <h1>Trang Login</h1>
        <Link to="/">Về trang chủ</Link>
        <div style={{marginTop: '30px'}}>
                    <Link to={googleOAuthUrl}>Login with Google</Link>
                </div>
        </div>
    )
}

export default Login
