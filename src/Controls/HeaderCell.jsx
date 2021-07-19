import React from 'react';

class HeaderCell extends React.Component{
    constructor(props){
        super(props);
        this.state ={
          rowHeader:this.props.rowHeader
          }
      }
      render(){
        return(<div style={{display: "table-cell"}}>
            <span className="headerCell">{this.state.rowHeader.headerName}</span>
            </div>);
      }
}
export default HeaderCell;
