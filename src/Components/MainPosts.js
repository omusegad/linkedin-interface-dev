import React from 'react';
import SharePostBox from './SharePostBox';
import Posts from './Post';

function MainPosts(props) {
    return (
        <div className="col-lg-6">
                <div className="container">
                    <SharePostBox/>
                    <div className="row">
                        <div className="col-lg-12 p-0"> 
                        <hr/>
                        </div>
                    </div>
                    <Posts/>
            </div>
        </div>
    );
}

export default MainPosts;