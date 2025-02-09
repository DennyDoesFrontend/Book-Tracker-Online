export default function Button(props) {
    return (
        <div className="flex flex-col items-start gap-2 flex-1">
            <label className="text-3xl font-medium text-[#354259]">{props.label}</label>
            <button className="cursor-pointer w-full h-[40px] bg-[#ECE5C7] text-[20px]" type="submit">{props.text}</button>
        </div>
    )
}