# TypeScript Google Cloud Function starter kit

A bare-bones starter kit for a typescript Google Cloud Function. My [new-project-script](https://github.com/Rolias/new-project-script) repository is a convenient way to clone a repo, get rid of all the old history and have a shiny new repo to work in.

There are some placeholders in this file. For instance in app.ts the function name needs to be changed to match the name of your GCF.
In package.json, the setProjectStaging and setProjectProduction scripts need to replace the strings that start with `xxx-` with the actual name of your staging and production environments. If you don't have both, just delete the unneeded scripts.

Once you've made the changes
`npm run deploy`
should do it. Fire up Postman and send a request to your URL
