import fetch from "isomorphic-fetch"
import registerServiceWorker from './registerServiceWorker';

export const getRepos = (name) => {
    return fetch(`http://api.github.com/users/${name}`)
        .then(res => res.json())
        .then(data => renderResult(data))
}

export const renderResult = (data) => {
    let html = ""
    html += `<h1>${data.login}</h1>`
    document.getElementById("root").innerHTML = html
}

registerServiceWorker();

getRepos('saturn226')



