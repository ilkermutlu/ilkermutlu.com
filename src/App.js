import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>I'm Ilker and I develop software.</h1>
        <p>
          These days, I make things happen with React, Typescript, Node.js and Laravel.
        </p>
        <p>
          Drop me an email at <span className="yel">ilker[at]rint.co.uk</span> to talk about these and others I keep in my toolbelt.
        </p>
      </header>
      <hr/>
      <div className="content">
        <h2>Cool things to do from here:</h2>
        <div className="linkRow">
          If you want to connect on LinkedIn, {' '}
          <a
            className="yel"
            href="https://www.linkedin.com/in/ilkermutlu"
            target="_blank"
            rel="noopener noreferrer"
          >this</a> is the link to click.
        </div>
        <div className="linkRow">
          I've got a passing Twitter account {' '}
          <a
            className="yel"
            href="https://twitter.com/ilkermutlu"
            target="_blank"
            rel="noopener noreferrer"
          >here</a>.
        </div>
        <div className="linkRow">
          You might want to get awesome software built by {' '}
          <a
            className="yel"
            href="http://rint.co.uk"
            target="_blank"
            rel="noopener noreferrer"
          >Rint</a>.
        </div>
      </div>
    </div>
  );
}

export default App;
