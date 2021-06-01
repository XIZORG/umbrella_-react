import React, { Component } from 'react'
import axios from 'axios'

export default class RegisterClass extends Component {
    state = {
        login: '',
        email: '',
        password: '',
        full_name: '',
    }

    handleChangeEmail = (event) => {
        this.setState({ email: event.target.value });
    };

    handleChangeLogin = (event) => {
        this.setState({ login: event.target.value });
    };

    handleChangePassword = (event) => {
        this.setState({ password: event.target.value });
    };

    handleChangeFull_name = (event) => {
        this.setState({ full_name: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const api = {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            data: {
                login: this.state.login,
                password: this.state.password,
                email: this.state.email,
                full_name: this.state.full_name,
            },
            url: "http://localhost:8000/api/auth/register",
        };
        console.log(api);
        axios
            .post(api.url, api.data, { headers: api.headers })
            .then(function (response) {
                window.location.href = "/login";
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    render() {
        return (
            <form class="row g-3" onSubmit={this.handleSubmit}>
                <div class="col-md-6">
                    <label for="inputEmail4" class="form-label">Email</label>
                    <input type="email" onChange={this.handleChangeEmail} class="form-control" id="inputEmail" />
                </div>
                <div class="col-md-6">
                    <label for="inputPassword4" class="form-label">Password</label>
                    <input type="password" onChange={this.handleChangePassword} class="form-control" id="inputPassword" />
                </div>
                <div class="col-12">
                    <label for="inputAddress" class="form-label">Login</label>
                    <input type="text" onChange={this.handleChangeLogin} class="form-control" id="inputLogin" />
                </div>
                <div class="col-12">
                    <label for="inputAddress2" class="form-label">Full Name</label>
                    <input type="text" onChange={this.handleChangeFull_name} class="form-control" id="inputFull" />
                </div>
                <div class="col-12">
                    <button type="submit" class="btn btn-primary">Sign in</button>
                </div>
            </form>
        );
    }
}
