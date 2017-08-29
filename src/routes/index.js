import CoreLayout from '../layouts/CoreLayout'
import Grid from './Grid'

export const createRoutes = (store) => ({
  path        : '/',
  component   : CoreLayout,
  indexRoute  : Grid,
  childRoutes : [
  ]
})

export default createRoutes
