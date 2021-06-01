import './App.css';
import MainNavigationContainer from './components/AllPosts'
import { Route } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header'
import RegisterClass from './components/RegisterClass'
import LoginClass from './components/LoginClass'
import Logout from './components/Logout'
import Profile from './components/Profile'
import EditProfile from './components/EditProfile'
import MyPosts from './components/MyPosts'
import ViewPost from './components/ViewPost'
import PostEdit from './components/PostEdit'
import MainPage from './components/MainPage'
import CreatePost from './components/CreatePost'
import CommentCreate from './components/CommentCreate'






function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <header className="header">
          <Route path='/*' component={Header} />
        </header>
        <div className="container">
          <Route path='/main_page' component={MainPage} />
          <Route path='/register' component={RegisterClass} />
          <Route path='/login' component={LoginClass} />
          <Route path='/logout' component={Logout} />
          <Route path='/main' component={MainNavigationContainer} />
          <Route path='/profile' component={Profile} />
          <Route path='/edit_profile' component={EditProfile} />
          <Route path='/my_posts' component={MyPosts} />
          <Route path='/postView' component={ViewPost} />
          <Route path='/post_edit' component={PostEdit} />
          <Route path='/post_create' component={CreatePost} />
          <Route path='/comment_create' component={CommentCreate} />
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
