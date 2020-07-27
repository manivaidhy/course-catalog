import React, { Component } from 'react';
import axios from 'axios';
import Sidebar from './sidebar.jsx';
import ReactHtmlParser from 'react-html-parser';

class Courses extends Component {

    constructor(props) {
        super(props);
        this.sidebarElement = React.createRef();
        this.updateSearch = this.updateSearch.bind(this);
    }

    state = {
        courses: []
    };

    componentDidMount() {
        var th = this;
        var config = {
          method: 'get',
          url: 'http://cors-anywhere.herokuapp.com/https://frontend-hiring.appspot.com/all_courses?secret=HelloMars',
          headers: {
            origin : "*"
           }
        };
        axios(config)
            .then(function(result) {   
              th.setState({
                courses: JSON.parse("[" + result.data.payload + "]")[0]
              })
            });
    
      }

      updateSearch(searchKeyword) {
        var th = this;
        var config = {
          method: 'get',
          url: 'http://cors-anywhere.herokuapp.com/https://frontend-hiring.appspot.com/all_courses?secret=HelloMars',
          headers: {
            origin : "*"
          }
        };
        axios(config)
            .then(function(result) {   
              th.setState({
                courses: JSON.parse("[" + result.data.payload + "]")[0]
              })
            });
        this.setState({searchKeyword: searchKeyword.target.value});
      }

      searchCheck(searchKeyword, inputData) {
        if(searchKeyword) {
          const keyword = searchKeyword.toLowerCase();
          const data = inputData.toLowerCase();
          if(data.includes(keyword)) {
            return true;
          } else {
            return false;
          }
        }
      }
      
      dateFormat(startDateVar, endDateVar) {
        const startDate = new Date(startDateVar);
        const endDate = new Date(endDateVar);
        const nowDate = new Date();
        let register = '';
        if(nowDate < startDate) {
          register = 'Pre-registration';
        } else if(nowDate > startDate && nowDate < endDate) {
          register = 'Ongoing';
        } else if(nowDate > endDate) {
          register = 'Completed';
        }
        let diff =(startDate.getTime() - endDate.getTime()) / 1000;
        diff /= (60 * 60 * 24 * 7);
        const weeksDiff = Math.abs(Math.round(diff));
        return {'register': register, 'weeks': weeksDiff, 'startDate': startDate, 'endDate': endDate};
      }

      render() {
        var strftime = require('strftime');
        var searchCheck;
        return (
          <div className="wrapper">
            <header className="header"></header>
            <Sidebar ref={this.sidebarElement} setInput={this.updateSearch}></Sidebar>
            <main className="main">
              <h2 className="main-title">{this.state.courses.length} courses open for registration</h2>
              <div className="courses-main">
              {
                this.state.courses && this.state.courses.map((course, index) => {
                    let searchData = course.title + ' ' + course.instructor_name;
                    searchCheck = true;
                    if(this.state.searchKeyword) {
                    searchCheck = this.searchCheck(this.state.searchKeyword, searchData);
                    }
                    if(searchCheck === true) {
                        const dateCalc = this.dateFormat(course.start_date, course.end_date);
                        return (                
                            <div key={index} className="single-course">
                                <div className="course-details">
                                    <div className="course-header">
                                        <div className="course-icon">
                                            <div className="course-image"></div>
                                        </div>
                                        <div className="course-content">                            
                                            <label className="label-text">{course.title}</label>
                                            <div className="course-meta">
                                                <h2 className="course-instructor">{course.instructor_name}</h2>
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
                                            <p>{ReactHtmlParser(course.description)}</p>
                                        </div>
                                    </div>
                                    <div className="course-footer">
                                        <div className="course-icon">
                                            <div className="course-body-icon">
                                                <svg className="course-info-icon" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">
                                                    <g><path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"></path></g>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="course-content">
                                            <h2 className="course-register">{dateCalc.register}</h2>
                                            <h2 className="course-date">{strftime('%B %d', dateCalc.startDate)} - {strftime('%B %d', dateCalc.endDate)}</h2>
                                            <h2 className="course-duration">{dateCalc.weeks} week course, {course.estimated_workload}</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>            
                        );
                    }
                    return null;
              })}
            </div>
	          </main>
           </div>
        )
    }
}
export default Courses;