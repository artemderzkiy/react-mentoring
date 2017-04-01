import React from 'react';
import sn from 'classnames';

function Button({label, disabled, classNames, onClick}) {
    let btnClass = sn('', classNames);
    return (
        <button
            className={btnClass}
            disabled={disabled}
            onClick={e => onClick(e)}
        >
            {label}
        </button>
    )
}

Button.propTypes = {    
    label: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    classNames: React.PropTypes.string,
    onClick: React.PropTypes.func
};

export default Button;