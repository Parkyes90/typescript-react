import React from 'react';
import './Profile.css';
import Anonymous from './img/favicon-32x32.png';

const Profile = isAnonymous => {
    if(isAnonymous){
        return (
            <div className="anonymous">
                <div className="today_title">
                    무엇을 공유할까요?
                </div>
                <div className="anonymous_name">
                    티파니
                </div>
                <div className="anonymous_img_wrap">
                    <img src={Anonymous} alt="profiles" className="anonymous_img"/>
                </div>
            </div>
        )
    }
    return <div/>
};

export default Profile