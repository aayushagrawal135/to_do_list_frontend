import React from 'react';

class InputBox extends React.Component {
    render() {

        let formFields = {};

        return(
            <div className="InputBox">
                <form onSubmit={ (e) => {
                    e.preventDefault();
                    this.props.handleFormSubmit(
                        formFields.description.value
                    );
                    e.target.reset();}
                }>
                    <input ref={input => formFields.description = input}
                    placeholder="Enter task"></input>
                    <button type="submit">Add</button>
                </form>
            </div>
        );
    }
}

export default InputBox;