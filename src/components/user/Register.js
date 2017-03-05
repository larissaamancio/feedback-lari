import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class Register extends Component {

  onSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    this.props.onSubmit();
  }

  onChange = ({ target: { name, value } }) => {
    this.props.onChange({ name, value });
  }

  render() {
    const { user, errors } = this.props;
    const errorContainer = errors.map(({ code, message }) => (
      <div key={`error-${code}`}>{code} - {message}</div>
    ));

    return (
      <div>
        <div className="errors">{errorContainer}</div>
        <form onSubmit={this.onSubmit}>
          <label htmlFor="email">Email</label>
          <input onChange={this.onChange} value={user.get('email')} className="" name="email" type="text" /> <br />
          <label htmlFor="password">Password</label>
          <input onChange={this.onChange} value={user.get('password')} name="password" type="password"/><br />
          <button onClick={this.onSubmit}>Cadastrar</button>
        </form>
      </div>
    );
  }
}

export default connect(
  ({ user, errors }) => ({ user, errors }),
  dispatch => ({
    onSubmit: () => ( dispatch({type: 'onSubmit'}) ),
    onChange: payload => ( dispatch({ type: 'onChange', payload }) )
  })
)(Register);
