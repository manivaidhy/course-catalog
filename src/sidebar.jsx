import React, { Component } from 'react';
import axios from 'axios';

class Sidebar extends Component {
  
    state = {
      categories: []
    };
  
    componentDidMount() {
      var th = this;
      var config = {
        method: 'get',
        url: 'http://cors-anywhere.herokuapp.com/https://frontend-hiring.appspot.com/all_categories?secret=HelloMars',
        headers: { 
          origin : "*"
        }
      };
      axios(config)
          .then(function(result) {   
            th.setState({
              categories: JSON.parse("[" + result.data.payload + "]")[0]
            })
          });
    }
    
    render() {    
      return (
        <aside className="aside">
          <h2 className="sidebar-title">Search for keywords</h2>
          <div className="search-group">
            <span className="search-icon">
            <i className="fa fa-search"></i>
            </span>
            <input type="text" onChange={event => this.props.setInput(event)} className="search-input" placeholder="Filter courses" id="inputGroup"></input>
          </div>
          <div className="status-group">
            <h2 className="sidebar-title">Category</h2>
            <div className="radio-group" onChange={event => this.props.setCategory(event)}>
              <input className="radio-input" type="radio" id="all" name="coursecat" value="" defaultChecked></input>
              <label className="label-text" htmlFor="male">All</label>
                {
                this.state.categories && this.state.categories.map((job, index) => {
                  return (
                    <div key={index}>
                      <input className="radio-input" type="radio" id={job} name="coursecat" value={job}></input>
                      <label className="label-text" htmlFor="other">
                          {job}
                      </label>
                    </div>
                  );
                })
                }
            </div>
          </div>
        </aside>
      )    
    }
  }

export default Sidebar;