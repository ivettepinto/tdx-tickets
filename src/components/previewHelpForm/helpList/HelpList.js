import React from 'react'
import HelpListItem from './HelpListItem'

const  HelpList = (props) => {
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Category</th>
                    <th>SubCategory</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {props.listItems.map( (item,index) =>
                    <tr> 
                        <HelpListItem key={index} 
                        {...item} />
                    </tr>
                )}
            </tbody>
            
        </table>
        
    </div>
  )
}

export default HelpList