import React, { Component } from 'react'

class TodoList extends Component {
    render() {
        return (
            <div className="ui list">
                <p className="item">Learn context</p>
                <p className="item">code contex</p>
                <p className="item">write notes and update git hub repo</p>
                <p className="item">code a new project using context</p>
            </div>
        )
    }
}

export default TodoList
