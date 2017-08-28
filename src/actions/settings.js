import { EDIT_SETTINGS, RELOAD_STORE } from '../actionTypes'

const editSettings = (key, value) => ({
  type: EDIT_SETTINGS,
  payload: { key, value }
})

const reloadStore = (store) => ({
  type: RELOAD_STORE,
  payload: store
})

const uploadBackground = (files) =>
  (dispatch, getState) => {
    if (!files || !files[0]) return
    var reader = new FileReader()
    reader.onload = (e) =>
      dispatch(editSettings('background', reader.result))
    reader.readAsDataURL(files[0])
  }

const saveFile = (name, content, type = 'data:text/plain;charset=utf-8,') => {
  const pom = document.createElement('a')
  pom.setAttribute('href', type + encodeURIComponent(content))
  pom.setAttribute('download', name)
  const event = document.createEvent('MouseEvents')
  event.initEvent('click', true, true)
  pom.dispatchEvent(event)
}

const exportStore = () =>
  (dispatch, getState) =>
    saveFile(`todo_backup_${+new Date()}`, JSON.stringify(getState()))

const importStore = (files) =>
  (dispatch, getState) => {
    if (!files || !files[0]) return
    var reader = new FileReader()
    reader.onload = (e) =>
      dispatch(reloadStore(JSON.parse(reader.result)))
    reader.readAsText(files[0])
  }

export default {
  editSettings,
  uploadBackground,
  exportStore,
  importStore
}
