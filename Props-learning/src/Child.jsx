import React from 'react'
import GrandChild from "./GrandChild"

function Child(props) {
    return (
        <div>
            <p>Child's Family Name:
                {props.familyName} </p>
                <GrandChild/>
        </div>
    )
}

export default Child