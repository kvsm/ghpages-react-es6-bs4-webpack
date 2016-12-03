#### Quick Setup (if you haven't already):

1.  Fork this repository.
2.  Go to GitHub's settings tab on your fork and rename your repo to whatever you want to name your project.
3.  On the same settings page, scroll down to the **GitHub Pages** section, and change the **source** to `Master branch /docs folder`
4.  Clone your fork to your local machine.
5.  Run `npm install`. This will install required dependencies.
6.  Run `npm run build`. This will compile your assests and generate a bundle in the `docs/assets` directory.
7.  Commit the new bundle to git and push to GitHub.
8.  That's it! Your project is now live at:
    `http://your-github-username.github.io/your-project-name`

Now you can go to `src/App.jsx`, remove the sample content and get started building your own project. Just make your changes, `npm run build`, commit and push - simple!

#### Features:

*   **React**
*   **webpack-dev-server (with hot reload)**: Run `npm start`. A browser window will open and will hot reload as you edit your code, without refreshing the page.
*   **Bootstrap 4**: with webpack set up to compile your scss. I included `src/styles/_defaults.scss` for convenience; it doesn't get used, it's just a handy reference for bootstrap's defaults which you can override in `bootstrap-custom.scss`.
*   **Babel**: Set up for ES6; even the webpack config is ES6\. You can easily add ES7/8 support by adding the required npm modules to dev-dependencies and `.babelrc`.
