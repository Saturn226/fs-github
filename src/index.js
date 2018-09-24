import fetch from "isomorphic-fetch"

export const getRepos = (name) => {
    return fetch(`http://api.github.com/users/${name}`)
        .then(res => res.json())
}

export const renderResult = (data) => {
    let html = ""
    html += `<h1>User: ${data.login}</h1>
            <h2>Name: ${data.name}</h2>`
    Object.keys(data).map(key => {
        if (data[key] && key !== 'login' && key !== 'name')
           html += `<p>${key} : ${data[key]}</p>`
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




