import React, {useContext, useState} from 'react';
import axios from "axios";
import {topicToBoard} from "../../contexts/TopicToBoardContext";

const EditTopic = (props) => {
    let [obj, setObj] = useState(props.content[props.topicIndex]);
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
            data.sub_topic[props.topicIndex] = obj;
            axios.patch(`${TOPIC_API}/${props.id}`, data).then(() => props.setContent(data.sub_topic))

        }
    }

    if(!obj){
        return (
            <div  >
                <p className={'h4'}>Name:</p>
                <textarea className={'m-2'} style={{border: '1px solid black', width: '70%'}} onChange={handleInput} name={'name'}/>
                <p className={'h4'}>Introduction:</p>
                <textarea rows="8" className={'m-2'} style={{border: '1px solid black', width: '70%'}} onChange={handleInput} name={'descr'}/>
                <p className={'h4'}>Img 1:</p>
                <input placeholder={'img'} className={'m-2'} style={{border: '1px solid black', width: '70%'}} onChange={handleInput} name={'img1'}/>
                <p className={'h4'}>Description:</p>
                <textarea rows="8" className={'m-2'} style={{border: '1px solid black', width: '70%'}} onChange={handleInput} name={'descr2'}/>
                <p className={'h4'}>Name of second section:</p>
                <textarea className={'m-2'} style={{border: '1px solid black', width: '70%'}} onChange={handleInput} name={'name2'}/>
                <p className={'h4'}>Description:</p>
                <textarea rows="8" className={'m-2'} style={{border: '1px solid black', width: '70%'}} onChange={handleInput} name={'descr3'}/>
                <p className={'h4'}>Img:</p>
                <input placeholder={'img'} className={'m-2'} style={{border: '1px solid black', width: '70%'}} onChange={handleInput} name={'img2'}/>
                <p className={'h4'}>Description:</p>
                <textarea rows="8"  className={'m-2'} style={{border: '1px solid black', width: '70%'}} onChange={handleInput} name={'descr4'}/>
                <div><button className={'btn-primary btn my-3'} onClick={saveChanges} >Save</button></div>
            </div>
        )
    } else {
        return (
            <div >
                <p className={'h4'}>Name:</p>
                <textarea value={obj.name} className={'m-2'} style={{border: '1px solid black', width: '70%'}} onChange={handleInput} name={'name'}/>
                <p className={'h4'}>Introduction:</p>
                <textarea rows="8" value={obj.descr}  className={'m-2'} style={{border: '1px solid black', width: '70%'}} onChange={handleInput} name={'descr'}/>
                <p className={'h4'}>Img 1:</p>
                <input value={obj.img1}  className={'m-2'} style={{border: '1px solid black', width: '70%'}} onChange={handleInput} name={'img1'}/>
                <p className={'h4'}>Description:</p>
                <textarea rows="8" value={obj.descr2}  className={'m-2'} style={{border: '1px solid black', width: '70%'}} onChange={handleInput} name={'descr2'}/>
                <p className={'h4'}>Name of second section:</p>
                <textarea value={obj.name2}  className={'m-2'} style={{border: '1px solid black', width: '70%'}} onChange={handleInput} name={'name2'}/>
                <p className={'h4'}>Description:</p>
                <textarea rows="8" value={obj.descr3}  className={'m-2'} style={{border: '1px solid black', width: '70%'}} onChange={handleInput} name={'descr3'}/>
                <p className={'h4'}>Img:</p>
                <input value={obj.img2}  className={'m-2'} style={{border: '1px solid black', width: '70%'}} onChange={handleInput} name={'img2'}/>
                <p className={'h4'}>Description:</p>
                <textarea rows="8" value={obj.descr4}  className={'m-2'} style={{border: '1px solid black', width: '70%'}} onChange={handleInput} name={'descr4'}/>
                <div><button className={'btn-primary btn my-3'} onClick={saveChanges} >Save</button></div>
            </div>
        );
    }
};

export default EditTopic;
