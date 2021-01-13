import React, { Component } from 'react'
import './App.css';

class App extends Component{
  render(){
    return (
    <div className="App">
<h2 style={{"textAlign":"center" ,"fontFamily":" 'Potta One', cursive"}} >React Pricing Tables</h2>
<tr>
    <td>

    </td>
</tr>
<div className="columns">
    <ul className="price">
        <li className="header" style={{"fontFamily":" 'Fira Sans', sans-serif;"}}>Organization</li>
        <li className="grey">$50</li>
        <li className="grey">Per user,per month</li>
        <li className="grey"><a href="#" className="button">Go Organization</a></li>
    </ul>
</div>

<div className="columns">
    <ul className="price">
        <li className="header" style={{"fontFamily":"'Fira Sans', sans-serif;"}}>Professional</li>
        <li className="grey">$25</li>
        <li className="grey">Per user,per month</li>
        <li className="grey" style={{"paddingTop": "2%"}}><a href="#" className="button">Go Professional</a></li>
    </ul>
    
</div>

<div className="columns">
    <ul className="price">
        <li className="header" style={{"fontFamily": "'Fira Sans', sans-serif"}}>Starter</li>
        <li className="grey">$0</li>
        
        <li className="grey">Per user,per month</li>
        <li className="grey"><a href="#" className="button" style={{"paddingTop": "0%"}}>Go Starter</a></li>
    </ul>
</div>
<h1 style={{"marginLeft": "2%", "margin-top":"14%" , "fontWeight": "bold", "fontSize":"35px","fontFamily": "'Fira Sans', sans-serif"}}>Features</h1>

<table style={{"fontFamily": "'Fira Sans', sans-serif"}}>
    <tr>
        <td>Centraized teams</td>
          <td><i className="fa fa-check-square-o"></i></td>
          <td><i className="fa fa-check-square-o"></i></td>
          <td><i className="fa fa-check-square-o"></i></td>
        </tr>
        <tr>
      <td>Version history</td>
      <td><i className="fa fa-check-square-o"></i></td>
      <td><i className="fa fa-check-square-o"></i></td>
      <td><i className="fa fa-check-square-o"></i></td>
    </tr>
    <tr>
      <td>Plugin adminstration</td>
      <td><i className="fa fa-check-square-o"></i></td>
      <td><i className="fa fa-check-square-o"></i></td>
      <td><i className="fa fa-check-square-o"></i></td>
    </tr>
    <tr>
        <td>Facebook and Instagram ads</td>
        <td><i style={{"color": "red"}} className="fa fa-check-square-o"></i></td>
        <td><i className="fa fa-check-square-o"></i></td>
        <td><i className="fa fa-check-square-o"></i></td>
    </tr>
    <tr>
        <td>Design system Analyitcs</td>
      <td><i style={{"color": "red"}} className="fa fa-check-square-o"></i></td>
      <td><i style={{"color": "red"}} className="fa fa-check-square-o"></i></td>
      <td><i className="fa fa-check-square-o"></i></td>
    </tr>
    <tr>
      <td>Unlimited cloud Storage</td>
      <td><i style={{"color": "red"}} className="fa fa-check-square-o"></i></td>
      <td><i style={{"color": "red"}} className="fa fa-check-square-o"></i></td>
      <td><i className="fa fa-check-square-o"></i></td>
    </tr>
  </table>
    </div>
  );
}
}
export default App;
