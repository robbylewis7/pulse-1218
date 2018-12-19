import React from 'react';
import Pulse from './pulse.png'
import TopInfo from './top-info'
import './signup.css'


export default class Signup extends React.Component {
        constructor(props) {
          super(props);
          this.state = {
              username: '',
              lastName: '',
              firstName: '',
              password: ''
            };
      
          this.handleInputChange = this.handleInputChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
        }
      
        handleInputChange(event) {
            this.setState({ 
                [event.target.name]: event.target.value 
            });
          }

          handleSubmit(event) {
            alert('A name was submitted: ' + this.state.username);
            event.preventDefault();
          }
      
        render() {

          return (
            <div>
              <TopInfo />

              <div id = "signup">
                <form onSubmit={this.handleSubmit}>
                  <label>
                    First Name:
                    <input type="text" name = "firstName" value={this.state.firstName} onChange={this.handleInputChange} />
                  </label>
                  <label>
                    Last Name:
                    <input type="text" name = "lastName" value={this.state.lastName} onChange={this.handleInputChange} />
                  </label>
                  <label>
                    Username:
                    <input type="text" name = "username" value={this.state.username} onChange={this.handleInputChange} />
                  </label>
                  <label>
                    Password:
                    <input type="password" name = "password" value={this.state.password} onChange={this.handleInputChange} />
                  </label>
                  <input type="submit" value="Submit" />
                </form>
              </div>
            </div>
          );
        }
      }
