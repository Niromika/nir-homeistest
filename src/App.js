import React from 'react';
import styled from 'styled-components';
import 'react-accessible-accordion/dist/fancy-example.css';
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';


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
        <Accordion>
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
      </AppStyled>
    );
  }  
}

export default App;
