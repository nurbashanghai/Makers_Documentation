import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import MainSection from './components/MainSection/MainSection';
import TopicSection from './components/TopicSection/TopicSection';
import AddTopicContextProvider from './contexts/AddTopicContext';
import Routes from './Routes';
import TopicToBoardContextProvider from "./contexts/TopicToBoardContext";

function App() {
  return (
    <div className="App">
        <TopicToBoardContextProvider>
          <AddTopicContextProvider>
            <Routes/>
          </AddTopicContextProvider>
        </TopicToBoardContextProvider>
    </div>
  );
}

export default App;
