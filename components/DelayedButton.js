const React = require('react')

class DelayedButton extends React.Component{
    constructor(props){
      super(props);
      this.state = {onclick: ''}
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick(ev){
      ev.persist();
      setTimeout(() => this.props.onDelayedClick(ev), this.props.delay);
    }

    render(){
      // console.log(this.props);
      return(
          <button onClick ={this.handleClick}> </button>
      )
    }
}

module.exports = DelayedButton
