import React from 'react';

const Select = (props) => {
    return (
        <>
            <select value={props.value} onChange={props.onChange}>
                {props.options.map(item =>
                    (<option value={item.value}>{item.label}</option>)
                    )}
            </select>
        </>
    );
}

export default Select;
