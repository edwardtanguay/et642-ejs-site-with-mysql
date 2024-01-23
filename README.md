# Node/Express EJS Website Template with TypeScript

## This is a Node/Express server-side EJS website that has two purposes:

  -   (1) serves as a template that you can use to customize, e.g. replace the data source (an external API) with e.g. SQLite, MySQL, Postgres, MongoDB, etc.
  -   (2) serves as code to learn the basics of creating an EJS website with Node/Express/TypeScript

![grafik](https://github.com/edwardtanguay/template-node-express-ejs-website-typescript/assets/446574/fe91f858-984e-4713-a776-85c775dccde0)

## This is a template site to use to start new projects

- If you want to learn how to build this website step-by-step, see:
  - **HOWTO: [Server-side Website: Create server-side Node/Express site with EJS and host at Render](https://tanguay-eu.vercel.app/howtos/814)**

## FEATURES

- Node/Express
- TypeScript
  - executed with tsx
  - compiled with tsc
  - watched with nodemon
- ES6 modules
- external API data fetched with Axios
- start scripts for hosting: 
  - `npm run build` 
  - `npm start`

## TypeScript

-   using `nodemon` and `tsx`, all ts files are watched and reloaded upon being changed
    -   `tsx` executes very fast which is a good user experience, i.e. you can make a change and immediately test it in the API
    -   `package.json` has two scripts set up to host this API at a hosting provider such as Render or Cyclic, or a cloud computer such as at Hetzner or DigitalOcean:
        -   `npm run build` - will build a /dist folder that has the compiled JavaScript files
        -   `npm start` - will start this compiled version of the API
        -   

## hosting

- the package json has two scripts ready for hosting: `build` and `start`
- if you want to host this backend at a hosting service such as **Render** or **Cyclic**, or a cloud machine at e.g. **Hetzner** or **DigitalOcean**, use these scripts:
  - build command: `npm i && npm run build`
  - start command: `npm start`

![grafik](https://github.com/edwardtanguay/template-api-node-express-typescript-es6-modules-lowdb/assets/446574/4c57128a-c648-4c9a-9c3f-509fc1fb72aa)
