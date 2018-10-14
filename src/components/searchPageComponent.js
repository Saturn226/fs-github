import React, {Component} from "react";
import styled from "styled-components"
import {ResultsPageComponent} from "./resultPageComponent.js"

export class SearchPageComponent extends Component {
    constructor() {
        super();
        this.state = {
            searchUser: ""
        }
    }

    searchUser = () => {
        return fetch(`http://api.github.com/users/` + this.state.searchUser)
            .then(res => res.json())
            .then(user => this.setState({user}))
    }

    handleOnChange = (e) => {
        this.setState({searchUser: e.target.value})
    }

    handleOnClick = (e) => {
        e.preventDefault();
        this.searchUser(e);
    }

    render() {
        return (
            <Div>
                <p>Search Page Component</p>
                <form onSubmit={this.handleOnClick}>
                    Search for user
                    <input type="text" value={this.state.searchUser} onChange={this.handleOnChange}></input>
                    <input type="submit"></input>
                    <ResultsPageComponent user={this.state.user}/>
                </form>
            </Div>
        );
    };
};

const Div = styled.div`
  grid-area: search;
  border: 5px solid lightpink;
`
