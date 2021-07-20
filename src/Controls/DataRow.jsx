import React from 'react';
import Cell from './Cell';

class DataRow extends React.Component{
    constructor(props){
        super(props); 
        this.state={
          selected:false,
        }     
      }

      showCheckBox(){
        if(this.props.showCheckBox)
          return(<div className="gridCheckbox" style={{display:" table-cell"}}>
            <input id={} type="checkbox" onChange={()=>this.selectDeselectRow()}></input>
            <label for="checkboxFourInput"></label>
            </div> );
        else
          return(<div></div> );
      }
      showCrossIcon(){
        if(this.props.showCrossButton)
          return (<div className="firstHeaderCell"></div>);
      }
      selectDeselectRow(){
        this.setState({selected:!this.state.selected});
      }
      //<div className={"btn-group pull-right " + (this.props.showBulkActions ? 'show' : 'hidden')}></div>
      render(){
        return(
          <div style={{display:"table-row"}} className={`dataRow ${this.state.selected ?`rowSelected`:``}`}>            
            {this.showCheckBox()}          
            {this.props.rowData.map(function (cellData, index) {
              return <Cell key={index} cellData={cellData}></Cell>;
            })}
            {this.showCrossIcon()}
        </div>
        )
      }
}
export default DataRow;
