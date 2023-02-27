import { MdDeleteForever } from 'react-icons/md'
import { useState } from 'react';

const Note = ({id, text, date, handleDeleteNote, handleEditNote }) => {

    const [noteText, setNoteText] = useState('');
    const characterLimit = 200;

    const handleChange = (event) => {
        if(characterLimit - event.target.value.length >= 0){
            setNoteText(event.target.value);
        }
 
	};


    const handleSaveClick = () => {
        if(noteText.trim().length >0) {
            handleEditNote(noteText);
            setNoteText('');
        }
    };


    return (
        <div className="note">
            <textarea className='note-main' style={{fontWeight: "bold"}}
                rows='10'
                cols='10'
                placeholder={text}
                value={noteText}
                onChange={handleChange}
            ></textarea>

            <div className="note-footer">
                <small>{characterLimit - noteText.length} characters remaining</small>
                <button className="save" onClick={handleSaveClick}>save</button>
                <MdDeleteForever 
                onClick={() => handleDeleteNote(id)}
                className="delete-icon" 
                size="1.3em" />
            </div>
        </div>
    );
};

export default Note; 




