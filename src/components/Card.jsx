import Button from "./Button";
import { useState } from "react";

export default function Card({title, pages, author}) {
    const [status, setStatus] = useState("Reading")
    const [isBrown, setIsBrown] = useState(true)
    function handleClick() {
        setStatus(status === 'Reading' ? 'Finished' : 'Reading')
        setIsBrown(!isBrown)
    }
    return (
        <div className="flex flex-col items-start gap-2 w-full p-4 shadow-lg max-w-[250px] border-2 relative">
            <img src="/src/assets/edit.svg" alt="Edit" width="35px" className="absolute right-4 top-3 cursor-pointer "/>
            <div>
                <h5 className="text-lg text-[#354259]">Title</h5>
                <p className=" text-[#354259] text-2xl">{title}</p>
            </div>
            <div>
                <h5 className="text-lg text-[#354259]">Pages</h5>
                <p className="text-2xl text-[#354259]">{pages}</p>
            </div>
            <div>
                <h5 className="text-lg text-[#354259]">Author</h5>
                <p className="text-2xl text-[#354259]">{author}</p>
            </div>
            <Button onClick={handleClick} text={status} color={isBrown ? '#ECE5C7' : 'orange'}/>
            <Button text="Delete" color="#CDC2AE"/>
        </div>
    )
}