const React = require('react')

class CoordinatesButton extends React.Component{
  constructor(){
    super();
    // this.createElements = props.createElements.bind(this)
    // this.state.
  }

  createElements(ev){
    // debugger
    this.props.onReceiveCoordinates([ev.clientX, ev.clientY])
  }

  render(){

    return(
      <button onClick={this.createElements.bind(this)}> Click Me </button>
    )
  }
}
module.exports = CoordinatesButton
