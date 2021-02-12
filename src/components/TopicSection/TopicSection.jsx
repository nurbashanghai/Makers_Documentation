import React, { useState, useContext } from 'react';
import './TopicSection.css';
import plus from "../../assets/img/Plus.png";
import { addTopicContext } from '../../contexts/AddTopicContext';

const TopicSection = () => {
    const {addNewTopic} = useContext(addTopicContext);
    const [openAddModal, setOpenAddModal] = useState(false);
    const [getInputData, setgetInputData] = useState('');

    function addContactClick () {
        const contactObj = {
            title: getInputData
        }
        addNewTopic(contactObj)
    }      
    

    return (
        <div className="topic-section">
            <div className="container">
                <div className="topic-section__title">
                    <img src={plus} alt=""/>
                    <button onClick={() => setOpenAddModal(!openAddModal)}>Добавить тему</button>
                    {openAddModal ? <div className="add-new-topic">
                        <input onChange={(e) => setgetInputData(e.target.value)} type="text" placeholder="Добавьте новую тему"/>
                        <button onClick={() => {
                            setOpenAddModal(false)
                            addContactClick()}}>Сохранить</button>
                    </div> : null}
                </div> 
              
            </div> 
        </div>
    );
};

export default TopicSection;