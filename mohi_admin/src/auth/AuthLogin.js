import React, { PropTypes } from 'react';
import { fetchAccessTokenIfNeeded } from './AuthActions';


class AuthLogin extends React.Component {
  constructor(){
    super();
    this.state = {
      username: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    const { store } = this.context;
    store.dispatch(fetchAccessTokenIfNeeded(this.state.username, this.state.password));
  }

  handleInputChange(e) {
    const target = e.target;
    const value = e.target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })
    console.log(this.state);
  }

  render() {
    return(
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card-group mb-0">
              <div className="card p-2">
                <div className="card-block">
                  <form onSubmit={this.handleSubmit} >
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <div className="input-group mb-1">
                      <span className="input-group-addon"><i className="icon-user"></i></span>
                      <input name="username" type="text" className="form-control" placeholder="Username" onChange={this.handleInputChange} value={this.state.username}/>
                    </div>
                    <div className="input-group mb-2">
                      <span className="input-group-addon"><i className="icon-lock"></i></span>
                      <input name="password" type="password" className="form-control" placeholder="Password" onChange={this.handleInputChange} value={this.state.password}/>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <button type="submit" className="btn btn-primary px-2">Login</button>
                      </div>
                      <div className="col-6 text-right">
                        <button type="button" className="btn btn-link px-0">Forgot password?</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="card card-inverse card-primary py-3 hidden-md-down" style={{ width: 44 + '%' }}>
                <div className="card-block text-center">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

AuthLogin.contextTypes = {
  store: React.PropTypes.object,
};

export default AuthLogin;
