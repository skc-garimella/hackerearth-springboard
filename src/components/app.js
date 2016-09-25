import React, { Component } from 'react';
import CourseList from './course_list';
import CourseDetail from './course-detail';
import SearchBar from './search-bar';

export default class App extends Component {

  //this.props.children will have all the child components in a nested scenario.
  //see routes.js for nested components.
  render() {
    return (
      <div>
        <div>
          <nav className="navbar navbar-custom">
            <div className="container-fluid">
              <div className="navbar-header">
                <a className="navbar-brand" href="#">
                  SpringBoard LearningHub - one stop hub for all the learning paths
                </a>
              </div>
            </div>
          </nav>
        </div>
        <SearchBar />
        <div className="row">
          <CourseList />
          <CourseDetail />
        </div>
      </div>
    );
  }
}
