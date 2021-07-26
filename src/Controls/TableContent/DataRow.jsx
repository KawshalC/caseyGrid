import React from 'react';
import Cell from './Cell';
import lodash from 'lodash';

class DataRow extends React.Component{
    constructor(props){
        super(props);
        this.state={
          selected:false,
          dockedCols:props.dockedCols,
          hasDockedCols: props.dockedCols.length > 0
        }     
      }

      showCheckBox(){
        if(this.props.showCheckBox)
          return(<div className={`gridCheckbox ${this.state.hasDockedCols ?`stickyCell`:``}`} style={{display:" table-cell"}}>
            <input type="checkbox" onChange={()=>this.selectDeselectRow()}></input>
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
      render(){
        var dockedCols = this.state.dockedCols;
        return(
          <div style={{display:"table-row"}} className={`dataRow ${this.state.selected ?`rowSelected`:``}`}>            
            {this.showCheckBox()}
            {lodash.map(this.props.rowData, function (cellData, index) {
              var stickyCol = lodash.includes(dockedCols, cellData.model);
              debugger;
              return <Cell key={index} cellData={cellData} stickyCol={stickyCol} ></Cell>;
            })}
            {this.showCrossIcon()}
        </div>
        )
      }
}
export default DataRow;
