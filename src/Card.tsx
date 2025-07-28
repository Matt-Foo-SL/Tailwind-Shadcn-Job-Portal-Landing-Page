import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";

export default function MyCard() {
    return (
        <Card className="w-full md:min-w-sm md:max-w-sm max-h-fit  md:absolute top-20 left-5">
            <CardHeader>
                <CardTitle>
                    <p className="text-xl text-left  font-semibold">
                        Find the right job for you on MyJobPortal
                    </p>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-left">
                    Sign in to see the right jobs for you
                </p>
                <Button
                    variant="outline"
                    className="w-full mt-3 cursor-pointer"
                >
                    <FcGoogle />
                    Continue with Google
                </Button>
                <div className="flex flex-row items-center align-middle  after:content-[''] after:flex-1 after:bg-gray-200 after:h-0.5 before:content-[''] before:flex-1 before:bg-gray-200 before:h-0.5">
                    <span className="px-0 py-5 mx-1">or</span>
                </div>
                <Button className="w-full mt-3 cursor-pointer">Sign in</Button>
                <p className=" text-left mt-3">
                    Don't have an account?{" "}
                    <span className="underline font-bold">
                        <a href="#register">Register</a>
                    </span>
                </p>
            </CardContent>
        </Card>
    );
}
