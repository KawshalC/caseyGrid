import React from 'react';
import Cell from './Cell';
import Grid from './Grid';

class SecondaryGrid extends React.Component{
    constructor(props){
        super(props);  
        this.state={
            data:this.props.data,
            isOpen:false
        }      
      }

      toggleGridView(){
        this.setState({isOpen: !this.state.isOpen});
      }

      showHideSecondaryTable(){
          if(this.state.isOpen)
            return(<Grid data={this.props.data}></Grid>);
      }

      render(){
        return(        
            <div className="secondaryContainer dropdown">
                <div className='dropdown-header' onClick={()=>this.toggleGridView()}>
                    {this.state.selectedItem ? this.state.items.find(item => item.id === this.state.selectedItem).label : "Employees"}
                    <i className={`fa fa-chevron-right icon ${this.state.isOpen && "open"}`}></i>
                </div>
                {this.showHideSecondaryTable()}
            </div>
        )
      }
}
export default SecondaryGrid;
