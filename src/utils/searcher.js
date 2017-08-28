// @TODO: memoize
const search = (search = '', text = '') =>
  text.toLowerCase().includes(search.toLowerCase())

export default search
