import React from 'react';
import styled from 'styled-components';
import 'react-accessible-accordion/dist/fancy-example.css';
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';


const AppStyled = styled.div`
  display: flex;

  .accordion {
    max-width: 220px;
  }

  .accordion__button {
    width: initial;
  }

  .content {
    flex: 1;
    text-align: center;
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
                      <ul>
                        {country.originUpperLevels.map((originCountry, i) => {
                          return <li key={i}>{originCountry}</li>
                        })}
                      </ul>
                    </AccordionItemPanel>
                </AccordionItem>
              )
            })}
        </Accordion>
        <div className="content">
          <h1>Homeis Communities</h1>
        </div>
      </AppStyled>
    );
  }  
}

export default App;
