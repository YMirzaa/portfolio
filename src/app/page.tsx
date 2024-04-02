"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
	return (
		<motion.div
			className='h-full'
			initial={{ y: "-200vh" }}
			animate={{ y: "0%" }}
			transition={{ duration: 0.6 }}
		>
			<main className='h-full flex gap-4 flex-col px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 lg:flex-row lg:gap-16'>
				{/* IMAGE CONTAINER */}
				<div className='h-1/2 lg:h-full lg:w-1/2 relative'>
					<Image
						src={"/pp-modified.png"}
						alt='Yusuf Mirza Altay'
						fill
						className='object-contain'
					/>
				</div>
				{/* TEXT CONTAINER */}
				<div className='h-1/2 flex flex-col gap-4 items-center justify-center lg:h-full lg:w-1/2'>
					{/* TITLE */}
					<h1 className='text-3xl lg:text-6xl font-black'>
						Aspiring FullStack Java / React Developer
					</h1>
					{/* DESC */}
					<p className='md:text-xl'>
						Welcome to my portfolio! I{"'"}m eager to showcase my
						creativity and dedication through a collection of
						projects that highlight my skills and potential. Dive in
						to explore the innovative solutions and designs that
						represent the beginning of my journey in the industry.
					</p>
					<div className='md:w-full flex gap-4'>
						<button className='p-4 rounded-lg ring-1 ring-black bg-black text-white font-bold'>
							View My Work
						</button>
						<button className='p-4 rounded-lg ring-1 ring-black bg-white text-black font-bold'>
							Contact Me
						</button>
					</div>
				</div>
			</main>
		</motion.div>
	);
}

