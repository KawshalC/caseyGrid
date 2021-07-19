import React from 'react';

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
          </div>
        )
      }
}
export default TextBox;
