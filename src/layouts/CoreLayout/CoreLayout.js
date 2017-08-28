import React from 'react'
import Header from 'containers/Header'
import MagicFog from 'containers/MagicFog'
import SettingsDialog from 'containers/SettingsDialog'
import Layout from 'containers/Layout'
import './CoreLayout.scss'
import '../../styles/core.scss'

export const CoreLayout = ({ children }) => (
  <div className='root'>
    <Header />
    <SettingsDialog />
    <Layout>
      <MagicFog />
      {children}
    </Layout>
  </div>
)

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default CoreLayout
