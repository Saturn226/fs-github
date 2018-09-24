import fetch from "isomorphic-fetch"
import registerServiceWorker from './registerServiceWorker';

export const getRepos = (name) => {
    return fetch(`http://api.github.com/users/${name}`)
        .then(res => res.json())
}


registerServiceWorker();
