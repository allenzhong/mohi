import React, { PropTypes } from 'react';
import { fetchAccessTokenIfNeeded } from './AuthActions';
import '../style/custom.css';


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
    const { store } = this.context;
    store.dispatch(fetchAccessTokenIfNeeded(this.state.username, this.state.password));
  }

  handleInputChange(e) {
    console.log(e);
    const target = e.target;
    const value = e.target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })
  }

  render() {
    return(
      <div className="login">
        <div className="login_wrapper">
          <div className="animate form login_form">
            <section className="login_content">
              <form onSubmit={this.handleSubmit}>
                <h1>Login Form</h1>
                <div>
                  <input name="username" type="text" className="form-control" placeholder="Username" required="" onChange={this.handleInputChange} value={this.state.username}/>
                </div>
                <div>
                  <input name="password" type="password" className="form-control" placeholder="Password" required="" onChange={this.handleInputChange} value={this.state.password}/>
                </div>
                <div>
                  <button className='btn btn-default submit'>Log in</button>
                  <a className="reset_pass" href="#">Lost your password?</a>
                </div>
                <div className="clearfix"></div>
              </form>
            </section>
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
