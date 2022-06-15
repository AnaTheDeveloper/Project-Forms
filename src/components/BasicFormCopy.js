import {useState} from 'react';

const BasicFormCopy = (props) => {

    //States
    const [enteredFirstName, setEnteredFirstName] = useState('');
    const [enteredLastName, setEnteredLastName] = useState('');
    const [enteredEmail, setEnteredEmail] = useState('');

    const [enteredFirstNameTouched, setEnteredFirstNameTouched] = useState(false);
    const [enteredLastNameTouched, setEnteredLastNameTouched] = useState(false);
    const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
  
    //Validation

    const enteredFirstNameIsValid = enteredFirstName.trim() !== '';
    const enteredLastNameIsValid = enteredLastName.trim() !== '';
    const enteredEmailIsValid = enteredEmail.includes('@');

    const enteredFirstNameIsInvalid = !enteredFirstNameIsValid && enteredFirstNameTouched;
    const enteredLastNameIsInvalid = !enteredLastNameIsValid && enteredLastNameTouched;
    const enteredEmailIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

    //Form Validity

    let formIsValid = false;
    if (enteredFirstNameIsValid && enteredLastNameIsValid && enteredEmailIsValid) {
        formIsValid = true;
    }
  
    //Handlers

    const firstNameInputHandler = (event) => {
        setEnteredFirstName(event.target.value);
    };

    const lastNameInputhandler = (event) => {
        setEnteredLastName(event.target.value);
    };

    const emailInputHandler = (event) => {
        setEnteredEmail(event.target.value);
    };


    const firstNameBlurHandler = (event) => {
        setEnteredFirstNameTouched(true);
    };

    const lastNameBlurHandler = (event) => {
        setEnteredLastNameTouched(true);
    };

    const emailBlurHandler = (event) => {
        setEnteredEmailTouched(true);
    };
  
    //Submission Handler

    const formSubmissionHandler = (event) => {
        event.preventDefault();

        setEnteredFirstNameTouched(true);
        setEnteredLastNameTouched(true);
        setEnteredEmailTouched(true);

        if (!enteredFirstNameIsValid && !enteredLastNameIsValid && !enteredEmailIsValid) {
            return ;
        }

        console.log("Entered First Name: ", enteredFirstName);
        console.log("Entered Last Name: ", enteredLastName);
        console.log("Entered Email: ", enteredEmail);

        setEnteredFirstName('');
        setEnteredLastName('');
        setEnteredEmail('');

        setEnteredFirstNameTouched(false);
        setEnteredLastNameTouched(false);
        setEnteredEmailTouched(false);
    }
  
    //CSS Style 
    const firstNameInputStyles = enteredFirstNameIsInvalid ? 'form-control invalid' : 'form-control';
    const lastnameInputStyles = enteredLastNameIsInvalid ? 'form-control invalid' : 'form-control';
    const emailInputStyles = enteredEmailIsInvalid ? 'form-control invalid' : 'form-control';

  
    return (
      <form onSubmit={formSubmissionHandler}>
        <div className='control-group'>
  
          <div className={firstNameInputStyles}>
            <label htmlFor='name'>First Name</label>
            <input 
            type='text' 
            id='firstName' 
            onChange={firstNameInputHandler}
            onBlur={firstNameBlurHandler}
            value={enteredFirstName}
            />
            {enteredFirstNameIsInvalid && <p className="error-text">Name must not be empty.</p>}
          </div>
  
          <div className={lastnameInputStyles}>
            <label htmlFor='name'>Last Name</label>
            <input 
            type='text' 
            id='lastName' 
            onChange={lastNameInputhandler}
            onBlur={lastNameBlurHandler}
            value={enteredLastName}
            />
            {enteredLastNameIsInvalid && <p className="error-text">Name must not be empty.</p>}
          </div>
  
        </div>
  
        <div className={emailInputStyles}>
          <label htmlFor='name'>E-Mail Address</label>
          <input
          type='email' 
          id='email' 
          onChange={emailInputHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
          />
        {enteredEmailIsInvalid && <p className="error-text">Enter a valid Email.</p>}
        </div>
  
        <div className='form-actions'>
          <button disabled={!formIsValid}>Submit</button>
        </div>
        
      </form>
    );
  };
  
  export default BasicFormCopy;
  