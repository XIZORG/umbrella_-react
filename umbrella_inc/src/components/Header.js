import React from 'react';
import axios from 'axios'
import Cookie from "js-cookie"


const Header = () => {

    let buttons = (
        <div class="d-grid gap-2 d-md-flex justify-contentend">
            <form action="/login" style={{marginRight : 20}}>
                <button class="btn btn-primary me-md-2" type="submit">LOGIN</button>
            </form>
            <form action="/register">
                <button class="btn btn-primary" type="submit">REGISTR</button>
            </form>
        </div>
    )

    if (Cookie.get("token")) {
        buttons = (
            <>
                <a class="py-2 d-none d-md-inline-block" href="/my_posts">My Posts</a>
                <a class="py-2 d-none d-md-inline-block" href="/profile">Profile</a>
                {/* <a class="py-2 d-none d-md-inline-block" href="#">Categories</a> */}
                <div class="d-grid gap-2 d-md-flex justify-contentend">
                    <form action="/logout">
                        <button class="btn btn-primary me-md-2" type="submit">LOGOUT</button>
                    </form>
                </div>
            </>
        )
    }

    return (
        <nav class="my-header site-header sticky-top py-3">
            <div class="container d-flex flex-column flex-md-row justify-content-between">                                                                                                                                                                              .
                <a class="py-2" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="d-block mx-auto"><circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line></svg>
                </a>
                <h2 style={{ color: '#6666ff' }}>UMBRELLA</h2>
                <a class="py-2 d-none d-md-inline-block" href="/main_page">Main Page</a>
                <a class="py-2 d-none d-md-inline-block" href="/main">All Posts</a>
                {buttons}

            </div>
        </nav>
    );
}

export default Header;