import React, { Component } from 'react';

class AddPlayer extends Component {
  state = {
    firstName: '',
    lastName: '',
    username: '',
    playCount: 0
  };

  addPlayer = e => {
    e.preventDefault();

    this.props.onAddPlayer({ ...this.state });
    this.clearForm();
  };

  clearForm = () => {
    this.setState(prevState => ({
      firstName: '',
      lastName: '',
      username: '',
      playCount: 0
    }));
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  isUsernameExists = () =>
    this.props.players.filter(
      player => player.username === this.state.username.trim()
    ).length;

  isValidForm = () => {
    const { firstName, lastName, username } = this.state;

    return (
      firstName.trim().length > 0 &&
      lastName.trim().length > 0 &&
      username.trim().length > 0 &&
      !this.isUsernameExists()
    );
  };

  render() {
    const { firstName, lastName, username } = this.state;

    return (
      <div>
        <h2>Add Player</h2>
        <form onSubmit={this.addPlayer}>
          <div className="form-group">
            <input
              type="text"
              name="firstName"
              className="form-control"
              onChange={this.handleInputChange}
              placeholder="First Name"
              value={firstName}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="lastName"
              className="form-control"
              onChange={this.handleInputChange}
              placeholder="Last Name"
              value={lastName}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="username"
              className={`form-control ${
                this.isUsernameExists() ? 'is-invalid' : ''
              }`}
              onChange={this.handleInputChange}
              placeholder="Username"
              value={username}
            />
            <div className="invalid-feedback">
              This username already exists!
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={!this.isValidForm()}
          >
            Add Player
          </button>
        </form>
      </div>
    );
  }
}

export default AddPlayer;
