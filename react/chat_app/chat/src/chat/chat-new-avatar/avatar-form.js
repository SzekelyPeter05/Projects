import React from 'react'

import Avatar from 'react-avatar-edit';

 
class AvatarSetter extends React.Component {
  
  constructor(props) {
    super(props)
    const src = ''
    this.state = {
     
      src
    }
    this.onCrop = this.onCrop.bind(this)
    this.onClose = this.onClose.bind(this)
    this.onBeforeFileLoad = this.onBeforeFileLoad.bind(this)
    
  }
  
  onClose() {
    this.props.setPreview(null)
  }
  
  onCrop(preview) {
    this.props.setPreview(preview);
  }
 
  onBeforeFileLoad(elem) {
    if(elem.target.files[0].size > 71680000){
      alert("File is too big!");
      elem.target.value = "";
    };
  }
  setEditorRef = (editor) => {
    this.editor = editor;
  }
  render () {
    let preview;
    const picstyle = {
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
       
      };
   this.props.preview === null ? preview = null : preview = <img style={picstyle} src={this.props.preview} alt="Preview" />;
    return (
      <div>
        <div>
            <Avatar
            ref={this.setEditorRef}
            width={390}
            height={295}
            onCrop={this.onCrop}
            onClose={this.onClose}
            onBeforeFileLoad={this.onBeforeFileLoad}
            src={this.state.src}
            />
        </div>
        <div>{preview}</div>
       
      </div>
    )
  }
}

export default AvatarSetter;
 