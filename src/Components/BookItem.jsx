import React from 'react'

function BookItem({ book, onDelete }) {
    return (
        <div>
            <h3>{book.title}</h3>
            <p>By: {book.author}</p>
            <button
                onClick={() => onDelete(book.id)}
            >
                Delete
            </button>
        </div>
    )
}

export default BookItem