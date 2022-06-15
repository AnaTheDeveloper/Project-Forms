import useInput from "../hooks/use-input";

const nameValidation = value => value.trim() !== '';
const emailValidation = value => value.includes('@')

const BasicFormAfter = (props) => {

    const {
        value: enteredFirstName,
        isValid: enteredFirstNameIsValid,
        hasError: enteredFirstNameIsInvalid,
        valueChangeHandler: firstNameInputHandler,
        inputBlurHandler: firstNameBlurHandler,
        resetInput: resetFirstName,
    } = useInput(nameValidation);

    const {
        value: enteredLastName,
        isValid: enteredLastNameIsValid,
        hasError: enteredLastNameIsInvalid,
        valueChangeHandler: lastNameInputHandler,
        inputBlurHandler: lastNameBlurHandler,
        resetInput: resetLastName,
    } = useInput(nameValidation);

    const {
        value: enteredEmail,
        isValid: enteredEmailIsValid,
        hasError: enteredEmailIsInvalid,
        valueChangeHandler: emailInputHandler,
        inputBlurHandler: emailBlurHandler,
        resetInput: resetEmail,
    } = useInput(emailValidation);

    //Form Validity

    let formIsValid = false;
    if (enteredFirstNameIsValid && enteredLastNameIsValid && enteredEmailIsValid) {
        formIsValid = true;
    }
  
    //Submission Handler

    const formSubmissionHandler = (event) => {

        event.preventDefault();

        if (!formIsValid) {
            return ;
        }

        console.log("Entered First Name: ", enteredFirstName);
        console.log("Entered Last Name: ", enteredLastName);
        console.log("Entered Email: ", enteredEmail);

        resetFirstName();
        resetLastName();
        resetEmail();
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
            onChange={lastNameInputHandler}
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
  
  export default BasicFormAfter;
  