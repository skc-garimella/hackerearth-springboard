import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { searchCourse } from '../actions/index';



class SearchBar extends Component {

  constructor(props){
    super(props);

    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event){
    this.props.searchCourse(event.target.value);
    this.setState({term: event.target.value});

    //this.searchCourse(this.state.term);
  }

  onFormSubmit(event){
    event.preventDefault();

    this.props.searchCourse(this.state.term);
    //clear the search input after this.
    this.setState({ term: '' });
  }


  render(){
    return(
      <div className="row">
        <form className="input-group col-sm-4" onSubmit={this.onFormSubmit}>
         <input
           placeholder="Tag based course search"
           type="text"
           className="form-control"
           value={this.state.term}
           onChange={this.onInputChange} />
          <span className="input-group-btn">
          <button type="submit" className="btn btn-success">
            <span className="glyphicon glyphicon-search"></span>
          </button>
         </span>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ searchCourse: searchCourse }, dispatch);
}


export default connect(null, mapDispatchToProps)(SearchBar);
