import { config as loadEnvVariables } from 'dotenv'
import type ENV_Variables from './env_variables'

const result = loadEnvVariables()

if (result.error) {
  throw('[ERROR] Error parsing the env variables')
}

export const APP_CONFIG = {
  port: process.env.PORT || 8080,
  host: process.env.HOST || 'http://localhost',
}