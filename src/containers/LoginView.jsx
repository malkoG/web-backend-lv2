import * as React from 'react';

export class LoginView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }

    }
    
    onSubmit = (e) => {
        e.preventDefault()

        this.props.jwtLogin({
            username: this.state.email,
            password: this.state.password
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input name="username" 
                            value={this.state.username}
                            type="text" 
                            onChange={this.handleUsername} />
                    <input name="password" 
                            value={this.state.password}
                            type="password" 
                            onChange={this.handlePassword} />
                </form>
            </div>
        );
    }
}