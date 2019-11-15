import axios from 'axios';

export const START_AXIOS = 'START_AXIOS';
export const AXIOS_SUCCESS = 'AXIOS_SUCCESS';
export const AXIOS_FAILURE = 'AXIOS_FAILURE';
export const LOGIN_USER = 'LOGIN_USER';
export const REGISTER_USER = 'REGISTER_USER';

//Fetch Jokes
export const fetchJokes = () => dispatch => {
    //START_AXIOS
    dispatch({ type: START_AXIOS });
    axios
        //retrieve jokes
        .get("https://icanhazdadjoke.com/search")
    //AXIOS_SUCCESS
    .then(response => dispatch(console.log("fetch res", response),{ type: AXIOS_SUCCESS, payload: response.data }))
    //AXIOS_FAILURE
    .catch(err => dispatch({ type: AXIOS_FAILURE, payload: err.response}))
};

//Login User
export const loginUser = (user) => dispatch => {
    dispatch({ type: LOGIN_USER });
    axios
        .post("http://localhost:3300/api/auth/login", user)
    //REGISTER_USER
    .then(response => dispatch(console.log("Post Res Login", response),{ type: LOGIN_USER, payload: response.data}))
    .catch(error => console.log(error));
};

//Register User
export const registerUser = (user) => dispatch => {
    dispatch({ type: REGISTER_USER });
    axios
        .post(
            "http://localhost:3300/api/auth/register", user
        )
    //REGISTER_USER
    .then(response => dispatch(console.log("Post Res Register", response),{ type: REGISTER_USER, payload: response.data}))
    .catch(error => console.log(error));
};
