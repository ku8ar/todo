import React, { PropTypes, Component } from 'react'
import ComplexInputGroup from 'containers/ComplexInputGroup'
import './List.scss'

export default class List extends Component {
  static propTypes = {
    children: PropTypes.array,
    text: PropTypes.string,
    listKey: PropTypes.any,
    removeList: PropTypes.func,
    editList: PropTypes.func,
    addNote: PropTypes.func
  }
  handleRemove = () =>
    this.props.removeList(this.props.listKey)
  handleTitleChange = (e) =>
    this.props.editList(this.props.listKey, 'text', e.target.value)
  handleAddNote = () =>
    this.props.addNote(this.props.listKey)
  handleDoubleClick = (e) =>
    e.stopPropagation() // grid has doubleclick
  render () {
    const { children, text } = this.props
    return (
      <div className='pt-card pt-elevation-0' style={{ backgroundColor: '#FFC940' }}
        onDoubleClick={this.handleDoubleClick}>
        <ComplexInputGroup text={text}>
          <input className='pt-input' value={text} autoFocus={!text} onChange={this.handleTitleChange} />
          <button className='pt-button pt-minimal pt-intent-warning pt-icon-delete'
            onClick={this.handleRemove} />
        </ComplexInputGroup>
        <div className='pt-menu-header' />
        {children.map((child, key) =>
          <span key={key} style={{ marginBottom: '0.5rem' }}>{child}</span>
        )}
        <div style={{ marginBottom: '0.5rem' }}>
          <div className='pt-input-group pt-large' style={{ width: '100%', zIndex: 1 }}>
            <button className='pt-button pt-minimal pt-icon-add pt-fill' onClick={this.handleAddNote} />
          </div>
        </div>
      </div>
    )
  }
}
