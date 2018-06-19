import React from 'react';

import '../css/Keypad.css';

const Keypad = (props) => {
    return <input type="submit" className={"key " + (props.extraClasses || '')} onClick={props.action} value={props.symbol} />
}

export default Keypad;