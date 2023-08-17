import React, { useEffect } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'

const Oauth = () => {
    const navigate = useNavigate()
    const [params] = useSearchParams()
    useEffect(() => {
        const accessToken = params.get('access_token')
        const refreshToken = params.get('refresh_token')
        const new_user = params.get('new_user')
        const verify = params.get('verify')
        localStorage.setItem('access_token', accessToken)
        localStorage.setItem('refresh_token', refreshToken)
        console.log(verify)
        navigate('/')
        //kierm tra user đã verify hay chưa và là user mới hay cũ
        if(new_user == '' && verify == 1){

        }else{
            //
        }
    }, [params])
    return (
        <div>
        Loading...
        </div>
    )
}

export default Oauth
