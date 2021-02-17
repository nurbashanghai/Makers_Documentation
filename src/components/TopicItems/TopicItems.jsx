import React, { useState, useContext, useEffect } from 'react';
import { addTopicContext } from '../../contexts/AddTopicContext';
import {topicToBoard} from "../../contexts/TopicToBoardContext";
import {useHistory} from 'react-router-dom';
import axios from "axios";

const TopicItems = () => {
    let history = useHistory();
    const {getNewTopic, topics, API_TOPICS} = useContext(addTopicContext);
    const {redirectToBoard} = useContext(topicToBoard);
    let [deleteMode, setDeleteMode] = useState(false);

    useEffect(() => {
        getNewTopic()
    }, []);

    function deleteTopic(id){
        axios.delete(`${API_TOPICS}/${id}`).then(() => getNewTopic());
    }

    return (
        <div className="container">
            <div className="d-flex flex-wrap justify-content-center">
                {topics.map(item => (
                <div style={{borderRadius: '15px'}} key={item.id} className="bg-dark card col-3 m-3 d-flex " >
                    <p onClick={() => {
                        redirectToBoard(item.id);
                        history.push('/board')
                    }} className="h3 text-center p-5" style={{color: 'yellow'}}>{item.title}</p>
                    {deleteMode ? <button className={'btn-danger btn mx-3'} onClick={() => deleteTopic(item.id)} >&times;</button> : null}
                </div>
                ))}
            </div>
            {!deleteMode ?
                <button className={'btn-primary btn mx-3'} onClick={() => {
                    setDeleteMode(!deleteMode)
                }}>Редактировать</button>
                : <button className={'btn-primary btn mx-3'} onClick={() => {
                    setDeleteMode(!deleteMode)
                }}>Сохранить</button>
            }

        </div>
    );
};

export default TopicItems;
