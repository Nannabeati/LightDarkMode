// Write your code here

import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {changeMode: true}

  changeButton = () => {
    this.setState(prevState => ({changeMode: !prevState.changeMode}))
  }

  render() {
    const {changeMode} = this.state
    let clickChangeButton
    if (changeMode === true) {
      clickChangeButton = (
        <button className="button" type="button" onClick={this.changeButton}>
          Light Mode
        </button>
      )
    } else {
      clickChangeButton = (
        <button className="button" type="button" onClick={this.changeButton}>
          Dark Mode
        </button>
      )
    }

    let clickChangeColor
    if (changeMode === true) {
      clickChangeColor = (
        <div className="black">
          <h1 className="heading">Click To Change Mode</h1>
          {clickChangeButton}
        </div>
      )
    } else {
      clickChangeColor = (
        <div className="white">
          <h1 className="heading">Click To Change Mode</h1>
          {clickChangeButton}
        </div>
      )
    }
    return <div className="background-container">{clickChangeColor}</div>
  }
}

export default LightDarkMode
