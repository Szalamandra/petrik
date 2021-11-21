import React from "react";
import TextBox from "./TextBox";

export default class RegForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hidden: false,
            userName: '',
            password: '',
            showPassword: false,
            messages: [ 'msg1', 'msg2', 'msg3' ],
        }
    }

    handleShowPasswordClick = () => {
        this.setState({
            showPassword: !this.state.showPassword
        });
    };

    handleUserNameChange = (newUserName) => {
        this.setState({
            userName: newUserName,
        });
    };

    handlePasswordChange = (newPassword) => {
        this.setState({
            password: newPassword,
        });
    };

    handleMessageChange = (newMsg, index) => {
        const newMessages = Array.from(this.state.messages);
        newMessages[index] = newMsg;
        this.setState({
            messages: newMessages,
        });
    }

    handleShowHideForm = () => {
        this.setState({ hidden: !this.state.hidden })
    }

    render() {
        console.log(this.state);
        const { password, showPassword, userName, messages, hidden } = this.state;

        const textboxes = messages.map((msg, index) => <TextBox
                text={msg}
                textLength={50}
                onChange={(newMsg) => this.handleMessageChange(newMsg, index)}
            />);

        const formTartalom = <div>
            <span dangerouslySetInnerHTML={{
                __html: userName,
            }} /><br/>
            { userName }<br/>
            Username:
            <TextBox
                inputId="username"
                text={userName}
                textLength={4}
                onChange={this.handleUserNameChange}
            />
            Password:
            <TextBox
                text={password}
                textLength={8}
                min={true}
                type={showPassword ? 'text' : 'password'}
                onChange={this.handlePasswordChange}
            />
            <input type="number" />
            <button onClick={this.handleShowPasswordClick}>{showPassword ? 'Hide' : 'Show'}</button>
            { textboxes }
        </div>;

        return <div className='regForm'>
            <button onClick={this.handleShowHideForm}>Show/hide form</button>
            { !hidden ? formTartalom : null }
        </div>
    }
}