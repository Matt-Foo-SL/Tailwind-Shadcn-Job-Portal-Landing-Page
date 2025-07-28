import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useForm } from "react-hook-form";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { BsChevronExpand } from "react-icons/bs";
import { IoMdCheckmark } from "react-icons/io";

const classifications = [
    { label: "Accounting", value: "en" },
    { label: "Administration & Office Support", value: "fr" },
    { label: "Construction", value: "de" },
    { label: "Design & Architecture", value: "es" },
    { label: "Engineering", value: "pt" },
] as const;

export default function SearchJobForm() {
    const form = useForm();
    function onSubmit(values: { username?: "" }) {
        console.log(values);
        return (
            <Alert>
                <AlertTitle>Success! Your changes have been saved</AlertTitle>
                <AlertDescription>
                    This is an alert with icon, title and description.
                </AlertDescription>
            </Alert>
        );
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6 grid grid-cols-1 md:gap-4 md:grid-cols-[1fr_1fr_1fr_0.5fr]"
            >
                <FormField
                    control={form.control}
                    name="keywords"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-lg font-bold text-white">
                                What
                            </FormLabel>
                            <FormControl className="bg-white">
                                <Input
                                    placeholder="Enter keywords"
                                    {...field}
                                />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="classification"
                    render={({ field }) => (
                        <FormItem className="flex flex-col">
                            <FormLabel className="text-lg font-bold text-white">
                                Classification
                            </FormLabel>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <FormControl>
                                        <Button
                                            variant="outline"
                                            role="combobox"
                                            className={cn(
                                                "justify-between",
                                                !field.value &&
                                                    "text-muted-foreground"
                                            )}
                                        >
                                            {field.value
                                                ? classifications.find(
                                                      (classification) =>
                                                          classification.value ===
                                                          field.value
                                                  )?.label
                                                : "Select classification"}
                                            <BsChevronExpand className="opacity-50" />
                                        </Button>
                                    </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="p-0 w-(--radix-popover-trigger-width)">
                                    <Command>
                                        <CommandInput
                                            placeholder="Search..."
                                            className="h-9 "
                                        />
                                        <CommandList>
                                            <CommandEmpty>
                                                No classification found.
                                            </CommandEmpty>
                                            <CommandGroup>
                                                {classifications.map(
                                                    (classification) => (
                                                        <CommandItem
                                                            value={
                                                                classification.label
                                                            }
                                                            key={
                                                                classification.value
                                                            }
                                                            onSelect={() => {
                                                                form.setValue(
                                                                    "classification",
                                                                    classification.value
                                                                );
                                                            }}
                                                        >
                                                            {
                                                                classification.label
                                                            }
                                                            <IoMdCheckmark
                                                                className={cn(
                                                                    "ml-auto",
                                                                    classification.value ===
                                                                        field.value
                                                                        ? "opacity-100"
                                                                        : "opacity-0"
                                                                )}
                                                            />
                                                        </CommandItem>
                                                    )
                                                )}
                                            </CommandGroup>
                                        </CommandList>
                                    </Command>
                                </PopoverContent>
                            </Popover>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="region"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-lg font-bold text-white">
                                Where
                            </FormLabel>
                            <FormControl className="bg-white">
                                <Input
                                    placeholder="Enter city or region"
                                    {...field}
                                />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <Button
                    type="submit"
                    className="w-full mb-3 bg-pink-500 text-white text-lg font-bold md:mt-9 cursor-pointer"
                >
                    Search
                </Button>
            </form>
        </Form>
    );
}
