import React from "react";
import styled from "styled-components"

export const ResultsPageComponent = () => {
    return (
        <Div>
            <p>Results Component</p>
        </Div>
    );
};

const Div = styled.div`
  grid-area: results;
  border: 5px solid lightpink;
  background: white //TODO: Delete this later
`