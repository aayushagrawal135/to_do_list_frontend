import React from 'react';
import InputBox from './InputBox';
import List from './List';

class Container extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {tasks: []};
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.addNewTask = this.addNewTask.bind(this);
    }

    handleFormSubmit(description) {
        let body = JSON.stringify({task: {description: description}})

        fetch('http://localhost:4000/tasks', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: body
        }).then((response) => response.json())
        .then((data) => {this.addNewTask(data)})
    }

    addNewTask(task) {
        this.setState((state) => {
            return {tasks: state.tasks.concat(task)}
        })
    }

    componentDidMount() {
        fetch('http://localhost:4000/')
        .then((response) => response.json())
        .then((data) => {
            this.setState({ tasks: data });
        }).catch(error => console.log('There was an error : ' + error));
    }

    render() {
        return (
            <div className="Container">
                <InputBox handleFormSubmit={this.handleFormSubmit}/>
                <List tasks={this.state.tasks}/>
            </div>
        );
    }
}

export default Container;