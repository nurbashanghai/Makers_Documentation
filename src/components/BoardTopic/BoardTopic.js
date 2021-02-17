import React, {useState, useEffect, useContext} from 'react';
import Header from "../Header/Header";
import {topicToBoard} from "../../contexts/TopicToBoardContext";
import axios from "axios";
import EditTopic from "./EditTopic";
import Footer from "../Footer/Footer";
import SideBar from "./SideBar";
import AddTopicItem from "./AddTopicItem";

const BoardTopic = () => {
    let [content, setContent] = useState([]);
    let [modal, setModal] = useState(false);
    let [contentItem, setItemContent] = useState({});
    let [topicIndex, setIndex] = useState(0);
    let id = localStorage.getItem('id');
    let {TOPIC_API} = useContext(topicToBoard);
    let [addModal, setAddModal] = useState(false);

    useEffect(async () => {
        let {data} = await axios.get(`${TOPIC_API}/${id}`);
        if(data.sub_topic){
            setContent(data.sub_topic);
            setItemContent(data.sub_topic[0]);
        }
    }, []);

    async function deleteTopic(){
        let {data} = await axios.get(`${TOPIC_API}/${id}`);
        if(!data.sub_topic){
            return;
        }
        data.sub_topic.splice(topicIndex, 1);
        axios.patch(`${TOPIC_API}/${id}`, data).then(() => window.location.reload());
    }

    function checkIndex(){
        console.log(content.length - 1);
        console.log(topicIndex);
        if(topicIndex < 0){
            setIndex(content.length - 1)
        } else if (topicIndex > content.length - 1){
            setIndex(0)
        }
    }

    useEffect(() => {
        checkIndex()
    },[topicIndex]);

    return (
        <div>
            <Header/>
            <div className={'container d-flex justify-content-between my-3'} >
                <button className={'btn-primary btn mx-3'} onClick={() => setIndex(topicIndex - 1)} >prev</button>
                <button className={'btn-primary btn mx-3'} onClick={() => setIndex(topicIndex + 1)} >next</button>
                <button className={'btn-danger btn mx-3'} onClick={deleteTopic} >delete this topic</button>
            </div>
            <div className={'container d-flex col-12 flex-wrap'} >
                <div className={'col-8 p-4'} style={{border: '1px solid black', borderRadius: '15px'}} >
                    {content[topicIndex] ? <div>
                        <p className={'p-3 h1'}>{content[topicIndex].name ? content[topicIndex].name : null}</p>
                        <p>{content[topicIndex].descr ? content[topicIndex].descr : null }</p>
                        <img style={{borderRadius: '15px'}} className={'p-3 img-fluid'} src={content[topicIndex].img1 ? content[topicIndex].img1 : null} />
                        <p>{content[topicIndex].descr2 ? content[topicIndex].descr2 : null}</p>
                        <p className={'p-3 h2'}>{content[topicIndex].name2 ? content[topicIndex].name2 : null}</p>
                        <p>{content[topicIndex].descr3 ? content[topicIndex].descr3 : null}</p>
                        <img style={{borderRadius: '15px'}} className={'p-3 img-fluid'} src={content[topicIndex].img2 ? content[topicIndex].img2 : null} />
                        <p>{content[topicIndex].descr4 ? content[topicIndex].descr4 : null}</p>
                    </div> : null}
                    <div className={'container'} ><button className={'btn-primary btn my-3'} onClick={() => {
                        setModal(!modal);
                        setIndex(topicIndex);
                    }} >Edit</button></div>
                    {modal ? <EditTopic setContent={setContent} topicIndex={topicIndex} id={id} content={content} /> : null}
                </div>
                <div  className={'col-4'} >
                 <SideBar content={content} topicIndex={topicIndex}/>
                    {addModal ? <AddTopicItem id={id} /> : <button className={'btn-primary btn my-3'} onClick={() => setAddModal(!addModal)} >Add Topic</button>}

                </div>

            </div>
            <Footer/>
        </div>
    );
};

export default BoardTopic;
