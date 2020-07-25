import React from 'react';
import ListItem from './ListItem';

class List extends React.Component {
    render() {
        return (
            <div className="List">
                {this.props.tasks.map((t) => <ListItem task={t} key={t.id}/>)}
            </div>
        );
    }
}

export default List;