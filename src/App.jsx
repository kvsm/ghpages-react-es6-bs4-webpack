import React, { PropTypes } from 'react'
import Hello from './components/Hello'

class App extends React.Component {
  render () {
    return (
      <div className="container-fluid" style={{"maxWzidth": "960px"}}>
        <div className="jumbotron">
          <h1 className="text-xs-center">ghpages-react-es6-bs4-webpack</h1>
          <h3 className="text-xs-center"><small className="text-muted">Quickly publish your frontend demos to GitHub Pages, using React, ES6, Bootstrap 4, and Webpack</small></h3>
        </div>
        <div className="content">
          <h4>Quick Setup (if you haven't already):</h4>
          <ol>
            <li><a href="https://github.com/kvsm/ghpages-react-es6-bs4-webpack" target="_blank">Fork this repository</a>.</li>
            <li>Go to GitHub's settings tab on your fork and rename your repo to whatever you want to name your project.</li>
            <li>On the same settings page, scroll down to the <strong>GitHub Pages</strong> section, and change the <strong>source</strong> to <code>Master branch /docs folder</code>.</li>
            <li>Clone your fork to your local machine.</li>
            <li>Run <code>npm install</code>. This will install required dependencies.</li>
            <li>Run <code>npm run build</code>. This will compile your assests and generate a bundle in the <code>docs/assets</code> directory.</li>
            <li>Commit the new bundle to git and push to GitHub.</li>
            <li>That's it! Your project is now live at: <br/><code>http://your-github-username.github.io/your-project-name</code>.</li>
          </ol>
          <p>Now you can go to <code>src/App.jsx</code>, remove this content and get started building your own project. Just make your changes, <code>npm run build</code>, commit and push - simple!</p>
          <h4>Features:</h4>
          <ul>
            <li><strong>React</strong></li>
            <li><strong>webpack-dev-server (with hot reload)</strong>: Run <code>npm start</code>. A browser window will open and will hot reload as you edit your code, without refreshing the page.</li>
            <li><strong>Bootstrap 4</strong>: with webpack set up to compile your scss. I included <code>src/styles/_defaults.scss</code> for convenience; it doesn't get used, it's just a handy reference for bootstrap's defaults which you can override in <code>bootstrap-custom.scss</code>.</li>
            <li><strong>Babel</strong>: Set up for ES6; even the webpack config is ES6. You can easily add ES7/8 support by adding the required npm modules to dev-dependencies and <code>.babelrc</code>.</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default App;
