import { Progress } from "@/components/ui/progress"

export default function LoadingPage({progress}:{progress:number}) {
    return (
        <div className="flex flex-col items-center justify-center ">
            <Progress value={progress} className="w-[60%]" />
        </div>
    )
}
