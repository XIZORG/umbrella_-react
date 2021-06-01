import React, { Component } from 'react'
import axios from 'axios'
import Cookie from "js-cookie"

export default class EditProfile extends Component {
    state = {
        content: '',
        title: '',
    }

    handleChangeContent = (event) => {
        this.setState({ content: event.target.value });
    };

    handleChangeTitle = (event) => {
        this.setState({ title: event.target.value });
    };

    handleSubmit = (event) => {
        console.log(Cookie.get("token"));
        event.preventDefault();
        axios.post('http://127.0.0.1:8000/api/posts/' + Cookie.get("post_id"), {
            content: this.state.content,
            title: this.state.title,
        }, {
            headers: {
                'Authorization': `Bearer ${Cookie.get("token")}`
            }
        })
            .then((res) => {
                window.location.href = "/my_posts";
            })
            .catch((error) => {
                console.error(error)
            })
    };

    render() {
        return (
            <form class="row g-3" onSubmit={this.handleSubmit}>
                <div class="col-12">
                    <label for="inputAddress2" class="form-label">New Title</label>
                    <input type="text" onChange={this.handleChangeTitle} class="form-control" id="inputEmail" />
                </div>
                <div class="col-12">
                    <label for="inputAddress2" class="form-label">New Content</label>
                    <input type="text" onChange={this.handleChangeContent} class="form-control" id="inputFull" />
                </div>
                <div class="col-12">
                    <button type="submit" class="btn btn-primary">Sign in</button>
                </div>
            </form>
        );
    }
}
