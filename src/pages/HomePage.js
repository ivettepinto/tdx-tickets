import React from 'react'
import HelpList from '../components/previewHelpForm/helpList/HelpList'

import ListItemJson from "../helpers/CompleteExample.json";

import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="container">
      <HelpList listItems={ListItemJson} />
    </div>
  )
}

export default HomePage