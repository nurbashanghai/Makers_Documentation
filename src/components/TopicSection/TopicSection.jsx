import React from 'react';
import './TopicSection.css';
import plus from "../../assets/img/Plus.png";

const TopicSection = () => {
    return (
        <div className="topic-section">
            <div className="container">
                <div className="topic-section__title">
                    <img src={plus} alt=""/>
                    <button>Добавить тему</button>
                </div> 
                <div className="topic-inner">
                    <div className="topic-items">
                        <div className="topic-items__title">HTML</div>
                    </div>    
                </div> 
            </div> 
        </div>
    );
};

export default TopicSection;