import React, {Component} from 'react'
import styled from 'styled-components'

export default class reposComponent extends Component {
    constructor(){
        super()
        this.state ={
            repos: []
        }
    }
    render(){
        let limit = Math.min(this.state.repos.length, 4); // Use whichever number is smaller
        
        const limitedArray  = this.state.repos.slice(0, limit)

        const repoList = limitedArray.map(repo =>{
            return <Item key={repo.id}>
                        <a href={repo.html_url}><p>{repo.name}</p></a>
                        <p>{repo.description}</p>
                    </Item>
        })
        return(
             
                <Ul>
                    {repoList}
                </Ul>
        
        )
    }
    
    componentDidMount(){
        this.getRepos()
    }

    componentDidUpdate(){
        this.getRepos()
    }

    getRepos = () => {
            return fetch(this.props.repos_url) 
                .then(res => res.json())
                .then(repos => this.setState({repos}))
                .catch((e) => {this.setState({error: e.message})})
        }
    
}

const Ul = styled.ul`
    grid-area: repos;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-gap: 20px
    list-style: none;
`


const Item = styled.li` 
    min-height: 200px;
    min-width: 200px;
    background-color: pink;
`
