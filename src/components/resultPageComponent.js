import React from "react";
import styled from "styled-components"

export const ResultsPageComponent = (props) => {
    if (props.user) {  
        return (
                <Div>
                        <Img src={props.user.avatar_url}/>
                        <h1>{props.user.login}</h1>
                        <h2>{props.user.name}</h2>
                        <p>{props.user.bio}</p>
                    
                </Div>
        );
    }
    return null;
};

const Div = styled.div`
  grid-area: results;
  border: 5px solid lightpink;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  align-items: center;
  padding: 20px

  background: white //TODO: Delete this later
`

const Img = styled.img`
    float: left;
    width: 100%;
    margin: 20px;

`
