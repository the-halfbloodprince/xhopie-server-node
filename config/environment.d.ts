import type ENV_Variables from "./env_variables";

/* 
! NOTE: DON'T ADD ENVIRONMENT VARIABLES HERE
* To add environment variables, add them to the ENV_Variables type/interface imported above
*/

// environment variables overriding
declare global {
  namespace NodeJS {
    interface ProcessEnv extends ENV_Variables {}
  }
}