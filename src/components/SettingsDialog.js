import React, { PropTypes, Component } from 'react'
import { Dialog, Switch } from '@blueprintjs/core'
import cn from 'classnames'
import UploadButton from 'components/UploadButton'

export default class SettingsDialog extends Component {
  static propTypes = {
    isDialog: PropTypes.bool,
    isGrid: PropTypes.bool,
    editSettings: PropTypes.func,
    uploadBackground: PropTypes.func,
    exportStore: PropTypes.func,
    importStore: PropTypes.func
  }
  state = {
    tab: 0
  }
  handleDialogClose = () =>
    this.props.editSettings('isDialog', false)
  handleIsGridChange = () =>
    this.props.editSettings('isGrid', !this.props.isGrid)
  handleOpenLook = () =>
    this.setState({ tab: 0 })
  handleOpenImport = () =>
    this.setState({ tab: 1 })
  render () {
    const { isDialog, isGrid, uploadBackground, exportStore, importStore } = this.props
    const { tab } = this.state
    return (
      <Dialog iconName='inbox' isOpen={isDialog} onClose={this.handleDialogClose}
        title={
          <div className='pt-button-group pt-align-left pt-large'>
            <button className={cn('pt-button pt-minimal pt-icon-document', { 'pt-active': tab === 0 })}
              onClick={this.handleOpenLook}>
              Look & Feel
            </button>
            <button className={cn('pt-button pt-minimal pt-icon-document', { 'pt-active': tab === 1 })}
              onClick={this.handleOpenImport}>
              Data Transfer
            </button>
          </div>
        }>
        <div className='pt-dialog-body'>
          {tab === 0 && (
            <div>
              <label className='pt-label'>
                Background
                <UploadButton label='Choose...' onUpload={uploadBackground} accept='image/*' />
              </label>
              <label className='pt-label'>
                Show Grid
                <Switch checked={isGrid} onChange={this.handleIsGridChange} />
              </label>
            </div>
          )}
          {tab === 1 && (
            <div>
              <label className='pt-label'>
                Import
                <UploadButton label='Choose...' onUpload={importStore} />
              </label>
              <button className='pt-button pt-minimal pt-icon-document'
                onClick={exportStore}>
                Export
              </button>
            </div>
          )}
        </div>
      </Dialog>
    )
  }
}
