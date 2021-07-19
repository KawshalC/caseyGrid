import logo from './logo.svg';
import './App.css';
import React from 'react';
import Grid from './Controls/Grid';

class App extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                showCheckBox: true,
                headerNames: [
                    { headerName: 'Employee Name', model: 'empName' },
                    { headerName: 'Employee Id', model: 'id' },
                    { headerName: 'Department', model: 'dept' },
                    { headerName: 'Reportees', model: 'reportee' },
                    { headerName: 'Salary', model: 'salary' },
                ],
                rowData: [
                        [   
                            { model: 'empName',value: 'AA',type: '1'},
                            { model: 'id', value: '226052', type: '1' },
                            { model: 'dept', value: '2', type: '2', secondaryData: [{ id: "0", label: "Harley" }, { id: "1", label: "Celica" }, { id: "2", label: "Joker" }] },
                            { model: 'reportee', value: 'Stuff', type: '1' },
                            { model: 'salary', value: 'Boxter', type: '1' }
                    
                         ],
                        [
                            { model: 'empName', value: 'A', type: '1' },
                            { model: 'id', value: '226052', type: '1' },
                            { model: 'dept', value: '2', type: '2', secondaryData: [{ id: "0", label: "Harley" }, { id: "1", label: "Celica" }, { id: "2", label: "Joker" }] },
                            { model: 'reportee', value: 'Stuff', type: '0',secondaryData: {
                                showCheckBox: true,
                                headerNames: [
                                    { headerName: 'Employee Name', model: 'empName' },
                                    { headerName: 'Employee Id', model: 'id' }
                                ],
                                rowData: [
                                    [
                                        { model: 'empName', value: '1', type: '1' },
                                        { model: 'id', value: '226052', type: '1' },
                                    ],
                                    [
                                        { model: 'empName', value: '1', type: '1' },
                                        { model: 'id', value: '226052', type: '1' },
                                    ]
                                ]
                            } },
                            { model: 'salary', value: 'Boxter', type: '1' }
                        ],
                        [
                            { model: 'empName', value: 'B', type: '1' },
                            { model: 'id', value: '226052', type: '1' },
                            { model: 'dept', value: '2', type: '2', secondaryData: [{ id: "0", label: "Harley" }, { id: "1", label: "Celica" }, { id: "2", label: "Joker" }] },
                            { model: 'reportee', value: 'Stuff', type: '1' },
                            { model: 'salary', value: 'Boxter', type: '1' }
                        ],
                        [
                            { model: 'empName', value: 'B', type: '1' },
                            { model: 'id', value: '226052', type: '1' },
                            { model: 'dept', value: '2', type: '2', secondaryData: [{ id: "0", label: "Harley" }, { id: "1", label: "Celica" }, { id: "2", label: "Joker" }] },
                            { model: 'reportee', value: 'Stuff', type: '1' },
                            { model: 'salary', value: 'Boxter', type: '1' }
                        ],
                        [
                            { model: 'empName', value: 'B', type: '1' },
                            { model: 'id', value: '226052', type: '1' },
                            { model: 'dept', value: '2', type: '2', secondaryData: [{ id: "0", label: "Harley" }, { id: "1", label: "Celica" }, { id: "2", label: "Joker" }] },
                            { model: 'reportee', value: 'Stuff', type: '1' },
                            { model: 'salary', value: 'Boxter', type: '1' }
                        ],
                        [
                            { model: 'empName', value: 'E', type: '1' },
                            { model: 'id', value: '226052', type: '1' },
                            { model: 'dept', value: '2', type: '2', secondaryData: [{ id: "0", label: "Harley" }, { id: "1", label: "Celica" }, { id: "2", label: "Joker" }] },
                            { model: 'reportee', value: 'Stuff', type: '1' },
                            { model: 'salary', value: 'Boxter', type: '1' }
                        ]
                    ]
            }
        };
        render() {
            return ( <div className = "App" id="mainApp">
                <Grid data = { this.state } > </Grid>   
                </div >);
            }
        }

        export default App;