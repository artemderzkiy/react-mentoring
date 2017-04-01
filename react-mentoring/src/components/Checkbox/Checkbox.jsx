import React from 'react';
import sn from 'classnames';

function Checkbox({
    classNames,
    disabled = false,
    label,
    onChange
}) {
    const checkBoxClass = sn('', classNames);
    return(
        <div onChange={e => onChange(e)}>
            <input type='checkbox' disabled={disabled}/>
            <label>{label}</label>
        </div>
    )
}

Checkbox.propTypes = {
    classNames: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    onClick: React.PropTypes.func
};

export default Checkbox;