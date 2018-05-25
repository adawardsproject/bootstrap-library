import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, NavItem, Nav, MenuItem, NavDropdown, Table } from 'react-bootstrap';
import Select from 'react-select';
import 'react-select/dist/react-select.css';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedOption: '',
      jsonlList: [],
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
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
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
                options={[
                  { value: 'one', label: 'One' },
                  { value: 'two', label: 'Two' },
                ]}
              />
              <hr />
              {this.state.jsonList.map(item => {
                return (
                  <p>{item.name}</p>
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
