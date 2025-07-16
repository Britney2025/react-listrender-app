import React from 'react'
import BookItem from './BookItem'

function Booklist({ books, onDelete }) {
    return (
        <div className="space-y-4">
            {books.length === 0 ? (
                <p className="text-gray-500">No books in this list.</p>
            ) : (
                books.map(book => (
                    <BookItem key={book.id} book={book} onDelete={onDelete}/>
                ))
            )}
        </div>
    )
}

export default Booklist