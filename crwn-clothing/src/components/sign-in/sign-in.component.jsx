import React from 'react';
import FormInput from '../form-iput/form-input.component';

import './sign-in.styles.scss';

//class component because we have to store what the user is typing in.

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: '',
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({ email: '', password: '' })
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value }) //if name is email, handle email. If it's password, it will handle password.
    }

    render() {
        return(
            <div className='sign-in'>
                <h2>I arleady have an account</h2>
                <span>Sign in with your email and password</span>
            
            <form onSubmit={this.handleSubmit}>
                <FormInput 
                    name='email'
                    type='email'
                    handleChange={this.handleChange}
                    value={this.state.email} 
                    label='email'
                    requried 
                />
              
                <FormInput 
                    name='password'
                    type='password'
                    value={this.state.password} 
                    handleChange={this.handleChange}
                    label='password'
                    requried 
                    />
               

                <input type="submit" value="Submit Form"/>
            </form>
            </div>
        )
    }
}

export default SignIn;