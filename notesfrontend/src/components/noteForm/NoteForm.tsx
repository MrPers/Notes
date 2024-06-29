import React, { FC, ReactElement} from 'react';
import './NoteForm.css';

const NoteForm: FC<{}> = (): ReactElement => {
    return (  
        <form className="note-form">
          <input required placeholder="title" />
          <textarea placeholder="Content" required rows={10} />
          <button type='submit'> Add Note </button>
        </form>
    );
};

export default NoteForm;
