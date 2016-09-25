import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectCourse } from '../actions/index';
import { bindActionCreators } from 'redux'



class CourseListItem extends Component{
  render() {
    return (
        <a onClick={(course) => this.props.selectCourse(this.props.course)} href="#" className="list-group-item">
          <h4 className="list-group-item-heading">{this.props.course.name}</h4>
          <p className="list-group-item-text"><small className="text-muted">{this.props.course.description}</small></p>
        </a>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return(bindActionCreators({ selectCourse }, dispatch));
}

export default connect(null, mapDispatchToProps)(CourseListItem);
