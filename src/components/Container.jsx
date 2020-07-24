import React from 'react';
import InputBox from './InputBox';
import List from './List';

class Container extends React.Component {
    render() {
        return (
            <div className="Container">
                <InputBox/>
                <List/>
            </div>
        );
    }
}

export default Container;