import React from "react";

//Users Display Component
const Jokes = props => {
    // console.log("Jokes", props.joke)

    return (
        <div>
            <h1>Jokes</h1>
            <h1>{props.joke}</h1>
        </div>
    );
};

export default Jokes;