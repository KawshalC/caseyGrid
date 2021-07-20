import React from 'react';


class EditableBox extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          showTextBox: this.props.showTextBox,
          rows:1
        };       
      };
      OnFocusOut(){
        this.setState({showTextBox: !this.state.showTextBox });
      };
      
      render(){
          if(this.props.showTextBox)
            return(
                <div>  
                    <textarea
                        rows={this.state.rows} 
                        defaultValue={this.props.value} 
                        onBlur={this.onFocusOut}>
                    </textarea>
                </div>);
          return(
            <div onDoubleClick={this.props.showHideTextBox}>
              <span>{this.props.value}</span>
            </div>
        )
      };
}
export default EditableBox;
