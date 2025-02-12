export default function Button({label, color, text, onClick}) {
    return (
        <div className="flex flex-col items-start gap-2 flex-1 w-full">
            <label className="text-3xl font-medium text-[#354259]">{label}</label>
            <button onClick={onClick} style={{ backgroundColor: color }}  className={`cursor-pointer w-[100%] h-[40px] text-[20px]`} type="submit">{text}</button>
        </div>
    )
}