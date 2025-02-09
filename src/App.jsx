import Card from "./components/Card";
import Header from "./components/Header";

export default function App() {
  return (
    <main className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] flex flex-col gap-[20px]">
      <Header />
      <div>
        <Card title="Harry Potter" pages="265" author="Denzel Ashitey" />
      </div>
    </main>
  )
}