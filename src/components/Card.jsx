import Button from "./Button";
import { useState } from "react";

export default function Card({ id, title, pages, author, onDelete, onEdit }) {
    const [status, setStatus] = useState("Reading");
    const [isBrown, setIsBrown] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(title);
    const [newPages, setNewPages] = useState(pages);
    const [newAuthor, setNewAuthor] = useState(author);

    // Toggle "Reading" <-> "Finished"
    function handleClick() {
        setStatus(status === 'Reading' ? 'Finished' : 'Reading');
        setIsBrown(!isBrown);
    }

    // Save the edited book info
    function handleSave() {
        if (onEdit) {
            onEdit(id, newTitle, newPages, newAuthor); // Call the parent function
        }
        setIsEditing(false); // Exit edit mode
    }

    return (
        <div className="flex flex-col items-start gap-2 w-full p-4 shadow-lg max-w-[250px] border-2 relative">
            {/* Edit Button */}
            <img 
                src="/src/assets/edit.svg" 
                alt="Edit" 
                width="35px" 
                className="absolute right-4 top-3 cursor-pointer"
                onClick={() => setIsEditing(true)} 
            />

            {isEditing ? (
                <>
                    {/* Editable Inputs */}
                    <input className="border p-1 w-full" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
                    <input className="border p-1 w-full" type="number" value={newPages} onChange={(e) => setNewPages(e.target.value)} />
                    <input className="border p-1 w-full" value={newAuthor} onChange={(e) => setNewAuthor(e.target.value)} />
                    <Button text="Save" color="green" onClick={handleSave} />
                    <Button text="Cancel" color="gray" onClick={() => setIsEditing(false)} />
                </>
            ) : (
                <>
                    {/* Display Book Details */}
                    <div>
                        <h5 className="text-lg text-[#354259]">Title</h5>
                        <p className="text-[#354259] text-2xl">{title}</p>
                    </div>
                    <div>
                        <h5 className="text-lg text-[#354259]">Pages</h5>
                        <p className="text-2xl text-[#354259]">{pages}</p>
                    </div>
                    <div>
                        <h5 className="text-lg text-[#354259]">Author</h5>
                        <p className="text-2xl text-[#354259]">{author}</p>
                    </div>
                </>
            )}

            {/* Reading Status and Delete Button */}
            <Button onClick={handleClick} text={status} color={isBrown ? '#ECE5C7' : 'orange'} />
            <Button text="Delete" color="#CDC2AE" onClick={onDelete} />
        </div>
    );
}
