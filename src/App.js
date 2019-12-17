import React from 'react';
import styled from 'styled-components';
import 'react-accessible-accordion/dist/fancy-example.css';
import logo from './img/logo.png'
import { 
  Accordion, 
  AccordionItem, 
  AccordionItemHeading, 
  AccordionItemButton, 
  AccordionItemPanel 
} from 'react-accessible-accordion';


const AppStyled = styled.div`
  display: flex;
  color: #fff;
  text-shadow:
    -1px -1px 0 #000,  
    1px -1px 0 #000,
    -1px 1px 0 #000,
    1px 1px 0 #000;
  }

  .accordion {
    max-width: 220px;

    .accordion__panel {
      background-color: rgba(0, 0, 0, 0.4);
    }

    .accordion__button {
      width: initial;
      background-color: rgba(0, 0, 0, 0.8);
      color: #fff;
    }

    .origin-list {
      list-style-type: none;

      .origin-item {
        margin: 5px;
      }
    }
  }

  .content {
    flex: 1;
    text-align: center;
    margin-top: 15px;
    font-size: 25px;
    letter-spacing: 2px;

    .title {
      display: inline-block;
    }

    .logo {
      width: 40px;
      position: absolute;
      right: 0;
      margin: 40px;
    }
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
        this.setState({data: res.data})
      });
  }

  render() {
    const { data } = this.state;
    return (
      <AppStyled className="App">
        <Accordion allowZeroExpanded={true}>
            {data.map( country => {
              return(
                <AccordionItem key={country.id}>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            {country.name}
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <ul className="origin-list">
                        {country.originUpperLevels.map((originCountry, i) => {
                          return <li className="origin-item" key={i}>{originCountry}</li>
                        })}
                      </ul>
                    </AccordionItemPanel>
                </AccordionItem>
              )
            })}
        </Accordion>
        <div className="content">
          <h1 className="title">Homeis Communities</h1>
          <img className="logo" src={logo} alt=""/>
        </div>
      </AppStyled>
    );
  }  
}

export default App;
