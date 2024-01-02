# Work Log / Diary

This will be a work log / diary of what I have been doing in this project, just like a commit history, but simpler, more broad, explanatory.

This file only outlines the progress in this repository. All it's submodules will have their own work-log files.

> Starting this repo with the start of 2024. Let's see what 2024 has in store.

### 1st Jan 2024

#### Initialization

- just did a bare initialization of the app
- added typescript, express and nodemon
- nothing much for today in this app

### 2nd Jan 2024 - 3rd Jan 2024

#### Environment Variables

- added env file support (used dotenv, considered also using the native `--env-file` flag of NodeJS, but fell back on dotenv to make it work asap with nodemon and ts-node)
  - currently just added `PORT`, `HOST` and `EXAMPLE_VARIABLE` to the list
  - `EXAMPLE_VARIABLE` is just a variable used to be available to confirm the proper loading of env variables. This can be done in other more robust ways probably, or just by checking any other variable, so it is safe to be removed in a future commit.
  - added all of them in an `.env.example` file as well.
- added env file type declaration support
  - added a `ENV_Variables` interface in the config folder for declarations of the variables
  - added a overwrite of `ProcessEnv` interface which declares the interface of `process.env`
  - used inheritance to automatically extend from the `ENV_Variables` interface.
- defined a separate `APP_CONFIG` variable in `config` folder to hold important app wide accessible variables in one place
  - added the env variables present at the moment to `APP_CONFIG`
  - also throwing an error if there was any error in loading env variables.
    - TODO: This should be properly handled later instead of blatantly just throwing an error
    - also this makes the purpose of `EXAMPLE_HANDLING` obsolete, so it's been removed

#### REFACTORING THE PROJECT'S FOLDER STRUCTURE

- added the `src` folder.
  - made corresponding updates in the `package.json` as well as `tsconfig.json`