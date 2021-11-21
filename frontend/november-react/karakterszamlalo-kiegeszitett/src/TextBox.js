import React from 'react';
import './TextBox.scss';

export default class TextBox extends React.Component {
    /*
    constructor(props) {
        super(props);
    }
    */

    handleInputChange = (e) => {
        const { onChange } = this.props;

        if (onChange) {
            onChange(e.target.value);
        }
    };

    render() {
        console.log('render');
        const { inputId, min, textLength, text, type = 'text' } = this.props;

        let lengthClassName = '';
        if (!min && text.length > textLength) {
            lengthClassName = 'TextBox-error';
        }
        else if (min && text.length < textLength) {
            lengthClassName = 'TextBox-error';
        }

        return <div>
            <input className="Textbox-input" id={inputId} type={type} value={text} onInput={this.handleInputChange} />
            <span className={lengthClassName}>{text.length}</span> / {textLength}
        </div>;
    }
}

