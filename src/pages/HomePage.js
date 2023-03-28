import React from 'react'
import HelpList from '../components/previewHelpForm/helpList/HelpList'

import ListItemJson from "../helpers/CompleteExample.json";

const HomePage = () => {
  return (
    <HelpList listItems={ListItemJson} />
  )
}

export default HomePage