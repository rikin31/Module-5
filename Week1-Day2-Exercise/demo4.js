class Football extends React.Component {
  shoot() {
    alert("Grear Shot!");
  }
  render() {
      return (
        <button onClick={this.shoot} >Take the shot!</button>
      )
  }
}
ReactDOM.render(<Football />, document.getElementById('root'));