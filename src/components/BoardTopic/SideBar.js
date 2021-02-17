import React, {useEffect} from 'react';

const SideBar = (props) => {
    useEffect(() => {
        console.log(props)
    }, [props.content]);
    return (
        <div className={'bg-dark  d-flex flex-column '} >
            {props.content.map((item, index) => {
                    if (props.topicIndex === index) {
                        return <p className={'h5 p-1'} style={{color: 'yellow'}} >{item.name}</p>
                    } else {
                        return <p className={'p-2'} style={{color: 'white'}} >{item.name}</p>
                    }
                }
            )}

        </div>
    );
};

export default SideBar;
