import React from 'react'

const TableField = (props) => {
  return (
    <table>
        <tr>
            {props.header.map( item => (
                <th>{item.text}</th>
            ))}
        </tr>

        <tr>
            {props.textrow.map( item => (
                <td>{item.text}</td>
            ))}
        </tr>
        
    </table>
  )
};

export default TableField

