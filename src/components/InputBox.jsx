import React from 'react';

class InputBox extends React.Component {
    render() {
        return(
            <div className="InputBox">
                <form>
                    <input placeholder="Enter task"></input>
                    <button type="submit">Add</button>
                </form>
            </div>
        );
    }
}

export default InputBox;