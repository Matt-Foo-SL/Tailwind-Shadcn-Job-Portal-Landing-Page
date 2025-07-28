import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { IoLocationOutline } from "react-icons/io5";
import { FaChevronUp } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa6";

export default function Nav() {
    const [selectedLink, setSelectedLink] = useState("");
    const [showMobileNav, setShowMobileNav] = useState(false);
    const links = ["Job Search", "Profile", "Employer Login", "Contact"];

    return (
        <>
            <div className="flex flex-row justify-between">
                <div className="flex flex-row items-baseline">
                    {/* Home icon */}
                    <a
                        href="https://my-job-portal-client.vercel.app/"
                        target="_blank"
                    >
                        <img
                            src={"react.svg"}
                            className="w-10 h-10 inline"
                            alt="react logo"
                        />
                        <p className="text-xl text-left inline ml-2">
                            My Job Portal
                        </p>
                    </a>
                    {/* desktop navbar */}
                    <div className="hidden md:grid grid-cols-[auto_auto_auto_auto] gap-4 text-md font-semibold ml-6">
                        {links.map((text, index) => (
                            <a
                                key={index}
                                className="hover:underline hover:decoration-primary hover:decoration-2 hover:underline-offset-4"
                                href="#"
                            >
                                {text}
                            </a>
                        ))}
                    </div>
                </div>
                <div className="hidden md:flex items-baseline gap-3">
                    <Button
                        type="button"
                        variant="outline"
                        className="max-w-[100px] text-primary border-primary cursor-pointer"
                        onClick={() => {}}
                    >
                        Sign in
                    </Button>
                    <a
                        className="text-left font-semibold text-primary"
                        href="#employerSignIn"
                    >
                        Employer Sign in
                    </a>
                </div>
                {/* Mobile nav button */}
                <Button
                    type="button"
                    variant="ghost"
                    className=" md:hidden text-lg transition-all duration-300 ease-linear"
                    onClick={() => setShowMobileNav(!showMobileNav)}
                >
                    Menu{" "}
                    {showMobileNav ? (
                        <FaChevronUp className="transition-all duration-300 ease-linear" />
                    ) : (
                        <FaChevronDown className="transition-all duration-300 ease-linear" />
                    )}
                </Button>
            </div>
            {/* mobile navbar */}
            <div
                className={`${
                    showMobileNav ? "block" : "hidden"
                } flex flex-col sm:hidden text-md font-semibold text-left  mt-3 z-10 absolute bg-white w-full h-screen `}
            >
                {links.map((text, index) => (
                    <a
                        key={index}
                        onClick={() => setSelectedLink(text)}
                        className={`min-h-13 flex items-center ${
                            text === selectedLink &&
                            "border-l-2 border-l-primary"
                        }`}
                        href="#"
                    >
                        <p className="ml-2">{text}</p>
                    </a>
                ))}
                <hr className="border-1" />
                <Button
                    type="button"
                    variant="outline"
                    className="max-w-[100px] text-lg text-primary border-primary my-5 ml-2"
                    onClick={() => {}}
                >
                    Sign in
                </Button>
                <hr className="border-1" />
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>
                            <p className="text-xl text-left font-semibold flex items-center">
                                <IoLocationOutline className="mr-3" />
                                Singapore
                            </p>
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4">
                            <a
                                className="min-h-10 text-xl text-left text-muted-foreground font-normal"
                                href="#"
                            >
                                Malaysia
                            </a>
                            <a
                                className="min-h-10 text-xl text-left text-muted-foreground font-normal"
                                href="#"
                            >
                                Thailand
                            </a>
                            <a
                                className="min-h-10 text-xl text-left text-muted-foreground font-normal"
                                href="#"
                            >
                                Australia
                            </a>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <hr className="border-1" />
                <p className="text-xl text-left font-semibold text-primary my-5 ml-2">
                    Employer Sign in
                </p>
            </div>
        </>
    );
}
