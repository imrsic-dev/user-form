import React, {Component} from "react";
import {connect} from 'react-redux';
import {saveUser, deleteUser, setUsers} from "../../store/actions";

import UserForm from "../../containers/UserForm/UserForm";
import UserList from "../UserList/UserList";
import UserCard from "../UserCard/UserCard";


class MainContent extends Component {
    componentDidMount() {
        this.props.onInitUsers();
    }


    render() {
        let listContent = this.props.usr.map((user) => {
            return (<li key={user._id}>
                <UserCard
                    name={user.name}
                    email={user.email}
                    lastName={user.lastName}
                    deleteUser={() => this.props.onUserDelete(user._id)}
                />
            </li>);
        })
        if (this.props.err) {
            listContent = <li>Imamo grešku!!</li>;
        }

        return (
            <div className="MainContent">
                <UserForm submitUser={this.props.onUserCreate}/>
                <UserList>
                    {listContent}
                </UserList>

            </div>
        );
    }
}
//mapiranje statea za Redux
const mapStateToProps = state => {
    return {
        usr: state.users,
        err: state.error
    };
};
const mapDispatchToProps = dispatch => {
    return {
        onUserCreate: (user) => dispatch(saveUser(user)),
        onUserDelete: (_id) => dispatch(deleteUser(_id)),
        onInitUsers: () => dispatch(setUsers())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);