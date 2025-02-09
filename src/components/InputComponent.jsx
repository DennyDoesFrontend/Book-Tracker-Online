export default function Input(props) {
    return (
        <div className="flex flex-col items-start flex-1 gap-2">
            <label className="text-3xl text-[#354259]">{props.label}</label>
            <input className="focus:outline focus:outline-1 focus:outline-[#CDC2AE] text-[20px] pl-[15px] h-[40px] min-w-full" type={props.type} />
        </div>
    )
}