import React, { Component } from 'react';


import { Navbar, NavItem, Nav, MenuItem, NavDropdown, Table } from 'react-bootstrap';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import {connect} from 'react-redux';

import {fetchInfo} from '../actions/actions_info';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedOption: '',
      jsonList: [],
    };
  };



  componentDidMount() {
    fetch('http://www.json-generator.com/api/json/get/ceqseKlYky?indent=2', {
      method: 'GET'
    })
      .then(response => response.json())
      .then(json => {
        console.log(json)
        this.setState({
          jsonList: json
        })

      })
      .catch(error => {
        console.log(error)
      });
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Selected: ${selectedOption.label}`);
  }

  render() {
const selectList = this.state.jsonList.map (  item => {
  return {
    value : item.name, label :item.name }
  });


    const { selectedOption } = this.state;
    return (
      <div className="App">
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#brand">React-Bootstrap</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="#">
                Link
      </NavItem>
              <NavItem eventKey={2} href="#">
                Link
      </NavItem>
              <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>Separated link</MenuItem>
              </NavDropdown>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">
                Link Right
      </NavItem>
              <NavItem eventKey={2} href="#">
                Link Right
      </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>;
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Age</th>
              <th>Company</th>
              <th>address</th>
            </tr>
          </thead>
          <tbody>
            {this.state.jsonList.map(item => {

              if ( selectedOption==='' || item.name===selectedOption.value) {
                console.log(selectedOption);
              return (
                <tr>
                  <td>{item.name
                }</td>
                  <td>{item.age}</td>
                  <td>{item.company}</td>
                  <td>{item.address}</td>
                </tr>

               
                )
              }
            })}

    
          </tbody>
        </Table>;
        <div className="container">
          <div className="row">
            <div className=
              "col-sm-12">
              <h1> Hello on my site tralalala</h1>
              <Select
                name="form-field-name"
                value={selectedOption}
                onChange={this.handleChange}
                options=
                  {selectList}
                 
                
              />
              <hr />
              {this.state.jsonList.map(item => {
                return (
                  <p>{item.name
                  }</p>
                )
              })}



            </div>
          </div>
        </div>


      </div>

    );
  }
}

export default App;