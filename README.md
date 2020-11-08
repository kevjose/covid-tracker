## C-19 Tracker

- A demo can be found at [C-19 Tracker](http://q-covid-tracker.s3-website.ap-south-1.amazonaws.com/)

![C-19 Tracker Build](https://github.com/kevjose/covid-tracker/workflows/Production%20Build/badge.svg)

### Built with

- [ReactJS](https://reactjs.org/) → for all things frontend
- [Typescript](https://www.typescriptlang.org/) → for developer experience
- [Tailwindcss](https://tailwindcss.com/) → for all things css
- [Context API](https://reactjs.org/docs/context.html) → for managing state in react application natively
- [Github Actions](https://github.com/features/actions) → for CI/CD
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) → for unit tests

### Hosted on

- AWS S3

### Running locally

- Clone and change directory (`cd covid-tracker`) to the repository
- Run the commands `npm ci` to clean install and download exatct versions of all the dependencies
- To start the setup issue the command `npm run start`, this starts a react client at `localhost:3000`

### Folder structure

- The project files are stored in the `./src` directory
- The layout components like page layout, header, footer, and side navigations are stored at the `./src/containers` folder
- The components used as the table, stats card, etc. are stored at the `./src/components` folder
- State in the application is maintained via context APIs, these are placed in the `./src/contexts` folders
- Project uses hooks extensively and the custom ones are placed in the `./src/hooks` folder
- The project is served on s3 via the `/build` folder that is created with `npm build`

### Running tests

- The tests are located in `__tests__/` folders within each folder inside of `./src`, this ensures that tests are locallized and yet aggregated at one place
- the test runner can be initiated via `npm run test`, this generate `./coverage` file, this can be used to further analyse or prevent deployments if the coverage dips below a given threshold, ref:[Link](https://github.com/marketplace/actions/coverage-check) [Link](https://github.com/marketplace/actions/code-coverage-report)

### Running on prod

- A push to the master branch will upload and deploy your latest changes to S3 via Github
- In case the unit tests do not pass, the deployment fails (the action fails)

### Notes on tailwindcss

- For building the CSS files in development `build:tailwind` command is used via `npm prestart`
- For building the CSS files in production `build:css` command is used via `npm prebuild`, this uses `@fullhuman/postcss-purgecss` package to remove unused CSS in production

### Notes on hosting to S3

- Set GitHub action secrets via GitHub project page > settings > actions
- Secrets to be set are

```
AWS_S3_BUCKET
AWS_ACCESS_KEY_ID
AWS_SECRET_ACCESS_KEY
AWS_REGION
```

### Patterns used

- state-reducer react hooks pattern, ref: [Link](https://kentcdodds.com/blog/the-state-reducer-pattern-with-react-hooks)

  - used for all context apis

- reducers pattern for state within component via use-reducer hook, ref: [Link](https://reactjs.org/docs/hooks-reference.html#usereducer)

  - used for emulating a state machine in case such as that of an api call where the status can be idle, loading, and fetched
