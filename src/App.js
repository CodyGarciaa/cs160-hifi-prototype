import logo from './logo.svg';
import './App.css';
import ToggleButton from './ToggleButton';
import SearchBar from './SearchBar';

function App() {

  const handleSearch = (query) => {
    console.log(`Search query: ${query}`);
    // You can replace this with your actual search logic
  };

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.  
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <header>
        <div class="title">
            <h1>Phobia Free Films</h1>
        </div>
        <div class="profile-button">
            (profile button)
        </div>
      </header>
      <main>
          <ToggleButton>spiders</ToggleButton>
          <ToggleButton>snakes</ToggleButton>
          <ToggleButton>blood</ToggleButton>

          <SearchBar onSearch={handleSearch} />

          <h2>New Releases</h2>
          <h2>Browse</h2>
      </main>
    </div>
  );
}

export default App;
