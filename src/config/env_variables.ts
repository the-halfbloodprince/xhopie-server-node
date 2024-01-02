// ? Declare all your env variable types here

/* 
? I generally prefer using types and then later do something like
? type ProcessEnv = {} & ENV_Variables
! but that didn't work, so choosing some other method for now 
*/
// export type ENV_Variables = {
//   PORT: string;
//   EXAMPLE_VARIABLE: string;
// }

// ? reverting to use interface so that the ProcessEnv interface can automatically inherit it
export default interface ENV_Variables {
  PORT: string;
  EXAMPLE_VARIABLE: string;
}