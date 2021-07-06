import React from 'react';
import ProfilePhoto from './ProfilePhoto';

function SharePostBox(props) {
    return (
        <div className="row bg-white rounded border">
            <div className="container p-3">
                <div className="row">
                   <div className="col-lg-2"> 
                      <ProfilePhoto/>
                   </div>
                   <div className="col-lg-9"> 
                   <input className="input-box py-2 px-3" type="text" placeholder="Start a post " /> 
                   </div>
                </div>
                <div className="row pt-3">
                    <div className="col-lg-3">
                        Photo
                    </div>
                     <div className="col-lg-3">
                        Video
                    </div>
                    <div className="col-lg-3">
                        Event
                    </div>
                    <div className="col-lg-3">
                        Write article
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default SharePostBox;