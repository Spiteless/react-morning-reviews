import React, {Component} from 'react'

class List extends React.Component {
    constructor(){
        super()
        this.state = {
            movies: []
        }
    }

    render(){
        return (
            <div>
                <h1>This is a list Component</h1>
            </div>
        )
    }
}

export default List