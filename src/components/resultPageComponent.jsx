import React from 'react';
import styled from 'styled-components';
import ReposComponent from './reposComponent';

export const ResultsPageComponent = (props) => {
  // This will render an error if searchUser adds an error to the state
  if (props.error) {
    return <h1>{props.error}</h1>;
  }

  if (props.user) {
    const {
      login, avatar_url, repos_url, name, organizations_url, bio,
      html_url, company, location, blog, id,
    } = props.user;

    const shamelessPlug = login === 'Saturn226' ? <h1>HIRE ME!</h1> : null;

    return (
      <Div>
        <Img src={avatar_url} />
        <Ul>
          <a href={html_url}><li><h1>{login || 'N/A'}</h1></li></a>
          <li><h2>{name || 'N/A'}</h2></li>

          <li>
            <strong>Bio:</strong>
            {bio || 'N/A'}
          </li>
          <li>
            <strong>Company: </strong>
            {company || 'N/A'}
          </li>
          <li>
            <strong>Location: </strong>
            {location || 'N/A'}
          </li>
          <li>
            <strong>Blog: </strong>
            {blog || 'N/A'}
          </li>
          {shamelessPlug}
        </Ul>
        <ReposComponent repos_url={repos_url} />

      </Div>
    );
  } return (<h1>Search for a user!</h1>); // Will render the first time component mounts
};


const Ul = styled.ul`
    list-style: none;
    text-align: left;
    grid-area: info;
`;
const Div = styled.div`
  grid-area: results;
  border: 5px solid #BDF1FD;
  display: grid;
  grid-template-columns: 400px 1fr
  grid-template-areas: "img info"
                        "repos repos";
  padding: 20px;
`;

const Img = styled.img`
    margin: 20px;
    max-width: 100%;
    grid-area: img;

`;
