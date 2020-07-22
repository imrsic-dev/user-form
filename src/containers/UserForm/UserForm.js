import React, {Component} from "react";

class UserForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                name: ' ',
                email: ' ',
                lastName: ' '
            }
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        event.target.reset();
    }

    nameChangeHandler = (name) => {
        this.setState(prevState=>({
            user: {
                ...prevState.user,
                name
            }

        }));
    }
    lastNameChangeHandler = (lastName) => {
        this.setState(prevState=>({
            user: {
                ...prevState.user,
                lastName
            }

        }));
    }
    emailChangeHandler = (email) => {
        this.setState(prevState=>({
            user: {
                ...prevState.user,
                email
            }

        }));
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-container">
                    <h1 className="form-user-title">User Form</h1>
                    <input
                        className="form-user-input"
                        type="text"
                        placeholder="enter your name ..."
                        onChange={(e) => this.nameChangeHandler(e.target.value)}
                       />
                    <input className="form-user-input"
                           type="text"
                           placeholder="enter your last name ..."
                           onChange={(e) => this.lastNameChangeHandler(e.target.value)}
                    />
                    <input className="form-user-input"
                           type="text"
                           placeholder="enter your e-mail ..."
                           onChange={(e) => this.emailChangeHandler(e.target.value)}
                           />

                    <input
                        className="form-user-btn"
                        type="submit" value="Submit"
                        onClick={()=>this.props.submitUser(this.state.user)}/>
                </div>
            </form>
        );
    }

}



export default UserForm;