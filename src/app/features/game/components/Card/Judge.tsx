
export default function Judge() {
    return (
        <div className="
            border-2 rounded-[0.2vw] border-black border-opacity-20 
            size-[3.5vw] grid grid-cols-2 grid-rows-2
            portrait:size-[3.5vh] 
        ">
            <div className="bg-red-900 w-full h-full"></div>
            <div className="bg-blue-900 w-full h-full"></div>
            <div className="bg-yellow-700 w-full h-full"></div>
            <div className="bg-green-900 w-full h-full ">
                {/* <h1 className=" pointer-events-none select-none absolute 
                text-[2.5vw] portrait:text-[2.5vh] bottom-[30%]
                left-[30%] font-extrabold text-black opacity-50 font-serif">
                    X
                </h1> */}
            </div>
        </div>
    );
}