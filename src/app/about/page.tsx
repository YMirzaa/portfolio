"use client";
import Brain from "@/components/brain";
import { motion, useInView, useScroll } from "framer-motion";
import { useRef } from "react";

const AboutPage = () => {
	const containerRef = useRef() as React.MutableRefObject<HTMLDivElement>;

	const { scrollYProgress } = useScroll({ container: containerRef });

	const skillRef = useRef() as React.MutableRefObject<HTMLDivElement>;
	const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

	const experienceRef = useRef() as React.MutableRefObject<HTMLDivElement>;
	const isExperienceRefInView = useInView(experienceRef, {
		margin: "-100px",
	});

	return (
		<motion.div
			className='h-full'
			initial={{ y: "-200vh" }}
			animate={{ y: "0%" }}
			transition={{ duration: 1 }}
		>
			{/* CONTAINER */}
			<div className='h-full overflow-scroll lg:flex' ref={containerRef}>
				{/* TEXT CONTAINER */}
				<div className='p-4 sm:p-8 md:p-12 lg:p-20 xl:p-28 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 '>
					{/* BIOGRAPHY CONTAINER */}
					<div className='flex flex-col gap-12 justify-center'>
						{/* BIOGRAPHY TITLE */}
						<h1 className='font-bold text-2xl'>BIOGRAPHY</h1>
						{/* BIOGRAPHY DESC */}
						<p className='text-lg pb-24'>
							Hey there, I{"'"}m Yusuf Mirza Altay. Full-Stack
							development is my thing. I graduated from Middle
							East Technical University in February 2024 with a
							GPA of 3.02, and since then, I{"'"}ve been diving
							deep into Javascript/React for frontend and
							Java/Spring for backend. But it{"'"}s not just about
							the tech; I{"'"}m all about bringing real enthusiasm
							to every project, aiming for top-notch results. When
							I{"'"}m not coding, you{"'"}ll find me out on the
							open sea, either free diving or sailing. It{"'"}s
							where I find my groove, you see? Keeps me sharp and
							ready to tackle whatever comes my way in the dev
							world.{" "}
						</p>

						{/* BIOGRAPHY SCROLL SVG */}
						<motion.svg
							initial={{ opacity: 0.2, y: 0 }}
							animate={{ opacity: 1, y: "10px" }}
							transition={{
								repeat: Infinity,
								duration: 3,
								ease: "easeInOut",
							}}
							viewBox='0 0 24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
							width={50}
							height={50}
						>
							<path
								d='M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z'
								stroke='#000000'
								strokeWidth='1'
							></path>
							<path
								d='M12 6V14'
								stroke='#000000'
								strokeWidth='1'
							></path>
							<path
								d='M15 11L12 14L9 11'
								stroke='#000000'
								strokeWidth='1'
							></path>
						</motion.svg>
					</div>
					{/* SKILLS CONTAINER */}
					<div
						className='flex flex-col gap-12 justify-center'
						ref={skillRef}
					>
						{/* SKILL TITLE */}
						<motion.h1
							initial={{ x: "-300px" }}
							animate={isSkillRefInView ? { x: 0 } : {}}
							transition={{ delay: 0.2 }}
							className='font-bold text-2xl'
						>
							SKILLS
						</motion.h1>
						{/* SKILL LIST */}
						<motion.div
							initial={{ x: "-300px" }}
							animate={isSkillRefInView ? { x: 0 } : {}}
							className='flex gap-4 flex-wrap pb-48'
						>
							<div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
								JavaScript
							</div>
							<div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
								TypeScript
							</div>
							<div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
								React.js
							</div>
							<div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
								Next.js
							</div>

							<div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
								Tailwind CSS
							</div>
							<div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
								MongoDB
							</div>
							<div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
								PostgreSQL
							</div>
							<div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
								Node.js
							</div>
							<div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
								Express.js
							</div>
							<div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
								Java
							</div>
							<div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
								Spring Boot
							</div>
							<div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
								AWS S3
							</div>
							<div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
								Docker
							</div>
							<div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
								Git
							</div>
							<div className='rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
								Linux
							</div>
						</motion.div>
					</div>
				</div>
				{/* SVG CONTAINER */}
				<div className='hidden lg:block w-1/3 sticky top-0 z-30 '>
					<Brain scrollYProgress={scrollYProgress} />
				</div>
			</div>
		</motion.div>
	);
};

export default AboutPage;

