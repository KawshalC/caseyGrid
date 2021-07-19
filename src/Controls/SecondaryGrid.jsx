import React from 'react';
import Grid from './Grid';
import $ from 'jquery'; 

class SecondaryGrid extends React.Component{
    constructor(props){
        super(props);  
        this.state={
            data:this.props.data,
            isOpen:false,
            pos: this.props.initialPos,
            dragging: false,
            rel: null // position relative to the cursor
        }      
      }
      setDefaultProps() {
        this.setState({pos: {x: 0, y: 0}});
      }      
      toggleGridView(){
        this.setState({isOpen: !this.state.isOpen});
      }      
      componentDidUpdate(props, state) {
        if (this.state.dragging && !state.dragging) {
          document.addEventListener('mousemove', this.onMouseMove)
          document.addEventListener('mouseup', this.onMouseUp)
        } else if (!this.state.dragging && state.dragging) {
          document.removeEventListener('mousemove', this.onMouseMove)
          document.removeEventListener('mouseup', this.onMouseUp)
        }
      }
      onMouseDown (e) {
        // only left  button
        if (e.button !== 0) return
        var pos = $(this.getDOMNode()).offset()
        this.setState({
          dragging: true,
          rel: {
            x: e.pageX - pos.left,
            y: e.pageY - pos.top
          }
        })
        e.stopPropagation()
        e.preventDefault()
      }
      onMouseUp (e){
        this.setState({dragging: false})
        e.stopPropagation()
        e.preventDefault()
      }
      onMouseMove(e) {
        if (!this.state.dragging) return
        this.setState({
          pos: {
            x: e.pageX - this.state.rel.x,
            y: e.pageY - this.state.rel.y
          }
        })
        e.stopPropagation()
        e.preventDefault()
      }
      showHideSecondaryTable(){
        if(this.state.isOpen)
          return(
          <div className="secondaryGrid">
            <Grid data={this.props.data}></Grid>
          </div>);
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

