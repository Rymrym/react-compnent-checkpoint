import React from 'react';
import photo from './profilePhoto.jpg';

const ProfilePhoto = () => {
    return (
        <React.Fragment>
        <img src ={photo} href ='profilePhoto' className="img-responsive"></img>
        </React.Fragment>
    )

}

export default ProfilePhoto;