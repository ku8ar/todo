export const saveFile = (name, content, type = 'data:text/plain;charset=utf-8,') => {
  const pom = document.createElement('a')
  pom.setAttribute('href', type + encodeURIComponent(content))
  pom.setAttribute('download', name)
  const event = document.createEvent('MouseEvents')
  event.initEvent('click', true, true)
  pom.dispatchEvent(event)
}
