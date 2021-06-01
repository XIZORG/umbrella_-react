import React, { Component } from 'react'
import axios from 'axios'
import Cookie from "js-cookie"

export default class RegisterClass extends Component {
    state = {
        email: '',
        password: '',
    }

    handleChangeEmail = (event) => {
        this.setState({ email: event.target.value });
    };

    handleChangePassword = (event) => {
        this.setState({ password: event.target.value });
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
            url: "http://localhost:8000/api/auth/login",
        };
        console.log(api);
        axios
            .post(api.url, api.data, { headers: api.headers })
            .then(function (response) {
                Cookie.set("token", response.data.token);
                Cookie.set("user_id", response.data.user_id);
                window.location.href = "/main";
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
                    <button type="submit" class="btn btn-primary">Sign in</button>
                </div>
            </form>
        );
    }
}
