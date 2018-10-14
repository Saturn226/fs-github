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

    handleErrors = (response) => {
        if(!response.ok)
            throw Error(response.statusText);
            return response.json()
    }

    searchUser = () => {
        if (this.state.searchUser) {
            return fetch(`http://api.github.com/users/` + this.state.searchUser) 
                .then(res => this.handleErrors(res))
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
                    <input type="text" required value={this.state.searchUser} onChange={this.handleOnChange}></input>
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
