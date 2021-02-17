import React, {useContext, useState} from 'react';
import {topicToBoard} from "../../contexts/TopicToBoardContext";
import axios from "axios";

const AddTopicItem = (props) => {
    let [obj, setObj] = useState({});
    let {TOPIC_API} = useContext(topicToBoard);

    function handleInput(e){
        let objToSend = {
            ...obj,
            [e.target.name]: e.target.value
        };
        setObj(objToSend);
    }

    async function saveChanges(){
        let {data} = await axios.get(`${TOPIC_API}/${props.id}`);
        if(!data.sub_topic){
            let newObj = {
                ...data,
                "sub_topic": [obj]
            };
            axios.patch(`${TOPIC_API}/${props.id}`, newObj).then(() => window.location.reload())
        } else {
            data.sub_topic.push(obj);
            axios.patch(`${TOPIC_API}/${props.id}`, data).then(() => window.location.reload());

        }
    }

    return (
        <div className={'container'} >
            <p className={'h2'}>Name:</p>
            <textarea className={'m-5'} style={{border: '1px solid black', width: '70%'}} onChange={handleInput} name={'name'}/>
            <p className={'h2'}>Introduction:</p>
            <textarea rows="8" className={'m-5'} style={{border: '1px solid black', width: '70%'}} onChange={handleInput} name={'descr'}/>
            <p className={'h2'}>Img 1:</p>
            <input placeholder={'img'} className={'m-5'} style={{border: '1px solid black', width: '70%'}} onChange={handleInput} name={'img1'}/>
            <p className={'h2'}>Description:</p>
            <textarea rows="8" className={'m-5'} style={{border: '1px solid black', width: '70%'}} onChange={handleInput} name={'descr2'}/>
            <p className={'h2'}>Name of second section:</p>
            <textarea className={'m-5'} style={{border: '1px solid black', width: '70%'}} onChange={handleInput} name={'name2'}/>
            <p className={'h2'}>Description:</p>
            <textarea rows="8" className={'m-5'} style={{border: '1px solid black', width: '70%'}} onChange={handleInput} name={'descr3'}/>
            <p className={'h2'}>Img:</p>
            <input placeholder={'img'} className={'m-5'} style={{border: '1px solid black', width: '70%'}} onChange={handleInput} name={'img2'}/>
            <p className={'h2'}>Description:</p>
            <textarea rows="8"  className={'m-5'} style={{border: '1px solid black', width: '70%'}} onChange={handleInput} name={'descr4'}/>
            <div><button onClick={saveChanges} >Save</button></div>
        </div>
    );
};

export default AddTopicItem;
