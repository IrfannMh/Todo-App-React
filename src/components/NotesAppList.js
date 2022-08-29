import React from 'react';
import NotesAppItem from './NotesAppItem';
function NotesAppList({notes, onDelete, onChangeArchive}) {
  const x = notes.filter((note)=>!note.archived)
  return (
    <div className='note-app__body'>
      <h2>Catatan Aktif</h2>
      {
        x.length < 1 &&
        <h3 className='notes-list__empty-message'>Tidak Ada Pesan</h3>
      }
      <div className='notes-list'>
      {
        x.map((note)=>(
          <NotesAppItem
          {...note}
          key={note.id}
          id={note.id}
          onChangeArchive={onChangeArchive}
          onDelete={onDelete}
          />
        ))
      }
      </div>
    </div>
  );
}

export default NotesAppList;