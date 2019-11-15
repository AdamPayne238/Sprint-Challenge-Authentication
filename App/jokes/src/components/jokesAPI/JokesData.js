import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchJokes } from "../actions";

import Jokes from "./Jokes";

const JokesData = props => {
    useEffect(props => {
        props.fetchJokes();
    }, []);
    // console.log("fetch", fetchJokes)

    return (
        <div>
            {/* {props.error && <p>{props.error}</p>} */}
            {props.jokesData.map(joke => (
                <Jokes 
                key={joke.id}
                joke={joke}
                fetchJokes={fetchJokes}
                />
            ))}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        jokesData: state.jokesData,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(
    mapStateToProps,
    {fetchJokes}
)(JokesData);