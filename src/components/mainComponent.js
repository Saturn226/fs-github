import React from "react";
import styled from "styled-components";
import {SearchPageComponent} from "./searchPageComponent"

export const MainComponent = () => {
    return (
        <MainGrid>
            <SearchPageComponent/>
        </MainGrid>
    );
};

const MainGrid = styled.div`
    
`
