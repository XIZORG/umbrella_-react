import React, { Component } from 'react'
import axios from 'axios'
import Cookie from "js-cookie"

export default class CommentCreate extends Component {
    state = {
        content: '',
    }

    handleChangeContent = (event) => {
        this.setState({ content: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://127.0.0.1:8000/api/posts/' + Cookie.get("post_id") + '/comments', {
            content: this.state.content,
        }, {
            headers: {
                'Authorization': `Bearer ${Cookie.get("token")}`
            }
        })
            .then((res) => {
                window.location.href = "/postView";
            })
            .catch((error) => {
                console.error(error)
            })

        
    };

    render() {
        return (
            <form class="row g-3" onSubmit={this.handleSubmit}>
                <div class="col-12">
                    <label for="inputAddress" class="form-label">Content</label>
                    <input type="text" onChange={this.handleChangeContent} class="form-control" id="inputLogin" />
                </div>
                <div class="col-12">
                    <button type="submit" class="btn btn-primary">CREATE</button>
                </div>
            </form>
        );
    }
}
