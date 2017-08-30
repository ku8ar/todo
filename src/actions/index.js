import lists from './lists'
import notes from './notes'
import settings from './settings'
import user from './user'
import location from './location'

export default {
  ...lists,
  ...notes,
  ...settings,
  ...user,
  ...location
}
