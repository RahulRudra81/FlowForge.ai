import { React, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


import {
    Navbar,
    MobileNav,
    Typography,
    Carousel,
    Button,
    IconButton,
    Card,
} from "@material-tailwind/react";

const LINKS = [
    {
        title: "Product",
        items: ["Overview", "Features", "Solutions", "Tutorials"],
    },
    {
        title: "Company",
        items: ["About us", "Careers", "Press", "News"],
    },
    {
        title: "Resource",
        items: ["Blog", "Newsletter", "Events", "Help center"],
    },
];

const currentYear = new Date().getFullYear();

export function Header() {
    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    const navList = (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <a href="#" className="flex items-center">
                    Features
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <a href="#" className="flex items-center">
                    Account
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <a href="#" className="flex items-center">
                    FlowBox
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <a href="#" className="flex items-center">
                    Contact Us
                </a>
            </Typography>
        </ul>
    );
    return (
        <div className="-m-6 max-h-[800px] w-[calc(100%+48px)] overflow-scroll">
            <Navbar className="sticky top-0 z-10 h-max max-w-screen rounded-none px-4 py-2 lg:px-8 lg:py-4">
                <div className="flex items-center justify-between text-blue-gray-900">
                    <div className="flex items-center">
                        {/* <Typography
                            as="a"
                            href="#"
                            className="mr-4 cursor-pointer py-5 font-medium text-xl relative inline-block"
                        >
                            <img src="/avidsynth.ai/src/assets/assets/avilogo.png" alt="Image Alt Text" className="w-6 h-6" />
                            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue transition-all duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
                        </Typography> */}
                        <Typography
                            as="a"
                            href="#"
                            className="cursor-pointer py-1.5 font-medium"
                        >
                            avidSYNTH
                        </Typography>
                    </div>




                    <div className="flex items-center gap-4">
                        <div className="mr-4 hidden lg:block">{navList}</div>
                        <div className="flex items-center gap-x-1">
                            <Button
                                variant="text"
                                size="sm"
                                className="hidden lg:inline-block"
                            >
                                <span>Log In</span>
                            </Button>
                            <Button
                                variant="gradient"
                                size="sm"
                                className="hidden lg:inline-block"
                            >
                                <span>Sign in</span>
                            </Button>
                        </div>
                        <IconButton
                            variant="text"
                            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                            ripple={false}
                            onClick={() => setOpenNav(!openNav)}
                        >
                            {openNav ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    className="h-6 w-6"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </IconButton>
                    </div>
                </div>
                <MobileNav open={openNav}>
                    {navList}
                    <div className="flex items-center gap-x-1">
                        <Button fullWidth variant="text" size="sm" className="">
                            <span>Log In</span>
                        </Button>
                        <Button fullWidth variant="gradient" size="sm" className="">
                            <span>Sign in</span>
                        </Button>
                    </div>
                </MobileNav>
            </Navbar>
            <div className="mx-auto max-w-screen-md py-12">
                <Card className="mb-12 overflow-hidden">
                    <Carousel className="rounded-xl w-full h-screen">
                        <div className="relative h-full w-full">
                            <img
                                src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                                alt="image 1"
                                className="h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                                <div className="w-3/4 text-center md:w-2/4">
                                    <Typography
                                        variant="h1"
                                        color="white"
                                        className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                                    >
                                        AI tech 2024 latest
                                    </Typography>
                                    <Typography
                                        variant="lead"
                                        color="white"
                                        className="mb-12 opacity-80"
                                    >
                                        It is not so much for its beauty that the forest makes a claim
                                        upon men&apos;s hearts, as for that subtle something, that quality
                                        of air that emanation from old trees, that so wonderfully changes
                                        and renews a weary spirit.
                                    </Typography>
                                    <div className="flex justify-center gap-2">
                                        <Button size="lg" color="white">
                                            Explore
                                        </Button>
                                        <Button size="lg" color="white" variant="text">
                                            Gallery
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-full w-full">
                            <img
                                src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                                alt="image 2"
                                className="h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
                                <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
                                    <Typography
                                        variant="h1"
                                        color="white"
                                        className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                                    >
                                        Text to speech
                                    </Typography>
                                    <Typography
                                        variant="lead"
                                        color="white"
                                        className="mb-12 opacity-80"
                                    >
                                        It is not so much for its beauty that the forest makes a claim
                                        upon men&apos;s hearts, as for that subtle something, that quality
                                        of air that emanation from old trees, that so wonderfully changes
                                        and renews a weary spirit.
                                    </Typography>
                                    <div className="flex gap-2">
                                        <Button size="lg" color="white">
                                            Explore
                                        </Button>
                                        <Button size="lg" color="white" variant="text">
                                            Gallery
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-full w-full">
                            <img
                                src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
                                alt="image 3"
                                className="h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
                                <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
                                    <Typography
                                        variant="h1"
                                        color="white"
                                        className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                                    >
                                        GPT node
                                    </Typography>
                                    <Typography
                                        variant="lead"
                                        color="white"
                                        className="mb-12 opacity-80"
                                    >
                                        It is not so much for its beauty that the forest makes a claim
                                        upon men&aps hearts, as for that subtle something, that quality
                                        of air that emanation from old trees, that so wonderfully changes
                                        and renews a weary spirit.
                                    </Typography>
                                    <div className="flex gap-2">
                                        <Button size="lg" color="white">
                                            Explore
                                        </Button>
                                        <Button size="lg" color="white" variant="text">
                                            Gallery
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel>
                </Card>
                <Typography variant="h2" color="blue-gray" className="mb-2">
                    {/* text here  */}
                </Typography>
                <Typography color="gray" className="font-normal">

                    {/* text here  */}
                </Typography>

                {/* footer-----------------------------------------------------------------------------------------------------------------------  */}
                <footer className="relative w-full">
                    <div className="mx-auto w-full max-w-7xl px-8">
                        <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
                            <Typography variant="h5" className="mb-6">
                                Material Tailwind
                            </Typography>
                            <div className="grid grid-cols-3 justify-between gap-4">
                                {LINKS.map(({ title, items }) => (
                                    <ul key={title}>
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="mb-3 font-medium opacity-40"
                                        >
                                            {title}
                                        </Typography>
                                        {items.map((link) => (
                                            <li key={link}>
                                                <Typography
                                                    as="a"
                                                    href="#"
                                                    color="gray"
                                                    className="py-1.5 font-normal transition-colors hover:text-blue-gray-900"
                                                >
                                                    {link}
                                                </Typography>
                                            </li>
                                        ))}
                                    </ul>
                                ))}
                            </div>
                        </div>
                        <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
                            <Typography
                                variant="small"
                                className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
                            >
                                &copy; {currentYear} <a href="https://material-tailwind.com/">Material Tailwind</a>. All
                                Rights Reserved.
                            </Typography>
                            <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
                                <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
                                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path
                                            fill-rule="evenodd"
                                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                </Typography>
                                <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
                                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path
                                            fill-rule="evenodd"
                                            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                </Typography>
                                <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
                                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                    </svg>
                                </Typography>
                                <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
                                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path
                                            fill-rule="evenodd"
                                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                </Typography>
                                <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
                                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path
                                            fill-rule="evenodd"
                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                </Typography>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>

    );
};
export default Header;