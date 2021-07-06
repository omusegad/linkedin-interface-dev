import React from 'react';
import ProfilePhoto from './ProfilePhoto';

function ProfileHeader(props) {
    return (
        <div className="text-center border-bottom">
            <ProfilePhoto/>
            <h4>Omuse Gad</h4>
        </div>
    );
}

export default ProfileHeader;