import { useState, useReducer } from "react";

//Use Reducer
const initialInputState = {
    value: '',
    touched: false,
}

const inputStateReducer = (state, action) => {

    //UseReducer - managing the actions
    if(action.type === 'INPUT') {
        return {value: action.value, touched: state.touched};
    }

    if(action.type === 'BLUR') {
        return {touched: true, value: state.value};
    }

    if(action.type === 'RESET') {
        return {touched: false, value: ''};
    }

    return {initialInputState};
};

const useInput = (validateValue) => {

    //Use Reducer
    const [inputState, dispatch] = useReducer(inputStateReducer, initialInputState)

    // const [enteredValue, setEnteredValue] = useState('');
    // const [isTouched, setIsTouched] = useState(false);

    // const valueIsValid = validateValue(enteredValue);
    const valueIsValid = validateValue(inputState.value);

    // const hasError = !valueIsValid && isTouched;
    const hasError = !valueIsValid && inputState.touched;

    const valueChangeHandler = event => {
        dispatch({type: 'INPUT', value: event.target.value});
        //setEnteredValue(event.target.value);
    };

    const inputBlurHandler =  event => {
        dispatch({type: 'BLUR'});
        //setIsTouched(true);
    };

    const resetInput = () => {
        dispatch({type: 'RESET'});
        // setEnteredValue('');
        // setIsTouched(false);
    }

    return {
        // value: enteredValue,
        value: inputState.value,
        isValid: valueIsValid,
        hasError,
        valueChangeHandler,
        inputBlurHandler,
        resetInput,
    }

};
export default useInput;