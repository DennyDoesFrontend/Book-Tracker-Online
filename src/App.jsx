import Card from "./components/Card";
import Header from "./components/Header";
import Input from "./components/InputComponent";
import { useState } from "react";
import Button from "./components/Button";

export default function App() {

  // declare default books array
  const defaultBooks = [
    {
      id: 1,
      title: 'Harry Potter',
      pages : 265,
      author: "J. K. Rowling"
    },
    {
      id: 2,
      title: 'Oliver Twist',
      pages : 141,
      author: "Regina Daniels"
    },
  ]

  // declare states
  const [books, setBooks] = useState(defaultBooks);
  const [title, setTitle] = useState("");
  const [pages, setPages] = useState("");
  const [author, setAuthor] = useState("");
  
  // function to Add a book to the books array
  const addBook = ()=> {
    // check if an input field is empty and then return without adding it to the books array
    if (!title || !pages || !author) return;

    // if all input fields are not empty...
    const newBook = {id: Date.now(), title, pages, author};
    setBooks([...books, newBook]);

    // now we clear all the input fields
    setTitle("");
    setPages("");
    setAuthor("");
  };

  // function to delete a book
  const deleteBook = (id) => {
    setBooks(books.filter(book => book.id !== id))
  }

  // function to edit book
  const editBook = (id, newTitle, newPages, newAuthor) => {
    setBooks(books.map(book => 
      book.id === id ? { ...book, title: newTitle, pages: newPages, author: newAuthor } : book
    ));
  };
  
  return (
    <main className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] flex flex-col gap-[20px]">
      <Header />

      <div className="flex items-center w-full justify-between gap-4 mb-8">
        <Input label="Title" type="text" value={title} onChange={ (e) => {setTitle(e.target.value)}}/>
        <Input label="Pages" type="number" value={pages} onChange={ (e) => {setPages(e.target.value)}}/>
        <Input label="Author" type="text" value={author} onChange={ (e) => {setAuthor(e.target.value)}}/>
        <Button label="Submit" text="Submit" color="#ECE5C7" onClick={addBook}/>
      </div>

      <div className="grid grid-cols-4 gap-3">
        {
          books.map( (book)=> (<Card 
            key={book.id} 
            id={book.id} 
            title={book.title} 
            pages={book.pages} 
            author={book.author} 
            onDelete={() => deleteBook(book.id)}
            onEdit={(id, newTitle, newPages, newAuthor) => editBook(id, newTitle, newPages, newAuthor)}
          />
          ))
        }
      </div>
    </main>
  )
}

