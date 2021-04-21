import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

class PostsLists extends Component {

    componentDidMount(){
        this.props.fetchPosts();
    }

    render() {
        return (
            <div>
                Posts List
            </div>
        )
    }
}

export default (connect(null , fetchPosts))(PostsLists);
