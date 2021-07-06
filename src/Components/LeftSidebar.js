import React from 'react';
import ProfileHeader from './ProfileHeader';

function LeftSidebar(props) {
    return (
        <div className="col-lg-3 bg-white p-3 border rounded">
            <ProfileHeader/>
        </div>
    );
}

export default LeftSidebar;