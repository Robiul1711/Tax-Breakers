import SectionHeader from "@/common/SectionHeader";
import CreateCard from "../testimonialCard/TestimonialCard";
export type TTestimonial = {
    image: string;
    name: string;
    handle: string;
    date: string;
}

const testimonialData : TTestimonial[] = [
    {
        image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200',
        name: 'Briar Martin',
        handle: '@neilstellar',
        date: 'April 20, 2025'
    },
    {
        image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200',
        name: 'Avery Johnson',
        handle: '@averywrites',
        date: 'May 10, 2025'
    },
    {
        image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60',
        name: 'Jordan Lee',
        handle: '@jordantalks',
        date: 'June 5, 2025'
    },
    {
        image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60',
        name: 'Avery Johnson',
        handle: '@averywrites',
        date: 'May 10, 2025'
    },
    {
        image: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=200&auto=format&fit=crop&q=60',
        name: 'Harper Collins',
        handle: '@harpercodes',
        date: 'July 15, 2025'
    },
    {
        image: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=200&auto=format&fit=crop&q=60',
        name: 'Mason Everett',
        handle: '@masonbuilds',
        date: 'August 2, 2025'
    },
    {
        image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&auto=format&fit=crop&q=60',
        name: 'Quinn Parker',
        handle: '@quinnupdates',
        date: 'September 12, 2025'
    },
    {
        image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&auto=format&fit=crop&q=60',
        name: 'Riley Brooks',
        handle: '@rileyinsights',
        date: 'October 8, 2025'
    },
    {
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&auto=format&fit=crop&q=60',
        name: 'Taylor West',
        handle: '@taylortrends',
        date: 'November 3, 2025'
    },
    {
        image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=200&auto=format&fit=crop&q=60',
        name: 'Dakota Hayes',
        handle: '@dakotawrites',
        date: 'December 1, 2025'
    }
];



const Testimonial = () => {
    return (
        <div className="mt-[144px]">
            <style>{`
            @keyframes marqueeScroll {
                0% { transform: translateX(0%); }
                100% { transform: translateX(-50%); }
            }

            .marquee-inner {
                animation: marqueeScroll 25s linear infinite;
            }

            .marquee-reverse {
                animation-direction: reverse;
            }
        `}</style>
            <SectionHeader title="Testimonial" main_title="Don't take our word for it. Take them." description="See how StoreX is transforming the way entrepreneurs around the world do business online." />

            <div className="marquee-row w-full mx-auto overflow-hidden relative mt-12">
                <div className="absolute left-0 top-0 h-full w-130 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent"></div>
                <div className="marquee-inner flex transform-gpu min-w-[200%] mb-5">
                    {[...testimonialData, ...testimonialData].map((card, index) => (
                        <CreateCard key={index} card={card} />
                    ))}
                </div>
                <div className="absolute right-0 top-0 h-full w-130 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent"></div>
            </div>

            <div className="marquee-row w-full mx-auto overflow-hidden relative">
                <div className="absolute left-0 top-0 h-full w-130 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent"></div>
                <div className="marquee-inner marquee-reverse flex transform-gpu min-w-[200%] mb-5">
                    {[...testimonialData, ...testimonialData].map((card, index) => (
                        <CreateCard key={index} card={card} />
                    ))}
                </div>
                <div className="absolute right-0 top-0 h-full w-130 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent"></div>
            </div>
        </div>
    )
}

export default Testimonial;