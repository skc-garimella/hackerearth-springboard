import React, { Component } from 'react';
import { connect } from 'react-redux';




class CourseDetail extends Component {

    render() {
      console.log(this);
      if (!this.props.courses.course) {
        return (
          <div>Loading...</div>
        );
      }

      const course = this.props.courses.course;
      return (
        <div className="media jumbotron">
          <a className="media-left disabled" href="">
            <img className="media-object" src={course.image} alt="Generic placeholder image" />
          </a>

          <div className="media-body panel panel-default">
            <div className="panel-body">
              <h4 className="media-heading text-center well well-sm text-success">{course.name}</h4>
              <em className="text-warning"><span className="glyphicon glyphicon-tags"></span> {course.tags} </em>
            </div>
            <div className="row">
              <p className="col-sm-3"><a className="btn btn-success pull-center" role="button" href={course.sign_up} target="_blank">View Cirriculum</a></p>
              <p className="text-right text-success col-sm-5">
                <span className="glyphicon glyphicon-user"></span><small>{course.learner} Learners</small>
              </p>
              <p className="text-right text-success col-sm-4">
                <span className="glyphicon glyphicon-time"></span><small>{course.hours} Hours</small>
              </p>
            </div>
          </div>

          <div className="desc">
            <h4 className="media-heading text-center well well-sm text-success"> Course Description</h4>
            <p>
              {course.description}
            </p>
          </div>

        </div>
      );
    }

}


function mapStateToProps(state) {
  return(
    { courses : state.courses }
  );
}


export default connect(mapStateToProps)(CourseDetail);
