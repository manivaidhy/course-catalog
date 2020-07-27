import React, { Component } from 'react';

class Sidebar extends Component {

    render() {  
        return (
            <div className="wrapper">
                <header className="header">
                </header>
                <aside className="aside">
                    <h2 className="sidebar-title">Search for keywords</h2>
                    <div className="search-group">
                    <span className="search-icon">
                        <i className="fa fa-search"></i>
                    </span>
                    <input type="text" className="search-input" placeholder="Filter courses" id="inputGroup"></input>
                    </div>
                    <div className="status-group">
                    <h2 className="sidebar-title">Course status</h2>
                    <div className="radio-group">
                    <input className="radio-input" type="radio" id="male" name="gender" value="male" defaultChecked></input>
                    <label className="label-text" htmlFor="male">All</label><br></br>
                    <input className="radio-input" type="radio" id="female" name="gender" value="female"></input>
                    <label className="label-text" htmlFor="female">Computer</label><br></br>
                    <input className="radio-input" type="radio" id="female" name="gender" value="female"></input>
                    <label className="label-text" htmlFor="female">Engineering</label><br></br>
                    <input className="radio-input" type="radio" id="other" name="gender" value="other"></input>
                    <label className="label-text" htmlFor="other">Mathematics</label>
                    </div>
                </div>
                </aside>
                <main className="main">
                    <div id="root">
                        <h2 className="main-title">4 courses open for registration</h2>
                        <div className="courses-main">
                            <div className="single-course">
                                <div className="course-details">
                                    <div className="course-header">
                                        <div className="course-icon">
                                            <div className="course-image"></div>
                                        </div>
                                        <div className="course-content">                            
                                            <label className="label-text">Course 1</label>
                                            <div className="course-meta">
                                                <h2 className="course-instructor">Hello C</h2>
                                            </div>
                                        </div>
                                    </div>                    
                                    <div className="course-body">
                                        <div className="course-icon">
                                            <div className="course-body-icon">
                                                <svg className="course-info-icon" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">
                                                    <g><path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z"></path></g>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="course-content">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sagittis semper ipsum sed convallis. Integer eget quam ac felis imperdiet hendrerit id ac lectus. Proin nec laoreet est, a tincidunt felis</p>
                                        </div>
                                    </div>
                                    <div className="course-footer">
                                        <div className="course-icon">
                                            <div className="course-body-icon">
                                                <svg className="course-info-icon" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">
                                                    <g><path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" className="style-scope iron-icon"></path></g>\
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="course-content">
                                            <h2 className="course-register">Ongoing</h2>
                                            <h2 className="course-date">March 18 - August 19</h2>
                                            <h2 className="course-duration">22 week course, 4 hrs per day</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}

export default Sidebar;