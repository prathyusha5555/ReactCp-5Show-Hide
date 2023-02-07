import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {firstName: false, lastName: false}

  onFirstName = () => {
    this.setState(prevState => ({firstName: !prevState.firstName}))
  }

  onLastName = () => {
    this.setState(prevState => ({lastName: !prevState.lastName}))
  }

  render() {
    const {firstName, lastName} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="names-container">
          <div className="name-button-container">
            <button className="button" type="button" onClick={this.onFirstName}>
              Show/Hide Firstname
            </button>

            {firstName && <p className="name">Joe</p>}
          </div>
          <div className="name-button-container">
            <button className="button" type="button" onClick={this.onLastName}>
              Show/Hide Lastname
            </button>
            {lastName && <p className="name">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
