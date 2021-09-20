import React, { Component } from 'react';
import './styles.scss';
import FormInput from '../forms/FormInput';
import Button from '../forms/Button';

const initialState = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
};

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...initialState
        };
    }

    render() {
        const { displayName } = this.state;

        return (
            <div className="signup">
                <div className="wrap">
                    <h2>
                        Signup
                    </h2>

                    <form>
                        <FormInput 
                            type="text"
                            name="displayName"
                            value={displayName}
                            placeholder="Full Name"
                        />
                    </form>
                </div>
            </div>
        )
    }
};

export default SignUp;