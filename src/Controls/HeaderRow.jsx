import React from 'react';
import HeaderCell from './HeaderCell';

class HeaderRow extends React.Component{
    constructor(props){
        super(props);        
      }
      showCheckBox(){
        if(this.props.showCheckBox)
          return(<div><input type="checkbox"></input></div> );
         else
          return(<div></div> );
      }
      showDeleteIcon(){
        if(this.props.showCheckBox)
          return (<div className="firstHeaderCell"><i className="fa fa-trash"></i></div>);
        return (<div className="firstHeaderCell"></div>);
      }
      render(){
        return(
          <div style={{display:"table-header-group"}} className="headerRow">
            {this.showDeleteIcon()} 
            {this.props.rowHeaders.map(function (rowHeader, index) {
              return <HeaderCell key={rowHeader.headerName} rowHeader={rowHeader}></HeaderCell>;
            })}
        </div>
        )
      }
}
export default HeaderRow;
