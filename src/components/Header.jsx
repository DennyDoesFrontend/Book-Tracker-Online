import Button from "./Button";
import Input from "./InputComponent";

export default function Header() {
    return (
        <>
            <h1 className="text-[50px] text-[#354259]">My Book-tracker Online</h1>
            <p className="text-[#354259] font-medium">As part of The Odin Project, My Book-tracker Online is an online book tracker that helps users keep track of books they have read or are currently reading.</p>
            <div className="flex items-center w-full justify-between gap-4 mb-8">
                <Input label="Title" type="text"/>
                <Input label="Pages" type="number"/>
                <Input label="Author" type="text"/>
                <Button label="Submit" text="Submit"/>
            </div>
            <hr className="text-[#CDC2AE] h-[5px] bg-[#354259] border-none"/>
        </>
    )
}