import React, { Component } from 'react'
import axios from 'axios'
import Cookie from "js-cookie"

export default class EditProfile extends Component {
    state = {
        email: '',
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
        console.log(Cookie.get("token"));
        event.preventDefault();
        axios.post('http://127.0.0.1:8000/api/users/' + Cookie.get("user_id"), {
            login: this.state.login,
            email: this.state.email,
            full_name: this.state.full_name,
        }, {
            headers: {
                'Authorization': `Bearer ${Cookie.get("token")}`
            }
        })
            .then((res) => {
                window.location.href = "/profile";
            })
            .catch((error) => {
                console.error(error)
            })
    };

    render() {
        return (
            <form class="row g-3" onSubmit={this.handleSubmit}>
                <div class="col-12">
                    <label for="inputEmail4" class="form-label">New Email</label>
                    <input type="email" onChange={this.handleChangeEmail} class="form-control" id="inputEmail" placeholder={Cookie.get("email")} />
                </div>
                <div class="col-12">
                    <label for="inputAddress2" class="form-label">New Full Name</label>
                    <input type="text" onChange={this.handleChangeFull_name} class="form-control" id="inputFull" placeholder={Cookie.get("full_name")} />
                </div>
                <div class="col-12">
                    <button type="submit" class="btn btn-primary">EDIT</button>
                </div>
            </form>
        );
    }
}
