import React from 'react'

function Article(params) {
console.log(params);
    return (
        <div>
            <h3>{params.title}</h3>
            <p>{params.body}</p>
        </div>
    )
}

export default Article