import React from 'react';
import PropTypes from 'prop-types';
import '../index.css';


export class User extends React.Component {
    render() {
        const {name} = this.props;
        return (
            <div className="user">
                <p>Привет, {name} !</p>
            </div>
        )
    }
}

User.PropTypes = {
    name: PropTypes.string.isRequired
}