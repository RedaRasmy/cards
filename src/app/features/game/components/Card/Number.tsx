import { CardNumber } from "../../types/cards.type";

export default function Number({ number }: { number:CardNumber }) {
    return (
        <div
            className=" bg-opacity-15 border-[1.5px] border-white border-opacity-5 
        rounded-full
        w-4/5 h-4/5 flex justify-center items-center"
        >
            <h1 className="font-extrabold opacity-50 text-[4vw] portrait:text-[4vh] font-mono select-none">
                {number}
            </h1>
        </div>
    );
}