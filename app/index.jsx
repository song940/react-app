import React from 'react'; // or 'preact';
// import Button from './components/button';
import { Button } from 'antd';

class Index extends React.Component {
  constructor(props){
    super(props);
    this.state = { translation: [] };
  }
  translate(){
    const { word } = this.state;
    fetch(`https://api.lsong.org/translate?text=${word}`)
    .then(res => res.json())
    .then(({ translation }) => {
      this.setState({ translation });
    })
  }
  handleChange(e){
    this.setState({ word: e.target.value });
  }
  render(){
    const { translation } = this.state;
    return (
      <div>
        <h1>Hello React!</h1>
        {/* <Button name="A" color="red" /> */}
        {/* <Button name="B" color="blue" /> */}
        <input onInput={ e => this.handleChange(e) } className="block" />
        <Button onClick={ () => this.translate() } type="primary">Translate</Button>
        <ul>
        {
          translation.map(trans => <li>{ trans }</li>)
        }
        </ul>
      </div>
    )
  }
}

export default Index;
