# Apollo App With Netlify

Inspired from [Deploy a fullstack Apollo app with Netlify](https://blog.apollographql.com/deploy-a-fullstack-apollo-app-with-netlify-45a7dfd51b0b).

### Some issues I experienced:
* `npm i` complained about babel-loader v8.0.4 and said there was a v8.0.5...so I upgrade.
* I'm in Windows world and `npm run start:lambda` complained about it could not find `netlify-lambda`, fixed it with `npm i -g netlify-lambda`
* Also had to do it for `react-scripts`, `npm i -g react-scripts`