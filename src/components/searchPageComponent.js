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
        if (this.state.searchUser) {
            return fetch(`http://api.github.com/users/` + this.state.searchUser) 
                .then(response => {if (!response.ok) {
                    throw Error(response.statusText);
                } else {
                    return response.json();
                }})
                .then(user => this.setState({user}))
                .catch((e) => {this.setState({error: e.message})})
        }
        else
            this.setState({error: "Not Found"})
    }

    handleOnChange = (e) => {
        this.setState({searchUser: e.target.value})
    }

    handleOnClick = (e) => {
        e.preventDefault();
        this.searchUser();
        this.setState({searchUser: ""})
    }

    render() {
        return (
            <Div>
                <p>Search Page Component</p>
                <form onSubmit={this.handleOnClick}>
                    Search for user
                    <input type="text" value={this.state.searchUser} onChange={this.handleOnChange}></input>
                    <input type="submit"></input>
                </form>
                <ResultsPageComponent user={this.state.user} error={this.state.error}/>

            </Div>
        );
    };
};

const Div = styled.div`
  grid-area: search;
  border: 5px solid lightpink;
`
