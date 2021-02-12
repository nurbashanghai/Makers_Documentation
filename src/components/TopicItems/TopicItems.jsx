import React, { useState, useContext, useEffect } from 'react';
import { addTopicContext } from '../../contexts/AddTopicContext';
import './TopicItems.css';

const TopicItems = () => {
    const {getNewTopic, topics} = useContext(addTopicContext);

    useEffect(() => {
        getNewTopic()
    }, [])

    return (
        <div className="container">
            <div className="topic-inner">
                {topics.map(item => (
                <div key={item.id} className="topic-items" >
                    <div className="topic-items__title">{item.title}</div>
                </div> 
                ))}
            </div>
            <div className="edit-button">Редактировать</div>
        </div>
    );
};

export default TopicItems;