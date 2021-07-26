import React from 'react';
import HeaderCell from './HeaderCell';

class HeaderRow extends React.Component{
    constructor(props){
        super(props);
        this.state={
          hasDockedCols: props.dockedCols.length > 0
        }       
      }
      // showCheckBox(){
      //   if(this.props.showCheckBox)
      //     return(<div><input type="checkbox"></input></div> );
      //    else
      //     return(<div></div> );
      // }
      showDeleteIcon(){
        if(this.props.showCheckBox)
        //className={`firstHeaderCell ${this.state.hasDockedCols ?`stickyCell`:``}`}
          return (<div className={`firstHeaderCell ${this.state.hasDockedCols ?`stickyCell`:``}`}><i className="fa fa-trash"></i></div>);
        return (<div className="firstHeaderCell"></div>);
      }
      showCrossIcon(){
        if(this.props.showCrossButton)
          return (<div className="lastHeaderCell"><i className="fa fa-times"></i></div>);        
      }
      render(){
        return(
          <div className="headerRow">
            {this.showDeleteIcon()} 
            {this.props.rowHeaders.map(function (rowHeader, index) {
              return <HeaderCell key={rowHeader.headerName} rowHeader={rowHeader}></HeaderCell>;
            })}
            {this.showCrossIcon()}
        </div>
        )
      }
}
export default HeaderRow;
