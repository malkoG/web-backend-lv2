import * as React from 'react';
import {Route} from 'react-router-dom'

import { LoginView } from '../containers/LoginView'
import { PostListView } from '../containers/PostListView'
import { PostView } from '../containers/PostView'
import { UserListView } from '../containers/UserListView'
import { UserDetailView } from '../containers/UserDetailView'
import { CommentView } from '../containers/CommentView'

export class Section extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id="section">
                <Route path="/">
                    <Redirect to="/posts" />
                </Route>
                <Route exact path="/login"
                        render={(props) =>
                            <LoginView {...props}  />} />
                <Route exact path="/posts"
                        render={(props) =>
                            <PostListView { ...props} />} />
                <Route path="/posts/:id([0-9]+)"
                        render={(props) =>
                            <PostView { ...props} /> } />
                <Route exact path="/fbusers"
                        render={(props) => 
                            <UserListView { ...props} /> } />
                <Route path="/fbusers/:id([0-9]+)"
                        render={(props) =>
                            <UserDetailView { ...props} /> } />
                <Route path="/comments/:id([0-9]+)"
                        render={(props) =>
                            <CommentView { ...props} /> } />
            </div>
        );
    }
}