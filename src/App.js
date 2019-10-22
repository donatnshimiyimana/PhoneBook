import React from 'react';

import './App.css';

function App() {
  return (
    <div className="App">
      <nav >
        <div className="Part-one">
          <span class="fa-stack fa-3x">
            <i class="fa fa-circle fa-stack-2x"></i>
            <i class="fa fa-phone-alt fa-stack-1x fa-inverse"></i>
          </span>
        </div>
        <div className="Part-two">
          <span class="fa-stack fa-3x">
            <i class="fa fa-square fa-stack-2x"></i>
            <i class="fa fa-user fa-stack-1x fa-inverse"></i>
          </span>
          Admin Admin <i class="fa fa-angle-down" style={{color: '#3498db'}}></i>
        </div>
      </nav>

      <br />
      <h1 className="App-header">
        Phone Book Managers
      </h1>


      {/* Table */}
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
          <tr>
            <td data-column="First Name">James</td>
            <td data-column="Last Name">0785039498</td>
            <td data-column="Job Title"><i class="fa fa-edit"></i></td>
            <td data-column="Twitter"><i class="fas fa-backspace" style={{color: 'red'}}></i></td>
          </tr>
          <tr>
            <td data-column="First Name">Andor</td>
            <td data-column="Last Name">0785039498</td>
            <td data-column="Job Title"><i class="fa fa-edit"></i></td>
            <td data-column="Twitter"><i class="fas fa-backspace" style={{color: 'red'}}></i></td>
          </tr>
          <tr>
            <td data-column="First Name">Tamas</td>
            <td data-column="Last Name">0785039498</td>
            <td data-column="Job Title"><i class="fa fa-edit"></i></td>
            <td data-column="Twitter"><i class="fa fa-backspace" style={{color: 'red'}}></i></td>
          </tr>
          <tr>
            <td data-column="First Name">Zoli</td>
            <td data-column="Last Name">0785039498</td>
            <td data-column="Job Title"><i class="fa fa-edit"></i></td>
            <td data-column="Twitter"><i class="fa fa-backspace" style={{color: 'red'}}></i></td>
          </tr>
          <tr>
            <td data-column="First Name">Szabi</td>
            <td data-column="Last Name">0785039498</td>
            <td data-column="Job Title"><i class="fa fa-edit"></i></td>
            <td data-column="Twitter"><i class="fa fa-backspace" style={{color: 'red'}}></i></td>
          </tr>
        </tbody>
      </table>

      {/* <button className="button btn"><i class="fa fa-plus"></i> Add Contact</button> */}
      <a className="button" href="contact.js" target="_blank"><i class="fa fa-plus"></i> Add Contact</a>

      <footer>
        <p>&copy;All Right Are  Reserved</p>
      </footer>

    </div>
  );
}

export default App;
