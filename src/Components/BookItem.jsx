import React from 'react'

function BookItem({ book, onDelete }) {
    return (
        <div class="bg-white shadow p-4 rounded mb-4 border">
            <h3 class="text-xl font-semibold">{book.title}</h3>
            <p class="text-gray-600">By: {book.author}</p>
            <button
                onClick={() => onDelete(book.id)}
                class="mt-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
                Delete
            </button>
        </div>
    )
}

export default BookItem