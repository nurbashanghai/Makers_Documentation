import React, { useReducer } from 'react';
import axios from 'axios';

const API_TOPICS = "http://localhost:8000/topics";
const API_REGISTRATION = "http://localhost:8000/accounts";

export const addTopicContext = React.createContext();

const INIT_STATE = {
    topics: []
}

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "GET_NEW_TOPIC": return {
            ...state, 
            topics: action.payload,
        }
       
        default: return state
    }
}

const AddTopicContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer (reducer, INIT_STATE)
    
    //Отправляем новый топик в базу
    const addNewTopic = async (newTopic) => {
        await axios.post(API_TOPICS, newTopic)

        getNewTopic();
    }

    //Получаем данные из базы
    const getNewTopic = async () => {
        const { data } = await axios.get(API_TOPICS)
        dispatch({
            type: "GET_NEW_TOPIC",
            payload: data
        })
    }



    return (
        <addTopicContext.Provider value={{
            API_REGISTRATION,
            API_TOPICS,
            topics: state.topics,
            addNewTopic,
            getNewTopic
        }} >
            {children}
        </addTopicContext.Provider>
    )
}

export default AddTopicContextProvider;
