import React, { useReducer } from 'react';
import axios from 'axios';

export const addTopicContext = React.createContext();

const INIT_STATE = {
    topics: []
}

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
       
        default: return state
    }
}

const AddTopicContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer (reducer, INIT_STATE)
    
    // const addContact = async (newContact) => {
    //     await axios.post('http://localhost:8000/contactData', newContact)
        
    //     getContactData()
    // }

    return (
        <addTopicContext.Provider>
            {children}
        </addTopicContext.Provider>
    )
}

export default AddTopicContextProvider;