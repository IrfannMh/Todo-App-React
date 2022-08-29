import React from 'react';

import { showFormattedDate } from '../utils/index';
 
function NotesAppItemArchive({title,createdAt, body,id,onDelete, onChangeArchive}) {
 return (
  <div className='note-item'>
    <div className='note-item__content'>
      <h3 className='note-item__title'>{title}</h3>
      <h4 className='note-item__date'>{showFormattedDate(createdAt)}</h4>
      <p className='note-item__body'>{body}</p>
    </div>
    <div className='note-item__action'>
      <button className='note-item__delete-button' onClick={()=> onDelete(id)}>Hapus</button>
      <button className='note-item__archive-button' onClick={()=> onChangeArchive(id)}>Aktifkan</button>
    </div>
  </div>
 );
}
 
export default NotesAppItemArchive;