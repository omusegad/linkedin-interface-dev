import React from 'react';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import MainPosts from './MainPosts';

function MainContent(props) {
    return (
        <div className="container">
            <div className="row">
                <LeftSidebar/>
                <MainPosts/>
                <RightSidebar/>
            </div>
        </div>
    );
}

export default MainContent;