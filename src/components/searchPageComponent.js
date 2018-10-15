import React, {Component} from "react";
import styled from "styled-components"
import ResultsPageComponent from "./resultPageComponent.js"

export class SearchPageComponent extends Component {

    getInitialState = () => {
        return {
            searchUser: "",
            error: null
        }
    }

    state = this.getInitialState();
    
    handleErrors = (response) => {
        if(!response.ok){
            throw Error(response.statusText);
        }
        return response.json()
    }

    

    searchUser = () => {
        if (this.state.searchUser) {
            return fetch(`http://api.github.com/users/` + this.state.searchUser) 
                .then(res => this.handleErrors(res))
                .then(user => this.setState({user}))
                .then(()=> this.setState(this.getInitialState())) //fixes an issue where child components may not rerender

                .catch((e) => this.setState({error: e.message}))
        } 
    }

    handleOnChange = (e) => {
        this.setState({searchUser: e.target.value})
    }

    handleOnClick = (e) => {
        e.preventDefault();
        this.searchUser();
        this.setState({searchUser: ""});
    }

    render() {
        return (
            <Div>
                <SearchArea> 
                    <form onSubmit={this.handleOnClick}>
                        <strong>Search for user:</strong>
                        <input type="text" required value={this.state.searchUser} onChange={this.handleOnChange}></input>
                        <Button>Submit</Button>
                    </form>
                </SearchArea>
                <ResultsPageComponent user={this.state.user} error={this.state.error}/>

            </Div>
        );
    };
};

//styling
const SearchArea = styled.div`
    grid-area:search;
    `
const Button = styled.button`
    border-radius: 9999px;
    background-color: #00BCE1;
    color: white;
    width: 100px;
    height: 20px;
    margin: 10px;
    font-family: "Aktiv Grotesk", "Helvetica Neue", Helvetica, Arial, sans-serif;
    ;
`

const Div = styled.div`
    display: grid;
    margin: 20px;
    grid-template-areas: "search"
                        "results";
    grid-gap: 20px;
   `
