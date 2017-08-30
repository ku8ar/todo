import CoreLayout from '../layouts/CoreLayout'
import Grid from './Grid'
import Login from './Login'

export const createRoutes = (store) => ({
  path        : '/',
  component   : CoreLayout,
  indexRoute  : Grid,
  childRoutes : [ Login ]
})

export default createRoutes
