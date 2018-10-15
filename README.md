# Fetch GitHub User

## Starting the Application
To run this Application:
1. Clone/download this repository (Saturn226/fs-github)
2. Change directory into the cloned repository.
3. Make Sure you are on the correct branch `git -co feature-react`
4. Run `npm start` command to start the server
5. In the search box, type the github handle of any user 

I decided to add some react functionality to my application and make it a bit more robust.

There are 3 components. 

##SearchPageComponent

This is the main component of the application. This component is a stateful component that makes the
api request to `/users` and saves the resulting user to the state. This user will then be passed to the
resultPageComponent as a prop to be displayed.

There is a handleErrors function that will throw an error if the response is not a 200 status code. If it does, it will set this error to the state.

##ResultPageComponent

The user is recieved as props from the SearchPageComponent. If the props includes an error, it will render that error. Otherwise, it will proceed to show the information on the page, which I destructured from `props.user`

##reposComponent
The user prop contains information for a `repos_url` I pass this in as a prop to the reposComponent where I display the information on the first 4 repos. I first fetch the repos from the repos_url and add in parameters to sort by most recently updated. I then create a variable to limit the amount of repos I display. (I couldnt find a limit in the api)  I chose to limit the amount of repos to 4 for a nice display. Though this could probably be a variable prop in the future. With this limit, I could splice the exact amount of repos I need. Some users might have less than 4 repos. I therefore decided to get the lowest number between the length of the repos array and 4. 
I then map over each repo and display its name and description

##Styled Components
I have been messing with styled components a lot lately and I kind of like how they work. I havent fully figured out the most appropriate way of implementing them into a project, but I do like the idea of keeping the styles with the components. I was also able to get CSS grid working with them.

##Learn Logo
I stole this from the learn site. Im not sure how the real one animates. So I tried to make something
that looked fairly close.

##For the future
To make this project better, I would like to add a scroll button to the repos component that would allow me to scroll left and right. Then I can increase the amount of repos displayed to something like 10

I would like to add a responsive design.

I might split the components into components and containers

I would like to fix an issue in the reposComponent `componentDidUpdate` function. Where `setState` is
still called when a user is not found and reposComponent doesnt mount. 

