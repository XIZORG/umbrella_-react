import React, { Component } from 'react'
import axios from 'axios'
import Cookie from "js-cookie"

export default class Logout extends Component {

    handleSubmit = (event) => {
        event.preventDefault();
        const api = {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: "Bearer" + Cookie.get("token"),
            },
            data: {
            },
            url: "http://localhost:8000/api/auth/logout",
        };
        console.log(api);
        axios
            .post(api.url, api.data, { headers: api.headers })
            .then(function (response) {
                Cookie.remove("token");                
                Cookie.remove("user_id"); 
                axios.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
                window.location.href = "/main";
            })
            .catch(function (error) {
                console.log(error);
                window.location.reload();
            });
        Cookie.remove("token");
    };

    render() {
        return (
            <div class="card">
                <div class="card-header">
                <br></br>
                </div>
                <div class="card-body">
                    <h5 class="card-title">Are you sure you want to get out?</h5>
                    <p class="card-text">Some of your data may not be saved, so we recommend that you think again about your decision.</p>
                    <a onClick={this.handleSubmit} href="/main" class="btn btn-primary">logout</a>
                </div>
            </div>
        );
    }
}