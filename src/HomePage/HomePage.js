import React from 'react';
import {Component} from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

export class HomePage extends Component {

  //State declaration
state = {
  books: [],
}

// Performing a GET request to retrive all phonebook
// componentWillMount() {
//   axios.get("https://code-catalist-phone-book-rails.herokuapp.com/contacts").then((response) =>{
//     this.setState({
//       books:response.data
//       })
//   });
// }

componentDidMount() {
  const url = 'https://code-catalist-phone-book-rails.herokuapp.com/contacts'
  axios.get(url).then(response => response.data)
  .then((data) => {
    this.setState({ books: data })
    console.log(this.state.books)
   })
}



render() {

  let books = this.state.books.map((book)=>{
    return(
      <tr key={book.id}>
        <td data-column="First Name">{book.name}</td>
        <td data-column="Last Name">{book.phone_number}</td>
        <td data-column="Job Title"><i className="fa fa-edit"></i></td>
        <td data-column="Twitter"><i className="fas fa-backspace" style={{color: 'red'}}></i></td>
      </tr>
      )

  });


  return (

    <div className="App">
      <nav >
        <div className="Part-one">
          <span className="fa-stack fa-3x">
            <i className="fa fa-circle fa-stack-2x"></i>
            <i className="fa fa-phone-alt fa-stack-1x fa-inverse"></i>
          </span>
        </div>
        <div className="Part-two">
          <span className="fa-stack fa-3x">
            <i className="fa fa-square fa-stack-2x"></i>
            <i className="fa fa-user fa-stack-1x fa-inverse"></i>
          </span>
          Admin Admin <i className="fa fa-angle-down" style={{color: '#3498db'}}></i>
        </div>
      </nav>

      <br />
      <h1 className="App-header">
        Phone Book Managers
      </h1>


      {/* Table To dispalay all phone book */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
            {books}
        </tbody>
      </table>

      {/* <button className="button btn"><i className="fa fa-plus"></i> Add Contact</button> */}
      {/* Link to add new phone book */}
      <Link to="/Add" className="button" target="_blank"><i className="fa fa-plus"></i>
        Add Contact
      </Link>

      <footer>
        <p>&copy;All Right Are  Reserved</p>
      </footer>

    </div>
  );
 }
}
