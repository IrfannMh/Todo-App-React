import React from 'react';
import NotesAppItemArchive from './NotesAppItemArchive';
function NotesAppListArchive({notes, onDelete, onChangeArchive}) {
  const x = notes.filter((note)=>note.archived)
  return (
    <div className='note-app__body'>
      <h2>Arsip</h2>
      {
        x.length < 1 &&
        <h3 className='notes-list__empty-message'>Tidak Ada Pesan</h3>
      }
      <div className='notes-list'>
      {
        x.map((note)=>{
          return(
            <NotesAppItemArchive
            {...note}
            key={note.id}    
            id={note.id}
            onChangeArchive={onChangeArchive}
            onDelete={onDelete}
            />
          )
        })
      }
      </div>
    </div>
  );
}

export default NotesAppListArchive;