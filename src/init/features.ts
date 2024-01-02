import { Application } from 'express'
import storeInitializer from '../store'

// initialize all features
const initializeFeatures = (app: Application) => {
  storeInitializer(app)
}

export default initializeFeatures