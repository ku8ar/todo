import React, { PropTypes, Component } from 'react'
import ComplexInputGroup from 'containers/ComplexInputGroup'
import './List.scss'

export default class List extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(React.PropTypes.node),
      PropTypes.node
    ]),
    text: PropTypes.string,
    listKey: PropTypes.string,
    removeList: PropTypes.func,
    editList: PropTypes.func,
    addNote: PropTypes.func
  }
  /**
   * contextGroup and ref is used to handle imperative focus() on HTML element
   */
  static childContextTypes = {
    handlePressEnter: PropTypes.func
  }
  getChildContext () {
    return {
      handlePressEnter: this.handlePressEnter
    }
  }
  setAddButtonRef = (ref) => {
    this.addButtonRef = ref
  }
  handlePressEnter = () =>
    this.addButtonRef.focus()
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
          <span key={key} className='margin-bottom'>{child}</span>
        )}
        <div className='margin-bottom'>
          <div className='pt-input-group pt-large fill-button'>
            <button className='pt-button pt-minimal pt-icon-add pt-fill add-button'
              onClick={this.handleAddNote} ref={this.setAddButtonRef} />
          </div>
        </div>
      </div>
    )
  }
}
