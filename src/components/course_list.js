
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCourses } from '../actions/index';
import { bindActionCreators } from 'redux'
import CourseListItem from './course-list-item';



class CourseList extends Component {

//Invoked once, both on the client and server, immediately before the initial rendering occurs.
  componentWillMount(){
    this.props.fetchCourses();
  }

  listCourses (courses) {
    if(courses.length == 0) {
      return (
        <a href="#" className="list-group-item">
          <h4 className="list-group-item-heading">No Results Found</h4>
        </a>
      );
    }

    return (
      courses.map( (course) => {
        return (
          <CourseListItem course={course} key={course.id} />
        );
      }
      )
    );
  }

  render() {
    if(!this.props.courses.searchResults){
      return(
        <div className="loader">
          Loading...
        </div>
      )
    }

    return (
      <div className="list-group col-md-3 s-scroll">
        {this.listCourses(this.props.courses.searchResults)}
      </div>
    );
  }
}


function mapStateToProps(state) {
  return(
    { courses : state.courses }
  );
}

function mapDispatchToProps(dispatch) {
  return(bindActionCreators({ fetchCourses }, dispatch));
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseList);
