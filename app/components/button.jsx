import React from 'react';

class Button extends React.Component {
  constructor(props){
    super(props);
    this.state = { time: 0 };
    // setInterval(() => {
    //   const { time } = this.state;
    //   this.setState({ time: time + 1 });
    // }, 1000);
  }
  handleClick(){
    const { time } = this.state;
    this.setState({ time: time + 1 });
  }
  render(){
    const { name, color } = this.props;
    const { time } = this.state;
    return <div onClick={ () => this.handleClick() } style={ { color } } >button { name } - { time }</div>;
  }
}

export default Button;