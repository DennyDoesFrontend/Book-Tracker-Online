import Card from "./components/Card";
import Header from "./components/Header";
export default function App() {
  const books = [
    {
      title: 'Harry Potter',
      pages : 265,
      author: "Denzel Ashitey"
    },
    {
      title: 'Oliver Twist',
      pages : 141,
      author: "Regina Daniels"
    },
    {
      title: 'Street Child',
      pages : 265,
      author: "Jim Hawkens"
    },
    {
      title: 'Anonymous Life',
      pages: 123,
      author: 'Daniel Brians'
    },
  ]
  return (
    <main className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] flex flex-col gap-[20px]">
      <Header />
      <div className="grid grid-cols-4 gap-3">
        {
          books.map( (book)=> (<Card key={book.title} title={book.title} pages={book.pages} author={book.author}/>))
        }
      </div>
    </main>
  )
}