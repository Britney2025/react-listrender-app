import React from 'react'
import BookItem from './BookItem'

function Booklist({ books, onDelete }) {
    return (
        <div>
            {books.length === 0 ? (
                <p>No books in this list.</p>
            ) : (
                books.map(book => (
                    <BookItem key={book.id} book={book} onDelete={onDelete}/>
                ))
            )}
        </div>
    )
}

export default Booklist