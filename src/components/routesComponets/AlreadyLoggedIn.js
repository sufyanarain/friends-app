import React from 'react'
import { Result, Button } from 'antd';
import { Link } from 'react-router-dom';


const AlreadyLoggedIn = () => {
    return (
        <div>
            <Result
                status="404"
                // title="404"
                subTitle="You are already Logged in."
                extra={<Link to='/'><Button type="primary">Back Home</Button></Link>}
            />
        </div>
    )
}

export default AlreadyLoggedIn
