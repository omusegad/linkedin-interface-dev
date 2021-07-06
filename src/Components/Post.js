import React from 'react';
import ProfilePhoto from './ProfilePhoto';

function Posts(props) {
    return (
        <div>
            <div className="row bg-white p-2 border rounded">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2">
                            <ProfilePhoto/>
                        </div>
                        <div className="col-lg-9 text-muted">
                            <h6>Omuse Gad</h6>
                            <span> Software Developer </span>
                            <br/>
                            <span> 6d</span>
                            <span>edited</span>
                        </div>
                    </div>
                    <div className="row p-2">
                            <p>
                            Sed porttitor lectus nibh. Pellentesque in ipsum id orci porta dapibus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Proin eget tortor risus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Cras ultricies ligula sed magna dictum porta. Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Cras ultricies ligula sed magna dictum porta. Nulla porttitor accumsan tincidunt.
                            </p>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Posts;