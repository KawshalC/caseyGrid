import React,{ useState } from 'react';
import HeaderRow from './HeaderRow';
import DataRow from './DataRow';

class Grid extends React.Component{
    constructor(props){
        super(props);
        this.state = props.data;
      }

      render(){
        return(
          <div className="CaseyGrid">
            <HeaderRow showCheckBox={this.state.showCheckBox} rowHeaders={this.state.headerNames} showCrossButton={this.state.showCrossIcon}></HeaderRow>
            {this.state.rowData.map((data, index)=> {
              return <DataRow key={index} showCheckBox={this.state.showCheckBox}  rowData={data} showCrossButton={this.state.showCrossIcon}></DataRow>;
            })}
          </div>
        )
      }
}
export default Grid;
