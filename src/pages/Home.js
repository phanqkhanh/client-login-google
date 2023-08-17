import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    const isAuthen = Boolean(localStorage.getItem('access_token'))

    function Logout() {
        localStorage.removeItem('access_token')
        localStorage.removeItem('refresh_token')
        window.location.reload()
    }

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
            <h1 style={{marginBottom: '100px'}}>Client test login with Google</h1>

            {isAuthen ? 
            <>
                <h1>Login success!</h1>
                <button className='btn' onClick={Logout}>Logout</button>
            </>
            : 
            <div>
                <Link className='btn' to={googleOAuthUrl}>Login with Google</Link>
            </div>
        }
        </div>
    )
}

export default Home
