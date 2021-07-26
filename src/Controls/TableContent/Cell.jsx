import React from 'react';
import DropDown from './TableCells/DropDown';
import EditableBox from './TableCells/EditableBox';
import SecondaryGrid  from './SecondaryGrid';

class Cell extends React.Component{
    constructor(props){
        super(props);
        this.state ={
          cellData:this.props.cellData,
          showTextBox:false,
          gridData:this.props.gridData,
          dblClick:"",//stickyCol
          }
      }
      //className={`tableCellContainer ${this.props.stickyCol ?`stickyCell`:``}`}
      showHideTextBox(){
          this.setState({showTextBox: !this.state.showTextBox});
      }
      render(){
        if(this.state.cellData.type === "0")
            return(
                <div className={`tableCellContainer ${this.props.stickyCol ?`stickyCell`:``}`}>
                    <SecondaryGrid data={this.state.cellData.secondaryData}></SecondaryGrid>
                </div>);
        else if(this.state.cellData.type === "1")
            return(
                <div className={`tableCellContainer ${this.props.stickyCol ?`stickyCell`:``}`}>
                    <EditableBox value={this.state.cellData.value} showTextBox={this.state.showTextBox} showHideTextBox={()=>this.showHideTextBox()}>
                </EditableBox>
            </div>);
        else if(this.state.cellData.type === "2")
            return(
                <div className={`tableCellContainer ${this.props.stickyCol ?`stickyCell`:``}`}>
                    <DropDown data={this.state.cellData.secondaryData} value={this.state.cellData.value}>
                </DropDown>
            </div>);
        else if(this.state.cellData.type === "3")
            return(
                <div className={`tableCellContainer ${this.props.stickyCol ?`stickyCell`:``}`}>
                    <input type="checkbox" defaultChecked={this.state.cellData.value}></input>
                </div>)
        return (<div className={`tableCellContainer ${this.props.stickyCol ?`stickyCell`:``}`}>  </div>);
      }
}
export default Cell;
