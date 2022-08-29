import React from 'react';
 
class NotesAppInput extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    title: '',
    body: '',
    charLimit: 50
  }
  this.onSubmitHandler = this.onSubmitHandler.bind(this);
  this.onTitleChange = this.onTitleChange.bind(this);
  this.onBodyChange = this.onBodyChange.bind(this);
}
onTitleChange(event) {
  this.setState(() => {
    return {
      title: event.target.value.substring(0,this.state.charLimit),
    }
  });
}

onBodyChange(event){
  this.setState(()=>{
    return{
      body: event.target.value
    }
  })
}

  onSubmitHandler(event){
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <div className='note-input' >
        <h1 className='note-input__title'> Buat Catatan </h1>
        <p className='note-input__title__char-limit'>{this.state.charLimit-this.state.title.length}</p>
        <form onSubmit={this.onSubmitHandler}>
          <div className='note-input__body'>
            <input type="text" placeholder="Judul" value={this.state.title } onChange={this.onTitleChange}/>
            <textarea placeholder="Ketik disini..."  value={this.state.body } onChange={this.onBodyChange}/>
            <button type="submit">Buat</button>
          </div>
        </form>
      </div>
    )
  }
}
 
export default NotesAppInput;