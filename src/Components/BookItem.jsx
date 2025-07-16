import React from 'react'

function BookItem({ book, onDelete }) {
    return (
        <div className="bg-white shadow p-4 rounded mb-4 border m-4">
            <h3 className="text-xl font-semibold">{book.title}</h3>
            <p className="text-gray-600">By: {book.author}</p>
            <button
                onClick={() => onDelete(book.id)}
                className="mt-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
                Delete
            </button>
        </div>
    )
}

export default BookItem