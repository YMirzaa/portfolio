"use client";

import { motion, useScroll, useTransform } from "framer-motion";

import { useRef } from "react";

const PortfolioPage = () => {
	const ref = useRef() as React.MutableRefObject<HTMLDivElement>;
	const { scrollYProgress } = useScroll({ container: ref });

	// Value between 0 and 1, 0 to 100% are the transformation values

	const x = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

	return (
		<motion.div
			className='h-full'
			initial={{ y: "-200vh" }}
			animate={{ y: "0%" }}
			transition={{ duration: 1 }}
		>
			<div className='h-[600vh] relative' ref={ref}>
				<div className='w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl'>
					My Works
				</div>
				<div className='sticky top-0 flex h-screen gap-4 items-center'></div>
			</div>
		</motion.div>
	);
};

export default PortfolioPage;

