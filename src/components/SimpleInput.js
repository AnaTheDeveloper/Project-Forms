import {useState} from 'react';
import useInput from '../hooks/use-input';

const SimpleInput = (props) => {

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    resetInput: resetNameInput,
  } = useInput(value => value.trim() !== '');

  //States
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  //Validation
  const enteredEmailIsValid = enteredEmail.includes('@');
  const emailInputIsInvalid = !enteredNameIsValid && enteredEmailTouched;

  //Overall form validity
  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  } 

  //Handlers
  const emailInputChangeHandler = event => {
    setEnteredEmail(event.target.value);
  };

  const emailInputBlurHandler =  event => {
    setEnteredEmailTouched(true);
  };

  //Submission Handler
  const formSubmissionHandler = event => {

    event.preventDefault();

    setEnteredEmailTouched(true);
    if (!enteredNameIsValid && !enteredEmailIsValid) {
      return;
    }

    console.log("Entered Name", enteredName);
    console.log("Entered Email", enteredEmail);

    //RESET INPUTS
    resetNameInput();
    setEnteredEmail('');
    setEnteredEmailTouched(false);
  };

  const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control';
  const emailInputClasses = emailInputIsInvalid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
        type='text' 
        id='name' 
        onChange={nameChangedHandler}
        onBlur={nameBlurHandler}
        value={enteredName}
        />
        {nameInputHasError && <p className="error-text">Name must not be empty.</p>}
      </div>

      <div className={emailInputClasses}>
        <label htmlFor='name'>Your Email</label>
        <input 
        type='email' 
        id='email' 
        onChange={emailInputChangeHandler}
        onBlur={emailInputBlurHandler}
        value={enteredEmail}
        />
        {emailInputIsInvalid && <p className="error-text">Enter a valid email.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

/*
There are two ways we can fetch the entered value.
1. We can listen to every keystroke and store the value in some state variable.
2. We can use useRef to fetch the input once the user is done typing in a value.

onBlur() - Used when something looses focus.
*/