import React, {Component} from "react";
import styled from "styled-components"
import {ResultsPageComponent} from "./resultPageComponent.js"

export class SearchPageComponent extends Component {
    constructor() {
        super();
        this.state = {
            user: null
        }
    }

    render() {
        return (
            <Div>
                <p>Search Page Component</p>
                <form onSubmit={handleOnClick}>
                    Search for user
                    <input type="text"></input>
                    <input type="submit"></input>
                    <ResultsPageComponent/>

                </form>
            </Div>
        );
    };
};

export const searchUser = (name) => {
    return fetch(`http://api.github.com/users/${name}`)
        .then(res => res.json())
}

const handleOnClick = (e) => {
     e.preventDefault();
     searchUser();
}

const Div = styled.div`
  grid-area: search;
  border: 5px solid lightpink;
`
