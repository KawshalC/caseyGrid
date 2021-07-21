import React from 'react';
import DropDown from './DropDown';
import Grid from './Grid';
import EditableBox from './EditableBox';
import SecondaryGrid  from './SecondaryGrid';

class Cell extends React.Component{
    constructor(props){
        super(props);
        this.state ={
          cellData:this.props.cellData,
          showTextBox:false,
          gridData:this.props.gridData,
          dblClick:"",
          }
      }
      
      showHideTextBox(){
          this.setState({showTextBox: !this.state.showTextBox});
      }
      render(){
        if(this.state.cellData.type === "0")
            return(
                <div className="tableCellContainer" style={{display:"table-row"}}>
                    <SecondaryGrid data={this.state.cellData.secondaryData}></SecondaryGrid>
                </div>);
        else if(this.state.cellData.type === "1")
            return(
            <div className="tableCellContainer" style={{display:"table-cell"}}>
                <EditableBox value={this.state.cellData.value} showTextBox={this.state.showTextBox} showHideTextBox={()=>this.showHideTextBox()}>
                </EditableBox>
            </div>);
        else if(this.state.cellData.type === "2")
            return(
            <div className="tableCellContainer" style={{display:"table-cell"}}>
                <DropDown data={this.state.cellData.secondaryData} value={this.state.cellData.value}>
                </DropDown>
            </div>);
            else if(this.state.cellData.type === "3")
            return(
            <div className="tableCellContainer" style={{display:"table-cell"}}>
                <input type="checkbox" defaultChecked={this.state.cellData.value}></input>
            </div>)
        return (<div className="tableCellContainer" style={{display:"table-cell"}}></div>);
      }
}
export default Cell;
