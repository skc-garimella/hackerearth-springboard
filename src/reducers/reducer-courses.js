
import React from 'react';
import { FETCH_COURSES, SELECT_COURSE, SEARCH_COURSE } from '../actions/index';

const INITIAL_STATE = { all: [], course: null } ;

export default function PostsReducer(state = INITIAL_STATE, action) {

  switch(action.type){
    case FETCH_COURSES:
      //console.log(state);
      //console.log(action );
      return { all: action.payload.data.paths,
              course: action.payload.data.paths[0],
              searchResults: action.payload.data.paths
            };

    case SELECT_COURSE:
      return { ...state, course : action.payload };

    case SEARCH_COURSE:
      const searchResults = state.all.filter( (course) => {
        return ( course.tags.toLowerCase().search(action.payload.toLowerCase()) >= 0 );
      });
      return (
        { ...state, searchResults : searchResults}
      );

    default:
      return state;
  }
}
