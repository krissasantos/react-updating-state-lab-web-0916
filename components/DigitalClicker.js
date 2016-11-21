const React = require('react');

class DigitalClicker extends React.Component {
    constructor(){
      super();
      this.state = {
        timesClicked: 0 
      }
      // this.timesClicked = this.timesClicked.bind(this)

      this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
     this.setState({
       timesClicked: ++this.state.timesClicked
    })
 
    }
    // this.setState(){
    //    this.timesClicked += 1
    // }

      render(){
         
        return(
          <div>
         
            <button onClick = {this.handleClick}>{this.state.timesClicked}</button>

          </div>
          )
      }
}

module.exports = DigitalClicker;