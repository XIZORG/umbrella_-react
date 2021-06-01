import React, { Component } from 'react'
import Cookie from "js-cookie"
import axios from 'axios'


export default class MainNavigationContainer extends Component {
    state = {
        posts: [],
    }

    goToThePost(id) {
        Cookie.set("post_id", id);
        window.location.href = "/postView";
    }

    goToTheEdit(id) {
        Cookie.set("post_id", id);
        window.location.href = "/post_edit";
    }

    createPost(){
        window.location.href = "/post_create";
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/posts/myPosts', {
            headers: {
                'Authorization': `Bearer ${Cookie.get("token")}`
            }
        })
            .then(res => {
                const posts = res.data;
                this.setState({ posts });
            })
            .catch((error) => {
                console.error(error)
            })

    }

    render() {
        let htmlArr = [];
        console.log(this.state.posts)
        this.state.posts.forEach((post) => {
            htmlArr.push(
                <div class="row">
                    <div class="col-md-4">
                        <div class="card mb-4 box-shadow">
                            <div class="card-body">
                                <p class="card-text">{post.title}</p>
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="btn-group">
                                        <button onClick={() => this.goToThePost(post.id)} type="button" class="btn btn-sm btn-outline-secondary">View</button>
                                        <button onClick={() => this.goToTheEdit(post.id)} type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                                    </div>
                                    <small class="text-muted">{post.author}</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        });
        console.log(htmlArr)
        return (
            <div class="album py-5 bg-light">
                <div class="album py-5 bg-light">
                    <div class="row">
                        <div class="container">
                            {htmlArr}
                        </div>

                    </div>
                    <div class="btn-group">
                        <button onClick={() => this.createPost()} type="button" class="btn btn-sm btn-outline-secondary">Create Post</button>
                    </div>
                </div>
            </div>

        );
    }
}
