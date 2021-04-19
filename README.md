# Nuvalence Code Assignment by Ian McGonigle

To meet the requirements of this assignment I created a single page application with two routes. The routes are contained in `src/routes`. Routing is handled with `React Router`.

The first route `/` shows a grid of `UserLinks`. `UserLinks` are clickable tiles with the user's name title and thumbnail. Clicking will take you to the `user/:id` page. On page load there is initial fetch of 36 results from the API. Each fetch is stored in `userState` so that page information persists throughout the application. Persisting information between pages required using state as the API always returned random information regardless of page.

Second route, `user/:id`, takes the user ID from the url parameter and uses that to fetch that user data object from the state. Once the data has been fetched from the state I use your card is rendered with the users large image and the following properties:
- first name
- last name
- phone number
- mobile number
- age
- email
- gender
- location
- nationality

You can navigate back to the listing page by clicking on the `Back` link or the page title.
If there is no user data for the desired ID the site is redirected to the homepage fetch new data.

In the `src/components` folder you will find the `UserCard`, `UserList`, `Pagination`, and `Container` components.

`Container` is just a wrapper to ensure that everything is contained in the same width on the screen.

`Pagination ` Controls what page of information is loaded from the API. There's a current page indicator back button and forward button. Pressing the back and forward buttons changes the value of `pageState`. If no data is loaded for the current page new data is fetched and stored in `userState`.

State management was done using `Recoil.js`. It is a small light weight library. While Redux _is_ my preferred state management library, I have been looking for an excuse to try `Recoil.js` out. The `atoms` and `selectors` of state can be found in `src/state/index.js`.

There are unit tests for `UserLink`, `UserCard` and state selectors. The tests are done `React Testing Library` and `Jest`.

If I had more time I would:
- Add PropTypes for all components
- Added more tests for edge cases
- Added a range of numbered links for the pagination (i.e. << 1,2,3,4,5...>>)
- Write CSS/SCSS, I like Tailwinds a lot. But I would have liked to style this with SCSS, or SCSS modules.
- Made sure that the images displayed Large/medium/thumb  at different resolutions.
- Add some polish. Some animation between routes, lazy loading content, fade in on enter screen for example.
- Set up `page/:pageNum` routing.
- Ensure I wasn't just spreading whole objects on as props...
- Deleted any left-over create-react-app stuff
- Would have spent time on a11y...

The site works across devices sizes. It was styled with `Tailwinds CSS` which is a "utility first" css framework. In is installed via a link tag loading the file from a cdn. There is no npm dependency for style. There is no CSS in this project at all.

To run the project, either checkout the code from Github. After you have the files locally `cd` into the project's directory. Next run `npm install` to install the dependencies. After the dependencies have installed, run `npm start` to run the project on your localhost at port 3000.

You can run the tests by calling `npm run test` in the project's root directory.

More detailed instruction about running a project created with `create-react-app` can be found in the "Getting Started" section which is leftover from the initial install of `create-react-app`

Summary of the tools I used:
- [React](https://reactjs.org/) as the framework for the SPA
- [React Router](https://reactrouter.com/) for routing.
- [Recoil](https://recoiljs.org/) for state management.
- [Tailwinds CSS](https://tailwindcss.com/) for styling.

## Getting Started: Using Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
