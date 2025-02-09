import Button from "./Button";

export default function Card(props) {
    return (
        <div className="flex flex-col items-start w-full p-4 shadow-lg max-w-[250px] border-2">
            <div>
                <h5 className="text-2xl text-[#354259] font-semibold">Title</h5>
                <p className="text-[18px] text-[#354259]">{props.title}</p>
            </div>
            <div>
                <h5 className="text-2xl text-[#354259] font-semibold">Pages</h5>
                <p className="text-[18px] text-[#354259]">{props.pages}</p>
            </div>
            <div>
                <h5 className="text-2xl text-[#354259] font-semibold">Author</h5>
                <p className="text-[18px] text-[#354259]">{props.author}</p>
            </div>
            <Button text="Read" color="#ECE5C7"/>
            <Button text="Delete" color="#CDC2AE"/>
        </div>
    )
}