import React from 'react'
import Child from './child'

function GrandChild() {
    return (
        <div>
            <P>Grand Child's Family Name:
                {props.familyName}</P>
                <GrandChild />
        </div>
    )
}

export default Child