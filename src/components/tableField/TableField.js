import React from 'react'

const TableField = (props) => {
  return (
    <table>
        <tr>
            {props.header.map( (item, index) => (
                <th key={index}>{item.text}</th>
            ))}
        </tr>

        <tr>
            {props.textrow.map( (item, index) => (
                <td key={index}>{item.text}</td>
            ))}
        </tr>
        
    </table>
  )
};

export default TableField

