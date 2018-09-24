import fetch from "isomorphic-fetch"

export const getRepos = (name) => {
    return fetch(`http://api.github.com/users/${name}`)
        .then(res => res.json())
}

export const renderResult = (data) => {
    const {login, name, location, company, bio, 
        email, repos_url,public_repos  } = data
    
    const data_array = [name, company, location,bio, 
            email, public_repos, repos_url]
    let html = ""
    html += `<h1>${login}</h1>`
    data_array.map(data => {
        if (data)
           html += `<p>${data}</p>`
        return html
    })
    document.getElementById("root").innerHTML = html

}

export const getReposAndRender = (name) => {
    getRepos(name)
        .then(data => renderResult(data))
}

export const searchForRepos = () =>{
    let search = document.getElementById("query").value
    getReposAndRender(search);
    
}

document.getElementById("search-box").addEventListener("submit", function(e){
    e.preventDefault(); 
    searchForRepos();
})




