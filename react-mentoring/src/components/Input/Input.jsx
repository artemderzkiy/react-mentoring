import React from 'react';
import sn from 'classnames';

function TextInput({    
    disabled,    
    placeholder,
    required,
    classNames,
    value,
    onChange
}) {

    let textInputClass = sn('', classNames);

    return (
        <input type="text"
           className={ textInputClass }
           name={ name }
           placeholder={ placeholder }
           disabled={ disabled }
           required={ required }
           value={ value }
           onChange={ (e) => onChange(e) }/>
    );
}

TextInput.propTypes = {    
    disabled: React.PropTypes.bool,    
    placeholder: React.PropTypes.string,
    required: React.PropTypes.bool,
    classNames: React.PropTypes.array,
    value: React.PropTypes.string,
    onChange: React.PropTypes.func
};

export default TextInput;