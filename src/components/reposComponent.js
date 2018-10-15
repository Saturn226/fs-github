import React, {Component} from 'react'
import styled from 'styled-components'

export default class reposComponent extends Component {

    state = {
        repos: []
    }

    componentDidMount(){
        this.getRepos()
    }

    componentDidUpdate(){
        this.getRepos()
    }

    getRepos = () => {
            return fetch(this.props.repos_url + '?sort=updated-desc') 
                .then(res => res.json())
                .then(repos => this.setState({repos}))
                .catch((e) => {this.setState({error: e.message})})
        }
    
    
    render(){
        let limit = Math.min(this.state.repos.length, 4); //creating a limit for the amount of repos to show
                                                         // for the future this can probably be passed in as a prop
                                                         //the limit is 4, or the length of the repos array whichever is smaller
                                                         //this ensures we wont go out of bounds on the map
        
        const limitedArray  = this.state.repos.slice(0, limit) //grab the specified number or repos

        const repoList = limitedArray.map(repo =>{
            return <Item key={repo.id}>
                        <a href={repo.html_url}><p>{repo.name}</p></a>
                        <p>{repo.description}</p>
                    </Item>
        })
        return(
                <Ul>
                    <h2>Most Recently Updated Repos</h2>

                    {repoList}
                </Ul>
        
        )
    }
    
}


//styled  components
const Ul = styled.ul`
    grid-area: repos;
    display: grid;
    grid-gap: 20px
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    list-style: none;
`


const Item = styled.li` 
    min-height: 200px;
    min-width: 200px;
    border: 5px dashed #BDF1FD;

`
