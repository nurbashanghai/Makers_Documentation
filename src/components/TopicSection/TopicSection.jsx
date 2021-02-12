import React, { useState } from 'react';
import './TopicSection.css';
import plus from "../../assets/img/Plus.png";

const TopicSection = () => {
    const [openAddModal, setOpenAddModal] = useState(false);

    return (
        <div className="topic-section">
            <div className="container">
                <div className="topic-section__title">
                    <img src={plus} alt=""/>
                    <button onClick={() => setOpenAddModal(!openAddModal)}>Добавить тему</button>
                    {openAddModal ? <div className="add-new-topic">
                        <input type="text" placeholder="Добавьте новую тему"/>
                        <button onClick={() => setOpenAddModal(false)}>Сохранить</button>
                    </div> : null}
                </div> 
              
            </div> 
        </div>
    );
};

export default TopicSection;