import React, { useContext } from 'react'
import HelpList from '../components/previewHelpForm/helpList/HelpList'
import helpListJson from "../helpers/CompleteExample.json"

import "./HomePage.css";

const HomePage = () => {

  return (
    <div className="container">
      <HelpList listItems={helpListJson} />
    </div>
  )
}

export default HomePage