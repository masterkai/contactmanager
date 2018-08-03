import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Consumer } from '../../context';
import axios from 'axios';

export default class Contact extends Component {
  state = {
    showContactInfo: false,
    cardSwitch: false
  };

  deleteItem = async (id, dispatch) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      dispatch({ type: 'DELETE_CONTACT', payload: id });
    } catch (e) {
      dispatch({ type: 'DELETE_CONTACT', payload: id });
    }
  };

  showContactDetail = e => {
    this.setState({
      showContactInfo: !this.state.showContactInfo,
      cardSwitch: !this.state.cardSwitch
    });
  };

  render() {
    const { name, email, phone, id } = this.props.contact;
    const { showContactInfo, cardSwitch } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <div className="flexContainer">
                <h4>
                  {name}&emsp;
                  <i
                    onClick={this.showContactDetail}
                    className={
                      cardSwitch ? 'fas fa-caret-down' : 'fas fa-caret-right'
                    }
                    style={{ cursor: 'pointer' }}
                  />
                </h4>
                <div className="edit">
                  <i
                    className="fas fa-times"
                    style={{ cursor: 'pointer', float: 'right', color: 'red' }}
                    onClick={this.deleteItem.bind(this, id, dispatch)}
                  />
                  <Link to={`contact/edit/${id}`}>
                    <i
                      className="fas fa-pen"
                      style={{
                        cursor: 'pointer',
                        float: 'right',
                        marginRight: '1rem'
                      }}
                    />
                  </Link>
                </div>
              </div>
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">Phone: {phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.prototypes = {
  contact: PropTypes.object.isRequired
};
