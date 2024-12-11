import React from 'react'
import TabFooter from './tabFooter'
import DesktopFooter from './desktopFooter'

const ThirdComp = ({isTab}) => {
  return (
    <div>
        {isTab ? <TabFooter /> : <DesktopFooter />}
    </div>
  )
}

export default ThirdComp