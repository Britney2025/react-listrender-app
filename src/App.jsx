import React, { useState } from 'react'
import Booklist from './Components/Booklist'

function App() {
  const [books, setBooks] = useState([
    { id: 101, title: "Atomic Habits", author: "James Clear" },
    { id: 102, title: "The Alchemist", author: "Paulo Coelho" },
    {id: 103, title: "Gifted Hands", author: "Ben Carson"}
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
    setBooks(books.filter(book => book.id !== id))
  };
  return (
    <div className="mn-h-screen bg-gray-100 p-8">
      <div className="max-w-xl mx-auto bg-white rounded shadow">
        <h1 className="text-2xl font-bold text-center mb-6">Book List</h1>
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <input 
          type="text" 
          placeholder='Book Title'
          value={title}
          onChange={e => setTitle(e.target.value)}
          className="flex-1 p-2 border rounded m-4"
          />
          <input 
          type="text" 
          placeholder='Author'
          value={author}
          onChange={e => setAuthor(e.target.value)}
          className="flex-1 p-2 border rounded m-4"
          />
          <button 
          onClick={handleAddBook}
          className="bg-blue-500 text-white px-4 py-2 m-4 rounded hover:bg-blue-600"
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