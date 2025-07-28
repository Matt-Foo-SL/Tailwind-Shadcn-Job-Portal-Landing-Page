import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import CarouselCard from "./CarouselCard";

export default function MyCarousel() {
    return (
        <Carousel
            className="mt-6"
            opts={{
                loop: true,
            }}
        >
            <CarouselContent>
                <CarouselItem className=" lg:basis-1/3">
                    <CarouselCard
                        src="company0.jpg"
                        companyName="Choose Pte Ltd"
                        jobsNumber={7}
                    />
                </CarouselItem>
                <CarouselItem className="lg:basis-1/3">
                    <CarouselCard
                        src="company1.jpg"
                        companyName="Virto Pte Ltd"
                        jobsNumber={3}
                    />
                </CarouselItem>
                <CarouselItem className=" lg:basis-1/3">
                    <CarouselCard
                        src="company2.jpg"
                        companyName="Media Arc Pte Ltd"
                        jobsNumber={2}
                    />
                </CarouselItem>
                <CarouselItem className=" lg:basis-1/3">
                    <CarouselCard
                        src="company3.jpg"
                        companyName="Mellon Tech Pte Ltd"
                        jobsNumber={6}
                    />
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}
