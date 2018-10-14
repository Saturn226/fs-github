import React from "react";
import styled from "styled-components"
import ReposComponent from "./reposComponent.js"

export const ResultsPageComponent = (props) => {
    if (props.error) {
        return (
            <h1>{props.error}</h1>
        )
    }
    
    
    if (props.user) {
        const {login, avatar_url, repos_url, name, organizations_url,bio} = props.user
        
        return (
                <Div>
                        <Img src={avatar_url}/>
                        <Ul>
                            <li><h1>{login}</h1></li>
                            <li><h2>{name}</h2></li>
                            <li>{bio}</li>

                        </Ul>

                        <ReposComponent repos_url={repos_url}/>
                  
                </Div>
        );
    }else
    return(<h1>Search for A user!</h1>)
};

const Ul = styled.ul`
    list-style: none;
    text-align: left;
    grid-area: info;
`
const Div = styled.div`
  grid-area: results;
  border: 5px solid lightpink;
  display: grid;
  grid-template-columns: 400px 1fr
  grid-template-areas: "img info"
                        "repos repos";
  padding: 20px;

  background: white //TODO: Delete this later
`

const Img = styled.img`
    margin: 20px;
    max-width: 100%;
    grid-area: img;

`
