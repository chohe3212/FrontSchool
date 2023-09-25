import React, { useState } from 'react';
import useInput from '../hooks/useInput';

function InputComponent() {
    const [value, setValue] = useInput('');

    return (
        <>
            <input type="text" onChange={setValue}/>
            <div>
                {value}
            </div>
        </>
    )
}

export default InputComponent;