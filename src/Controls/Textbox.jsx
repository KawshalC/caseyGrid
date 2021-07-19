import React from 'react';
import TextareaCounter from 'react-textarea-counter';
class TextBox extends React.Component{
    constructor(props){
        super(props); 
        this.state = {
          rows: 1
        };       
      }
      render(){
        return(
          <div>
              <textarea rows={this.state.rows} defaultValue={this.props.value}	placeholder={'Enter Text'} ></textarea>
              <div></div>
          </div>
        )
      }
}
export default TextBox;
