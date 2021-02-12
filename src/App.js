import './App.css';
import Header from './components/Header/Header';
import MainSection from './components/MainSection/MainSection';
import TopicSection from './components/TopicSection/TopicSection';
import AddTopicContextProvider from './contexts/AddTopicContext';
import Routes from './Routes';

function App() {
  return (
    <div className="App">
      <AddTopicContextProvider>
        <Routes></Routes>
      </AddTopicContextProvider>
    </div>
  );
}

export default App;
