import React from 'react'
import Header from 'containers/Header'
import SearchFog from 'containers/SearchFog'
import SettingsMenu from 'containers/SettingsMenu'
import Layout from 'containers/Layout'
import './CoreLayout.scss'
import '../../styles/core.scss'

export const CoreLayout = ({ children }) => (
  <div className='root'>
    <Header />
    <SettingsMenu />
    <Layout>
      <SearchFog />
      {children}
    </Layout>
  </div>
)

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default CoreLayout
