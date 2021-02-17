import React from 'react';
import Header from '../Header/Header';
import MainSection from '../MainSection/MainSection';
import TopicItems from '../TopicItems/TopicItems';
import TopicSection from '../TopicSection/TopicSection';
import Footer from "../Footer/Footer";

const MainPage = () => {
    return (
        <div>
            <Header />
            <MainSection />
            <TopicSection />
            <TopicItems />
            <Footer/>
        </div>
    );
};

export default MainPage;
