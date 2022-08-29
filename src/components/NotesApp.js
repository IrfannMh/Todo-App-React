import React from 'react';
import NotesAppHeader from './NotesAppHeader';
import NotesAppInput from './NotesAppInput';
import NotesAppList from './NotesAppList';
import NotesAppListArchive from './NotesAppListArchive';

import { getInitialData } from '../utils/index';

 
class NotesApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      titleNote:'',
    }

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onChangeArchive = this.onChangeArchive.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  onSearchHandler(event){
    this.setState({
      titleNote: event.target.value
    })
  }
  onDeleteHandler(id){
    const notes = this.state.notes.filter(note => note.id !== id);
    this.setState({ notes });
  }

  onChangeArchive(id){
    const notes = this.state.notes.map(note =>{
      if (note.id === id) {
        note.archived=!note.archived
      }
      return note;
    } );
    this.setState({ notes });
  }
  onAddNoteHandler({title,body}){
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date(),
            archived: false,
          }
        ]
      }
    });
  }
  
  render() {
    return (
      <div className="note-app__body">
        <NotesAppHeader searchTitle={this.onSearchHandler}/>
        <NotesAppInput addNote={this.onAddNoteHandler}/>
        <NotesAppList 
          notes={this.state.notes.filter((note) => 
            note.title.toLowerCase().includes(this.state.titleNote.toLowerCase()))}
          onDelete={this.onDeleteHandler} 
          onChangeArchive={this.onChangeArchive}/>
        <NotesAppListArchive 
          notes={this.state.notes.filter((note) => 
            note.title.toLowerCase().includes(this.state.titleNote.toLowerCase()))}
          onDelete={this.onDeleteHandler} 
          onChangeArchive={this.onChangeArchive}/>
      </div>
    );
  }
 }

export default NotesApp;