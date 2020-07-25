import React from 'react';

class ListItem extends React.Component {
    render() {
        return(
            <div className="ListItem">
                {this.props.task.description}
            </div>
        );
    }
}

export default ListItem;