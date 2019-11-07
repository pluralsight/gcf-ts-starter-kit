# TypeScript Google Cloud Function starter kit

A bare-bones starter kit for a typescript Google Cloud Function. My [new-project-script](https://github.com/Rolias/new-project-script) repository is a convenient way to clone a repo, get rid of all the old history and have a shiny new repo to work in.

## Usage

1. Clone this repo into a folder on your local machine
2. run `npm install`
3. edit `package.json`
   a. in `setProjectStaging` replace `xxx-name-of-staging-project` with the id of your GCF project. The id is similar but can be different from the name. By default GCP will attach a number to the name to create the id.
   b. optionally delete production scripts
   c. In deploy script change `nameOfGcfFunction` to `gcfHelloWorld`
4. In `app,ts` change name of function to `gcfHelloWorld`
5. at terminal `npm run deploy:staging` subsequent deploys can use `npm run deploy`
6. In PostMan send a GET request of https://your-project-url.cloudfunctions.net/gcfHelloWorld . You can use the the GCP dashboard to go to the function, hit edit and get the full url from there.
7. You should get back a response of `{“message”:”This your GCF Function responding.”}`

If you switch between a staging and production environment you must run the script to set the default environment once. After that you can use the deploy script.
