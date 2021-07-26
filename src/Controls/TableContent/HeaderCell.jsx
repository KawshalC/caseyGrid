import React from 'react';

class HeaderCell extends React.Component{
    constructor(props){
        super(props);
        this.state ={
          rowHeader:this.props.rowHeader
          }
      }
      render(){
        return(<div className="headerCellContainer">
            <div className="headerCell">{this.state.rowHeader.headerName}</div>
            </div>);
      }
}
export default HeaderCell;
