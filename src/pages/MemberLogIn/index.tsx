import React, { useState, ChangeEvent, FormEvent } from 'react';
import googleIcon from '../../assets/icons/googleIcon.png';
import hideIcon from '../../assets/icons/hideIcon.png';
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
      return;
    }
    if (password === '') {
      setErrorPassword('Password is incorrect');
      return;
    }
    alert('You have successfully logged in');
  };

  return (
    <div className={styles.logIn}>
      <div className={styles.formContainer}>
        <h2>Log In to Member Portal </h2>
        <button className={styles.googleButton}>
          <img
            src={googleIcon}
            alt="google-icon"
            className={styles.googleIcon}
          />
          Log in with Google
        </button>
        <div className={styles.hrText}>
          <hr />
          <span className={styles.logInSpan}>
            or log in with e-mail
          </span>
        </div>

        <form
          className={styles.formLogIn}
          noValidate
          onSubmit={checkCredential}
        >
          <label className={styles.labelLogIn}>
            E-mail
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              className={styles.emailInput}
            />
            <p className={styles.errorMessage}>{errorEmail}</p>
          </label>

          <label className={styles.labelLogIn}>
            <div className={styles.passwordHide}>
              Password
              <div className={styles.hideIcon}>
                <img src={hideIcon} alt="hide-icon" />
                <span>Hide</span>
              </div>
            </div>

            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              className={styles.passwordInput}
            />
            <p className={styles.errorMessage}>{errorPassword}</p>
          </label>
          <a href="#" className={styles.forgotPassword}>
            Forgot your password?
          </a>
          <button type="submit" className={styles.logInBtn}>
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default MemberLogIn;
