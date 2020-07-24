import React from 'react';
import Header from './Header';
import Container from './Container';

class Main extends React.Component {
    render() {
        return (
            <div className="Main">
                <Header/>
                <Container/>
            </div>
        );
    }
}

export default Main;