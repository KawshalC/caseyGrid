import logo from './logo.svg';
import './App.css';
import React from 'react';
import Grid from './Controls/Grid';
import data from './data.json';

class App extends React.Component {
        constructor(props) {
            super(props);
            this.state = {};
        }
        render() {
            return ( <div className = "App" id="mainApp">
                {data.map(datum => {
                    debugger;
                    return <Grid data = { datum } > </Grid>})
                }                
                </div >);
            }
        }

        export default App;