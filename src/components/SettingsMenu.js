import React, { PropTypes, Component } from 'react'
import { Switch, Slider } from '@blueprintjs/core'
import cn from 'classnames'
import UploadButton from 'components/UploadButton'
import './SettingsMenu.scss'

export default class extends Component {
  static propTypes = {
    isDialog: PropTypes.bool,
    isGrid: PropTypes.bool,
    gridCols: PropTypes.number,
    gridRowHeight: PropTypes.number,
    editSettings: PropTypes.func,
    uploadBackground: PropTypes.func,
    exportStore: PropTypes.func,
    importStore: PropTypes.func
  }
  handleDialogClose = () =>
    this.props.editSettings('isDialog', false)
  handleIsGridChange = () =>
    this.props.editSettings('isGrid', !this.props.isGrid)
  handleGridColsChange = (value) =>
    this.props.editSettings('gridCols', value)
  handleGridRowHeightChange = (value) =>
    this.props.editSettings('gridRowHeight', value)
  render () {
    const { isDialog, isGrid, gridCols, gridRowHeight, uploadBackground, exportStore, importStore } = this.props
    return (
      <div className={cn('menu', { 'menu-open': isDialog })}>
        <div>
          <nav className='pt-navbar pt-dark'>
            <div className='pt-navbar-group pt-align-right'>
              <button className='pt-button pt-minimal pt-icon-collapse-all' onClick={this.handleDialogClose} />
            </div>
          </nav>
        </div>
        <table className='pt-table pt-condensed'>
          <tbody>
            <tr>
              <td>
                <label className='pt-label'>
                  Change Background
                  <UploadButton label='Choose...' onUpload={uploadBackground} accept='image/*' />
                </label>
              </td>
            </tr>
            <tr>
              <td>
                <label className='pt-label'>
                  Show Grid Dots
                  <Switch checked={isGrid} onChange={this.handleIsGridChange} />
                </label>
              </td>
            </tr>
            <tr>
              <td>
                <label className='pt-label'>
                  Import From File
                  <UploadButton label='Choose...' onUpload={importStore} />
                </label>
              </td>
            </tr>
            <tr>
              <td>
                <button className='pt-button pt-icon-document'
                  onClick={exportStore}>
                  Export To File
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <label className='pt-label'>
                  Number Of Columns
                  <Slider min={10} max={100} stepSize={1} labelStepSize={10}
                    onChange={this.handleGridColsChange} value={gridCols}
                  />
                </label>
              </td>
            </tr>
            <tr>
              <td>
                <label className='pt-label'>
                  Row Height (px)
                  <Slider min={10} max={100} stepSize={1} labelStepSize={10}
                    onChange={this.handleGridRowHeightChange} value={gridRowHeight}
                  />
                </label>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
