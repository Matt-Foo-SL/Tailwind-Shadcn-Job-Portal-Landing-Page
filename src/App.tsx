import "./App.css";
import NavBar from "./Navbar";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import Card from "./Card";
import MyCarousel from "./Carousel";
import { Button } from "@/components/ui/button";
import SearchJobForm from "./Form";
import { FaClockRotateLeft } from "react-icons/fa6";

export default function App() {
    return (
        <div className="relative">
            <NavBar />
            <div className="px-0.5">
                <div className="bg-blue-950 mt-6  p-6 rounded-3xl ">
                    <SearchJobForm />
                </div>

                {/* Badges */}
                <div className="md:hidden">
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Recent Searches</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4">
                                <div className="bg-gray-100 min-h-10 font-bold rounded-[3vw] flex items-center justify-center p-3 ">
                                    <FaClockRotateLeft className="mx-2" />
                                    <p>Fullstack developer - Singapore</p>
                                </div>
                                <div className="bg-gray-100 min-h-10 font-bold rounded-[3vw] flex items-center justify-center p-3 ">
                                    <FaClockRotateLeft className="mx-2" />
                                    <p>Junior frontend developer - Singapore</p>
                                </div>
                                <div className="bg-gray-100 min-h-10 font-bold rounded-[3vw] flex items-center justify-center p-3 ">
                                    <FaClockRotateLeft className="mx-2" />
                                    <p>Junior backend developer - Singapore</p>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <hr />
                </div>

                {/* Badges Desktop */}
                <div className="hidden md:flex flex-row mt-6 gap-4 text-gray-600 text-sm">
                    <div className="bg-gray-100 min-h-10 font-bold rounded-[3vw] flex items-center justify-center p-3 ">
                        <FaClockRotateLeft className="mx-2" />
                        <p>Fullstack developer - Singapore</p>
                    </div>
                    <div className="bg-gray-100 min-h-10 font-bold rounded-[3vw] flex items-center justify-center p-3 ">
                        <FaClockRotateLeft className="mx-2" />
                        <p>Junior frontend developer - Singapore</p>
                    </div>
                    <div className="bg-gray-100 min-h-10 font-bold rounded-[3vw] flex items-center justify-center p-3 ">
                        <FaClockRotateLeft className="mx-2" />
                        <p>Junior backend developer - Singapore</p>
                    </div>
                </div>
                {/* Middle picture and login */}
                <div className="flex flex-col md:flex-row-reverse mt-10 w-full relative">
                    <Card />
                    <img
                        className="aspect-16/9 object-cover rounded-3xl mt-3 max-w-full h-auto"
                        src="smile.jpg"
                        alt="smile"
                    />
                </div>

                <p className="text-xl text-left font-semibold mt-5">
                    Find your next employer
                </p>
                <p className="text-left text-gray-500">
                    Explore company profiles to find the right workplace for
                    you. Learn about jobs, reviews, company culture, perks and
                    benefits.
                </p>
                <MyCarousel />
                {/* 2 colored cards */}
                <div className="flex flex-col md:flex-row w-full mt-11 gap-4">
                    <div className="flex flex-col  relative bg-[url('shoes-col.png')] bg-cover bg-center md:bg-right h-98 w-full rounded-3xl md:bg-[url('shoes-row.png')] md:max-h-96">
                        <div className="absolute top-0 left-10 grow  md:top-10">
                            <p className="text-2xl text-left font-semibold mt-5">
                                Looking for the right role?
                            </p>
                            <p className="text-left">
                                We've curated companies, opportunities, and
                                advice tailored for you.
                            </p>
                            <Button className="mt-3 bg-background text-black float-left hover:bg-gray-200 cursor-pointer">
                                Explore now
                            </Button>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row relative bg-gray-300 h-98 w-full rounded-3xl  md:max-h-96">
                        <div className="p-5 pt-0 self-center">
                            <p className="text-2xl text-left font-semibold mt-5 ">
                                Verify your work credentials securely with SEEK
                                Pass.
                            </p>
                            <p className="text-left">
                                Now integrated with Singapore Careers & Skills
                                Passport.
                            </p>
                            <Button className="mt-3 bg-pink-500 text-white float-left cursor-pointer">
                                Learn more
                            </Button>
                        </div>
                        <div className="w-full h-full overflow-hidden flex justify-center">
                            <img
                                src="seek-pass.png"
                                alt="seek-pass.png"
                                className="max-h-full object-contain"
                            />
                        </div>
                    </div>
                </div>
                {/* Footer */}
                <div className="grid grid-cols-2 md:grid-cols-4 mt-10">
                    <div className="mb-5">
                        <p className="text-xl text-left font-semibold mb-2">
                            Job seekers
                        </p>
                        {[
                            "Job search",
                            "Login",
                            "Job Applications",
                            "Profile",
                        ].map((value, index) => {
                            return (
                                <p
                                    className="text-left text-gray-500 mb-2"
                                    key={index}
                                >
                                    {value}
                                </p>
                            );
                        })}
                    </div>
                    <div className="mb-5">
                        <p className="text-xl text-left font-semibold mb-2">
                            Employers
                        </p>
                        {[
                            "Login",
                            "Post a job ad",
                            "Approve candidates",
                            "Statistics Overview",
                        ].map((value, index) => {
                            return (
                                <p
                                    className="text-left text-gray-500 mb-2"
                                    key={index}
                                >
                                    {value}
                                </p>
                            );
                        })}
                    </div>
                    <div className="mb-5">
                        <p className="text-xl text-left font-semibold mb-2">
                            About us
                        </p>
                        {["Team", "Newsroom"].map((value, index) => {
                            return (
                                <p
                                    className="text-left text-gray-500 mb-2"
                                    key={index}
                                >
                                    {value}
                                </p>
                            );
                        })}
                    </div>
                    <div className="mb-5">
                        <p className="text-xl text-left font-semibold mb-2">
                            Contact
                        </p>
                        {["Email", "Product and Tech Blog"].map(
                            (value, index) => {
                                return (
                                    <p
                                        className="text-left text-gray-500 mb-2"
                                        key={index}
                                    >
                                        {value}
                                    </p>
                                );
                            }
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
