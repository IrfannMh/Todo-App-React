import React from 'react';

class NotesAppHeader extends React.Component {
  render() {
    return (
      <div className="note-app__header">
        <h1>Notes App</h1>
        <input type="text" placeholder="Cari Catatan..." onChange={this.props.searchTitle}/>
      </div>
    );
  }
 }

export default NotesAppHeader;