import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import logo from './logo.svg';
import './App.css';

class App extends Component {

   render() {

     let { data } = this.props
     console.log('ta', data)
     if (data.varibles) {
        return (<div>Loading</div>)
     }

     if(data.error) {
       return (<div>An unexpected error occurred</div>)
     }

     return (
       <div className="App">
         <div className="App-header">
           <img src={logo} className="App-logo" alt="logo" />
           <h3>Welcome to React + GraphQL + Apollo minimal boilerplate</h3>
           
         </div>
         <p>{data.quertSample1}</p>
         <br/>
         <p>{data.quertSample2}</p>
       </div>
     );
   }
 }

const MY_QUERY = gql`
  query hello {
    quertSample1,
    quertSample2
  }`;

const AppWithData = graphql(MY_QUERY)(App); 
export default AppWithData;