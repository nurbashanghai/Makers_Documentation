import React, {useContext, useReducer} from 'react';
import axios from "axios";

let TOPIC_API = "http://localhost:8000/topics";

export const topicToBoard = React.createContext(null);

const STATE_INIT = {
    topic_content:[]
};

const reduce_action = (state = STATE_INIT, action) => {
    switch (action.type) {
        case "GET_TOPIC_CONTENT": return {
            ...state,
            topic_content: action.payload,
        };
        case "LOAD_TOPIC": return {
            ...state, topic_content: action.payload
        };

        default: return state
    }
};

const TopicToBoardContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reduce_action, STATE_INIT);

    const redirectToBoard = async (id) => {
        localStorage.setItem('id', `${id}`);
    };

    const addTopicContent = async (newContent) => {

    };

    return(
        <topicToBoard.Provider value={{
            redirectToBoard,
            topic_content: state.topic_content,
            TOPIC_API
        }} >
            {children}
        </topicToBoard.Provider>
    )
};

export default TopicToBoardContextProvider;
