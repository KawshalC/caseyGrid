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
            <HeaderRow showCheckBox={this.state.showCheckBox} rowHeaders={this.state.headerNames}></HeaderRow>
            {this.state.rowData.map((data, index)=> {
              return <DataRow key={index} showCheckBox={this.state.showCheckBox}  rowData={data} ></DataRow>;
            })}
          </div>
        )
      }
}
export default Grid;
