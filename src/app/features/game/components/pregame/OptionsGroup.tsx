import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function OptionsGroup<Options extends string[]>({
    title,
    options,
    defaultValue,
    onChange,
}:{
    title :string,
    options: Options,
    defaultValue: Options[number],
    onChange: (arg:Options[number]) => void
}) {
    return (
        <RadioGroup className="w-full" defaultValue={defaultValue} onValueChange={onChange}>
            <Label className="text-xl font-semibold text-nowrap dark:text-gray-400">{title}</Label>
            {options.map(option => (
                <div key={option} className="flex items-center space-x-2">
                    <RadioGroupItem value={option} id={option} />
                    <Label htmlFor={option} className="capitalize dark:text-gray-200">{option}</Label>
                </div>
            ))}
        </RadioGroup>
    );
}
