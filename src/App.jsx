import React, { useState } from 'react'
import Booklist from './Components/Booklist'

function App() {
  const [books, setBooks] = useState([
    { id: 101, title: "Atomic Habits", author: "James Clear" },
    { id: 102, title: "The Alchemist", author: "Paulo Coelho" }
  ]);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleAddBook = () => {
    if (title && author) {
      const newBook = {
        id: Date.now(),
        title,
        author
      };
      setBooks([...books, newBook]);
      setTitle('');
      setAuthor('');
    }
  };

  const handleDelete = (id) => {
    setBooks(books(book = book.id !== id))
  };
  return (
    <div>
      <div>
        <h1 class="text-2xl font-bold text-center mb-6">Book List</h1>
        <div>
          <input 
          type="text" 
          placeholder='Book Title'
          value={title}
          onChange={e => setTitle(e.target.value)}
          />
          <input 
          type="text" 
          placeholder='Author'
          value={author}
          onChange={e => setAuthor(e.target.value)}
          />
          <button 
          onClick={handleAddBook}
          >
            Add
          </button>
        </div>
        <Booklist books={ books } onDelete={handleDelete}/>
      </div>
    </div>
  )
}

export default App