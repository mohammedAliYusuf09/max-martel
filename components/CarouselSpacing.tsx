import * as React from "react"

import AyshaKhan from '@/public/images/tst-img-one.jpg'
import DavidLee from '@/public/images/tst-img-two.jpg'
import SarahMiller from '@/public/images/tst-img-foure.png'
import Card from "./ui/Card"
import CardContent from "./ui/CardContent"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function CarouselSpacing() {

  const testiList = [
    {
        testimoni: "The clinic is clean, modern, and relaxing. The staff is always friendly and helpful. I highly recommend [Clinic Name] to anyone looking for a great dental experience.",
        name: 'Aisha Khan',
        image: AyshaKhan
    },
    {
        testimoni: "The staff at [Clinic Name] is always so friendly and welcoming. They make going to the dentist a pleasant experience. I'm always impressed by their professionalism and expertise.",
        name: 'David Lee',
        image: DavidLee
    },
    {
        testimoni: "I was really nervous about my dental procedure, but Dr. [Max-Martel] and the staff made me feel so comfortable. The procedure was quick and painless, and the results are amazing. I'm so happy with my new smile!",
        name: 'Sarah Miller',
        image: SarahMiller
    },
    {
        testimoni: "The clinic is clean, modern, and relaxing. The staff is always friendly and helpful. I highly recommend [Clinic Name] to anyone looking for a great dental experience.",
        name: 'Aisha Khan',
        image: AyshaKhan
    },
    {
      testimoni: "The staff at [Clinic Name] is always so friendly and welcoming. They make going to the dentist a pleasant experience. I'm always impressed by their professionalism and expertise.",
      name: 'David Lee',
      image: DavidLee
    }
]
  return (
    <Carousel className="w-full sm:max-w-sm md:max-w-md lg:max-w-lg">
      <CarouselContent className="-ml-1">
        {testiList.map((testi, index) => (

          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                  <CardContent {...testi}/>
              </Card>
            </div>
          </CarouselItem>

        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
