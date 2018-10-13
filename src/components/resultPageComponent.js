import React from "react";
import styled from "styled-components"

export const ResultsPageComponent = (props) => {
    return (
        <Div>
            <Img src={props.img}/>
            <h1>{props.username}</h1>
            <h2>{props.name}</h2>
            <p>{props.bio}</p>

        </Div>
    );
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

ResultsPageComponent.defaultProps = {
    username: "Saturn226",
    name: "Ashley",
    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sed sint doloremque repellat, iste debitis.',
    img: `https://source.unsplash.com/random/300x300?v=$2`
}