import React from 'react';
import Cell from './Cell';

class DataRow extends React.Component{
    constructor(props){
        super(props);        
      }

      showCheckBox(){
        if(this.props.showCheckBox)
          return(<div className="gridCheckbox" style={{display:" table-cell"}}><input type="checkbox"></input></div> );
        else
          return(<div></div> );
      }

      render(){
        return(
          <div style={{display:"table-row"}} className="dataRow">            
            {this.showCheckBox()}          
            {this.props.rowData.map(function (cellData, index) {
              return <Cell key={index} cellData={cellData}></Cell>;
            })}
        </div>
        )
      }
}
export default DataRow;
