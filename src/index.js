import fetch from "isomorphic-fetch"
import registerServiceWorker from './registerServiceWorker';

export const getRepos = (name) => {
    return fetch(`http://api.github.com/users/${name}`)
        .then(res => res.json())
}

export const renderResult = (data) => {
    let html = ""
    html += `<h1>${data.login}</h1>`
    document.getElementById("root").innerHTML = html
}

export const getReposAndRender = (name) => {
    getRepos(name)
        .then(data => renderResult(data))
}

registerServiceWorker();

getReposAndRender('saturn226')



