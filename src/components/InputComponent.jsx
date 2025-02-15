
export default function Input({label, type, value, onChange}) {
    return (
        <div className="flex flex-col items-start flex-1 gap-2">
            <label className="text-3xl text-[#354259]">{label}</label>
            <input className="focus:outline focus:outline-1 focus:outline-[#CDC2AE] text-[20px] pl-[15px] h-[40px] min-w-full" type={type} value={value} onChange={onChange}/>
        </div>
    )
}