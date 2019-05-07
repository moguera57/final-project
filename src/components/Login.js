import React, { Component } from 'react';
import axios from 'axios';

export default class CreateTodo extends Component {
    
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: 'Enter Username',
            password: 'Enter Password',
        }
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        
        let username = this.state.username
        let password = this.state.password

        this.setState({
            todo_description: '',
            todo_responsible: '',
        })
    }
    
    render() {

        return (
            <div style={{marginTop: 10}}>
            <form onSubmit={this.onSubmit}>
                <div className="form-group"> 
                    <label>Username: </label>
                    <input  type="text"
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                            />
                </div>
                <div className="form-group">
                    <label>Responsible: </label>
                    <input 
                        type="text" 
                        className="form-control"
                        value={this.state.password}
                        onChange={this.onChangePassword}
                    />
                </div>
                <div>
                    <input type="submit" value="Login" className="btn btn-primary" />
                </div>
            </form>
        </div>
        )
    }
}