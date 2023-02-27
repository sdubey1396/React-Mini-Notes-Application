import NotesList from "./components/NotesList";
import { useEffect, useState } from "react";
import { nanoid } from 'nanoid';
import Header from "./components/Header";
import Search from "./components/Search";
import background from "./images/pic1.jpeg";


const App = () => {

  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "Sample Note 1: Write social posts by March 1st",
      date: "02/18/2023"
    },

    {
      id: nanoid(),
      text: "Sample Note 2: Deploy flask project before dinner",
      date: "02/23/2023"
    },

    {
      id: nanoid(),
      text: "Sample Note 3: Finish Covid Dashboard",
      date: "02/27/2023"
    },

    {
      id: nanoid(),
      text: "Sample Note 4: Update Deck for Client",
      date: "02/27/2023"
    }
  ]);



  const [searchText, setSearchText] = useState('');


  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('react-notes-app-data')
		);

		if (savedNotes) {
			setNotes(savedNotes);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem('react-notes-app-data', JSON.stringify(notes)
		);
	}, [notes]);


  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid,
      text: text,
      date: date.toLocaleDateString()
    }

    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };


  const editNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid,
      text: text,
      date: date.toLocaleDateString()
    }

    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }; 

  const deleteNote = (id) => {
    const newNotes = notes.filter((note)=> note.id !== id);
    setNotes(newNotes);
  }



  return (
    <div style={{backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw', minHeight: '100vh'}}>
    <div className={`${darkMode && 'dark-mode'}`}>
    <div className="container">
      <Header handleToggleDarkMode={setDarkMode} />
      <Search handleSearchNote={setSearchText}/>
      <NotesList
					notes={notes.filter((note) =>
						note.text.toLowerCase().includes(searchText)
					)}
					handleAddNote={addNote}
          handleEditNote={editNote}
					handleDeleteNote={deleteNote}
				/>
    </div>
    </div>
    </div>

    );
};

export default App