import React from "react";
import styled from "styled-components";
import {ResultsPageComponent} from "./resultPageComponent";
import {SearchPageComponent} from "./searchPageComponent"

export const MainComponent = () => {
    return (
        <MainGrid>
            <ResultsPageComponent/>
            <SearchPageComponent/>
        </MainGrid>
    );
};

const MainGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
    grid-template-areas:"search results"
    
`
