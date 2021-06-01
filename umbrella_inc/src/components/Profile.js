import React, { Component } from 'react'
import Cookie from "js-cookie"
import axios from 'axios'


export default class Profile extends Component {
    state = {
        user: 1,
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/users/' + Cookie.get("user_id"), {
            headers: {
                'Authorization': `Bearer ${Cookie.get("token")}`
            }
        })
            .then((res) => {
                const user = res.data;
                this.setState({ user });
            })
            .catch((error) => {
                console.error(error)
            })
    }

    render() {
        let htmlArr;
        console.log(this.state.posts)
            htmlArr = (
                <div class="col-lg-4">
                    <img class="rounded-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="140" height="140" />
                    <h2>{this.state.user.login}</h2>
                    <p>Email: {this.state.user.email}</p>
                    <p>Full_Name: {this.state.user.full_name}</p>
                    <p><a class="btn btn-secondary" href="/edit_profile" role="button">Edit Profile»</a></p>
                </div>
            );
        Cookie.set("login",this.state.user.login);
        Cookie.set("email",this.state.user.email);
        Cookie.set("full_name",this.state.user.full_name);
        return (
            <div class="album py-5 bg-light">
                <div class="album py-5 bg-light">
                    <div class="row">
                        <div class="container">
                            {htmlArr}
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
