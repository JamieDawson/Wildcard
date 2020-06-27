import React from 'react';

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

        this.setState({ [name]: value })
    }

    render() {
        return(
            <div className='sign-in'>
                <h2>I arleady have an account</h2>
                <span>Sign in with your email and password</span>
            
            <form onSubmit={this.handleSubmit}>
                <input 
                    name="email" 
                    type="email" 
                    value={this.state.email} 
                    onChange={this.handleChange}
                    requried 
                />
                <label>Email</label>
                <input 
                    name="password" 
                    type="password" 
                    value={this.state.password} 
                    onChange={this.handleChange}
                    requried 
                    />
                <label>Password</label>

                <input type="submit" value="Submit Form"/>
            </form>
            </div>
        )
    }
}

export default SignIn;