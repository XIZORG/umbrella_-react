import React, { Component } from 'react'
import axios from 'axios'
import Cookie from "js-cookie"

export default class CreatePost extends Component {
    state = {
        title: '',
        content: '',
        category_id: 1,
    }

    handleChangeTitle = (event) => {
        this.setState({ title: event.target.value });
    };

    handleChangeAuthor = (event) => {
        this.setState({ author: event.target.value });
    };

    handleChangeContent = (event) => {
        this.setState({ content: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://127.0.0.1:8000/api/posts', {
            title: this.state.title,
            content: this.state.content,
            category_id: this.state.category_id,
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
                    <label for="inputEmail4" class="form-label">Title</label>
                    <input type="text" onChange={this.handleChangeTitle} class="form-control" id="inputEmail" />
                </div>
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
