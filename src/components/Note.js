import React, { PropTypes, Component } from 'react'
import { Switch } from '@blueprintjs/core'
import ComplexInputGroup from 'containers/ComplexInputGroup'
import cn from 'classnames'
import './Note.scss'

export default class Note extends Component {
  static propTypes = {
    listKey: PropTypes.any,
    text: PropTypes.string,
    isDone: PropTypes.bool,
    onChange: PropTypes.func,
    noteKey: PropTypes.any,
    editNote: PropTypes.func,
    removeNote: PropTypes.func
  }
  state = {
    focus: false
  }
  handleTitleChange = (e) =>
    this.props.editNote(this.props.noteKey, 'text', e.target.value)
  handleisDoneChange = () =>
    this.props.editNote(this.props.noteKey, 'isDone', !this.props.isDone)
  handleRemove = () =>
    this.props.removeNote(this.props.noteKey)
  render () {
    const { text, isDone } = this.props
    return (
      <ComplexInputGroup text={text}>
        <button className='pt-button pt-minimal pt-intent-warning pt-icon-delete button-left'
          onClick={this.handleRemove} />
        <input className={cn('pt-input', { 'done': isDone })} value={text}
          onChange={this.handleTitleChange} autoFocus={!text} />
        <Switch className='pt-icon pt-minimal pt-control pt-large center' checked={isDone}
          onChange={this.handleisDoneChange} />
      </ComplexInputGroup>
    )
  }
}
