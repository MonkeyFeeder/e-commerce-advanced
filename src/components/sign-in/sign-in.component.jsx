import React from 'react';

import FormInput from './../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle, auth } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      // On connecte le user avec un email et un password
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        email: '',
        password: ''
      })
    } catch(error) {
      console.log(error);
    }

    this.setState({ email: '', password: '' })
  }

  handleChange = event => {
    // On récupère value et name pour modifier dynamiquement le state. Si le name est "email", il modifiera le state.email et lui attribuera la valeur de l'Input. Pareil pour Password.
    const { value, name } = event.target;

    this.setState({ [name]: value })
  }

  render() {
    return(
      <div className="sign-in">
        <h2>I already have an account</h2>
        <p>Sign in with your email and password</p>

        <form onSubmit={this.handleSubmit}>
          <FormInput 
            name="email" 
            type="email" 
            value={this.state.email} 
            onChange={this.handleChange}
            label="email"
            required />
          <FormInput 
            name="password" 
            type="password" 
            value={this.state.password} 
            onChange={this.handleChange}
            label="password"
            required />
  
          <div className="buttons">
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn;