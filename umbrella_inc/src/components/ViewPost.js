import React, { Component } from 'react'
import Cookie from "js-cookie"
import axios from 'axios'


export default class ViewPost extends Component {
    state = {
        posts: [],
        comments: [],
        like: 0,
        dislike: 0,
    }

    createComment() {
        window.location.href = "/comment_create";
    }

    setLike() {
        const like = this.state.like + 1;
        this.setState({ like });
    }

    setDis() {
        const dislike = this.state.dislike + 1;
        this.setState({ dislike });
    }

    componentDidMount() {
        console.log(Cookie.get("post_id"));
        axios.get('http://127.0.0.1:8000/api/posts/' + Cookie.get("post_id"), {
            headers: {
                'Authorization': `Bearer ${Cookie.get("token")}`
            }
        })
            .then(res => {
                const posts = res.data.posts;
                this.setState({ posts });
                const comments = res.data.comments;
                this.setState({ comments });
            })
            .catch((error) => {
                console.error(error)
            })
    }

    render() {
        let htmlArr;
        this.state.posts.forEach((post) => {
            htmlArr = (
                <div class="col-lg-4">
                    <h2>{post.title}</h2>
                    <p>Author: {post.author}</p>
                    <p>Content: {post.content}</p>
                </div>
            )
        });

        let commentArr = [];
        this.state.comments.forEach((comment) => {
            commentArr.push(
                <div class="col-lg-4">
                    <h2>Comment by {comment.author}</h2>
                    <p>Content: {comment.content}</p>
                </div>
            )
        });
        return (
            <>
                <div class="album py-5 bg-light">
                    <div class="album py-5 bg-light">
                        <div class="row">
                            <div class="container">
                                {htmlArr}
                            </div>
                        </div>
                        <div class="container">
                            <a onClick={() => this.setLike()} class="like"><i class="fa fa-thumbs-o-up"></i>
                             Like <input class="qty1" name="qty1" readonly="readonly" type="text" value={this.state.like} />
                            </a>
                            <a onClick={() => this.setDis()} class="dislike"><i class="fa fa-thumbs-o-down"></i>
                              Dislike <input class="qty2" name="qty2" readonly="readonly" type="text" value={this.state.dislike} />
                            </a>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="container">
                        {commentArr}
                    </div>
                </div>
                <div class="btn-group">
                    <button onClick={() => this.createComment()} type="button" class="btn btn-sm btn-outline-secondary">Create Comment</button>
                </div>
            </>
        );
    }
}
