import React, { PropTypes, Component } from 'react'

export default class UploadButton extends Component {
  static propTypes = {
    label: PropTypes.string,
    accept: PropTypes.string,
    onUpload: PropTypes.func
  }
  getRef = (ref) => {
    this.fileRef = ref
  }
  onUpload = () =>
    this.props.onUpload(this.fileRef.files)
  render () {
    const { label, accept } = this.props
    return (
      <label className='pt-file-upload pt-fill'>
        <input type='file' ref={this.getRef} onChange={this.onUpload} accept={accept} />
        <span className='pt-file-upload-input'>{label}</span>
      </label>
    )
  }
}
