import React from 'react'
import { signInWithGoogle } from '../../firebase/utils'
import Button from '../Forms/Button'
import './styles.scss'

function LoginForm({...props}) {

    const handleSubmit = async (e) => {
        e.preventDefault();
    }
    
    return (
        <div className='loginForm'>
            <div className="wrap">
                <h2>Login</h2>
                <div className="formWrap">
                    <form onSubmit={handleSubmit}>
                        <div className="socialLogins">
                            <div className="row">
                             <Button onClick ={signInWithGoogle}>Login with Google</Button>
                            </div>                        
                        </div>
                    </form>
                </div>
                
            </div>
        </div>
    )
}

export default LoginForm
