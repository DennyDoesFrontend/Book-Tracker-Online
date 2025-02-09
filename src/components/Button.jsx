export default function Button(props) {
    return (
        <div className="flex flex-col items-start gap-2 flex-1 w-full">
            <label className="text-3xl font-medium text-[#354259]">{props.label}</label>
            <button style={{ backgroundColor: props.color }}  className={`cursor-pointer w-[100%] h-[40px] text-[20px]`} type="submit">{props.text}</button>
        </div>
    )
}