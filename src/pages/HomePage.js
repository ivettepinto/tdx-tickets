import React, { useContext } from 'react'
import HelpList from '../components/previewHelpForm/helpList/HelpList'
import { HelpContext } from '../context/HelpFormsContext';

import "./HomePage.css";

const HomePage = () => {
  const {jsonData} = useContext(HelpContext);

  return (
    <div className="container">
      <HelpList listItems={jsonData} />
    </div>
  )
}

export default HomePage