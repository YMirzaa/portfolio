"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { useRef } from "react";

const items = [
	{
		id: 1,
		color: "from-red-300 to-blue-300",
		title: "AI Platform",
		desc: "Created an AI Platform to generate image, video, text, code, and music which is connected to Open AI's API.",
		img: "/aiDashboard.png",
		link: "https://github.com/YMirzaa/AI-Platform",
	},
	{
		id: 2,
		color: "from-blue-300 to-violet-300",
		title: "Employee Management Dashboard",
		desc: "I developed an Employee Management Dashboard for Internship Project. Used Spring, Next.js and AWS S3.",
		img: "/employeeDashboard.png",
		link: "https://github.com/YMirzaa/Employee-Management-Dashboard",
	},
	{
		id: 3,
		color: "from-violet-300 to-purple-300",
		title: "Nutrikom",
		desc: "Together with my friend, we created an application for the daily routines of dietitians through digitization.",
		img: "/templatesDetails2.png",
		private: true,
		link: "https://github.com/Nutrikom/web-frontend",
	},
	{
		id: 4,
		color: "from-purple-300 to-red-300",
		title: "Chat Application With Socket",
		desc: "A chat application with Java, Spring, and React.js techonologies. Used STOMP.js for the socket connection.",
		img: "/project.jpg",
		link: "https://github.com/YMirzaa/Socket-Chat",
	},
	{
		id: 5,
		color: "from-red-300 to-blue-300",
		title: "REVO Mobile App",
		desc: "My graduation endeavor. I steered the development and upkeep of a mobile app with a blockchain-based vote counting mechanism..",
		img: "/project.jpg",
		link: "https://senior.ceng.metu.edu.tr/2023/revo/",
	},
	{
		id: 6,
		color: "from-blue-300 to-violet-300",
		title: "Search Engine Caching",
		desc: "Made a caching system for a search engine. Researched the static term result caching in term-based partition with a friend.",
		img: "/project.jpg",
		link: "https://github.com/YMirzaa/Search-Engine-CENG778",
	},
];

const PortfolioPage = () => {
	const ref = useRef() as React.MutableRefObject<HTMLDivElement>;
	const { scrollYProgress } = useScroll({ target: ref });

	// Value between 0 and 1, 0 to 100% are the transformation values

	const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"]);

	return (
		<motion.div
			className='h-full'
			initial={{ y: "-200vh" }}
			animate={{ y: "0%" }}
			transition={{ duration: 1 }}
		>
			<div className='h-[900vh] relative' ref={ref}>
				<div className='w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-center text-8xl'>
					My Works
				</div>
				<div className='sticky top-0 flex h-screen gap-4 items-center overflow-hidden'>
					<motion.div style={{ x }} className='flex'>
						{/* Extra div for animation */}
						<div className='h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300' />
						{items.map((item) => (
							<div
								key={item.id}
								className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color} `}
							>
								<div className='flex flex-col gap-8 text-white'>
									<h1 className='text-xl font-bold md:text-4xl lg:text-6xl xl:text-7xl'>
										{item.title}
									</h1>
									<div className='relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[250px] xl:w-[600px] xl:h-[320px]'>
										<Image
											src={item.img}
											alt={item.title}
											layout='fill'
											objectFit='contain'
										/>
									</div>
									<p className='w-80 font-bold  md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]'>
										{item.desc}
									</p>
									<div className='flex justify-start gap-4'>
										{/* <Link href={item.link}>
											<button className='p-2 text-sm md:p-4 md:text-md lg:p-6 lg:text-lg bg-white text-gray-600 font-semibold rounded'>
												See Demo
											</button>
										</Link> */}
										{!item.private && (
											<Link href={item.link}>
												<button className='p-2 text-sm md:p-4 md:text-md lg:p-6 lg:text-lg bg-white text-gray-600 font-semibold rounded'>
													Check Source Code
												</button>
											</Link>
										)}
									</div>
								</div>
							</div>
						))}
					</motion.div>
				</div>
			</div>
		</motion.div>
	);
};

export default PortfolioPage;

