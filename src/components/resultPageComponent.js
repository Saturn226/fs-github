import React from "react";
import styled from "styled-components"

export const ResultsPageComponent = (props) => {
    if (props.error) {
        return (
            <h1>{props.error}</h1>
        )
    }
    
    
    if (props.user) {
        const data = props.user
        const dataList = Object.keys(data).map((key) => {
            return <li key={key}><strong>{key}:</strong> {data[key]}</li>
        }  )
        return (
                <Div>
                        <Img src={props.user.avatar_url}/>
                        <Ul>
                            {dataList}
                        </Ul>
                  
                </Div>
        );
    }else
    return(<h1>Search for A user!</h1>)

    
    return null;
};

const Ul = styled.ul`
    list-style: none;
    text-align: left
`
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
