
import React from 'react';
import axios from 'axios';


const COURSES_URL = 'https://hackerearth.0x10.info/api/learning-paths';
export const FETCH_COURSES = 'FETCH_COURSES';
export const SELECT_COURSE = 'SELECT_COURSE';
export const SEARCH_COURSE = 'SEARCH_COURSE';

export const GET_POST = 'GET_POST';


export function fetchCourses() {
  const url = `${COURSES_URL}?type=json&query=list_paths`;
  const request = axios.get(url);

  return ({
    type : FETCH_COURSES,
    payload : request
  });
}

export function selectCourse(course) {

  return ( {
    type : SELECT_COURSE,
    payload : course
  });
}

export function searchCourse(term) {

  return ( {
    type : SEARCH_COURSE,
    payload : term
  });
}
