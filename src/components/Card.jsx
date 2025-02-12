import Button from "./Button";
import { useState } from "react";

export default function Card(props) {
    const [status, setStatus] = useState("Reading")
    const [isBrown, setIsBrown] = useState(true)
    function handleClick() {
        setStatus(status === 'Reading' ? 'Finished' : 'Reading')
        setIsBrown(!isBrown)
    }
    return (
        <div className="flex flex-col items-start w-full p-4 shadow-lg max-w-[250px] border-2 relative">
            <img src="/src/assets/edit.svg" alt="Edit" width="35px" className="absolute right-4 top-4 cursor-pointer "/>
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
            <Button onClick={handleClick} text={status} color={isBrown ? '#ECE5C7' : 'red'}/>
            <Button text="Delete" color="#CDC2AE"/>
        </div>
    )
}