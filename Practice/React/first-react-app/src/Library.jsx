import Book from "./Book"

function Library({books}) {
    return (
        <div>
            <p>National Central Library</p>
            <p>Book collection: {books.length}</p>
            <ul>
                {
                    books.map(book => <Book key={book.id} book={book} />)
                }
            </ul>
        </div>
    )
}

export default Library