import React, { PropTypes } from 'react'
import Hello from './components/Hello'

class App extends React.Component {
  render () {
    return (
      <div className="container-fluid" style={{"max-width": "960px"}}>
        <div className="jumbotron">
          <h1 className="text-xs-center">ghpages-react-es6-bs4-webpack</h1>
          <h3 className="text-xs-center"><small className="text-muted">Quickly publish your frontend demos to GitHub Pages, using React, ES6, Bootstrap 4, and Webpack</small></h3>
        </div>
        <div className="content">
          <h4>Quick Setup (if you haven't already):</h4>
          <ol>
            <li><a href="https://github.com/kvsm/ghpages-react-es6-bs4-webpack" target="_blank">Fork this repository</a>.</li>
            <li>You'll probably want to rename your fork to whatever you want to name your project (in the repository's settings page on GitHub).</li>
            <li>Clone your fork to your local machine.</li>
            <li>Run <code>npm install</code>. This will install required dependencies.</li>
            <li>Run <code>npm run build</code>. This will compile your assests and generate a bundle in the <code>docs/assets</code> directory.</li>
            <li>Commit the new bundle to git and push to GitHub.</li>
            <li>That's it! Your project is now live at: <br/><code>http://your-github-username.github.io/your-project-name</code></li>

          </ol>
        </div>
      </div>
    )
  }
}

export default App;
