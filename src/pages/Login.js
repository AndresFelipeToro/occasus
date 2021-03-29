import React from 'react'
import LoginForm from '../components/Inicio'


const Login = ({form, onChange, onSubmit}) => (
        <div>
            <LoginForm
                onChange={onChange}
                onSubmit={onSubmit}
                form={form}
            />
        </div>
)

export default Login