import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type Props = {
    src: string;
    companyName: string;
    jobsNumber: number;
};

export default function CarouselCard({ src, companyName, jobsNumber }: Props) {
    return (
        <Card className="w-full max-h-fit ">
            <CardHeader>
                <CardTitle>
                    <img src={src} alt={src} className="size-16" />
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-xl text-left font-semibold">{companyName}</p>
            </CardContent>
            <CardFooter>
                <Badge variant="secondary" className="text-sm">
                    {jobsNumber} jobs
                </Badge>
            </CardFooter>
        </Card>
    );
}
