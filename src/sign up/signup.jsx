import { useState } from "react";
import './signup.css'

const SignUpForm = () => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [signUpSuccess, setSignUpSuccess] = useState(false);
  const [money, setMoney] = useState(0);
  let formIsValid = true;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.length < 5) {
      setNameError('Name should be at least 5 characters');
      formIsValid = false;
    } else {
      setNameError('');
    }
    if (!email.includes("@gmail.com")) {
      setEmailError('Email should be a valid gmail address');
      formIsValid = false;
    } else {
      setEmailError('');
    }
    if (password.length < 8) {
      setPasswordError('Password should be at least 8 characters');
      formIsValid = false;
    } else {
      setPasswordError('');
    }

    if (formIsValid) {
      // sign up successful
      setSignUpSuccess(true);
      setMoney(100);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>
        Name:
        <input className="input_name"
          type='text'
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <p className='error'>{nameError}</p>
      </label>
      <label>
        Password:
        <input className="input_password"
          type='password'
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <p className='error'>{passwordError}</p>
      </label>
      <label>
        Email:
        <input className="input_email"
          type='text'
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <p className='error'>{emailError}</p>
      </label>
      <button type='submit'>Sign Up</button>
      {signUpSuccess && <p>Your money: {money} $</p>}
    </form>
  );
};

export default SignUpForm;