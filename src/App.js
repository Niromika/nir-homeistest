import React from 'react';
import styled from 'styled-components';

const AppStyled = styled.div`
  text-align: center;

  .countries-list {
    list-style-type: none;
  }
`

class App extends React.Component {

  state= {
    data: []
  }

  componentDidMount() {
    fetch('http://api.homeis.com/v1/communities')
      .then(res => res.json())
      .then(res => {
        console.log(res.data);
        this.setState({data: res.data})
      });
  }

  render() {
    const { data } = this.state;
    console.log(data);
    return (
      <AppStyled className="App">
        
      </AppStyled>
    );
  }  
}

export default App;
