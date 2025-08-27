import React, { useState, ChangeEvent, FormEvent } from 'react';
import styles from './styles.module.scss';

const MemberLogIn: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorEmail, setErrorEmail] = useState<string>('');
  const [errorPassword, setErrorPassword] = useState<string>('');

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
  };

  const checkCredential = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setErrorEmail('');
    setErrorPassword('');

    if (!email.includes('@uwaverde.com') || email === '') {
      setErrorEmail('Please enter a valid email address');
    }
    if (password === '') {
      setErrorPassword('Password is incorrect');
    }
    alert('You have successfully logged in');
  };

  return (
    <div className={styles.formContainer}>
      <h2>Log In to Member Portal </h2>
      <button className={styles.googleButton}>
        <img src="./src/assets/google-icon.png" alt="google-icon" />
        Log in with Google
      </button>
      <div className={styles.hrText}>
        <hr />
        <span>or log in with e-mail</span>
      </div>

      <form className={styles.formLogIn} noValidate onSubmit={checkCredential}>
        <label>
          E-mail
          <input type="email" value={email} onChange={handleEmailChange} />
          <p className={styles.errorMessage}>{errorEmail}</p>
        </label>

        <label>
          <div className={styles.passwordHide}>
            Password
            <div className={styles.hideIcon}>
              <img src="./src/assets/hide-icon.png" alt="hide-icon" />
              <span>Hide</span>
            </div>
          </div>

          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <p className={styles.errorMessage}>{errorPassword}</p>
        </label>
        <a href="#">Forgot your password?</a>
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default MemberLogIn;
