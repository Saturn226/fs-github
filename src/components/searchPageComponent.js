import React from "react";
import styled from "styled-components"

export const SearchPageComponent = () => {
    return (
        <Div>
            <p>Search Page Component</p>
        </Div>
    );
};

const Div = styled.div`
  grid-area: search;
  border: 5px solid lightpink;
`
