"use client";

import { motion } from "framer-motion";

const TestPage = () => {
	return (
		<div className='h-full flex items-center justify-center'>
			<motion.div
				className='h-96 w-96 bg-red-400 rounded'
				initial={{ x: -100 }}
				animate={{ x: 500 }}
			>
				Test Page
			</motion.div>
		</div>
	);
};

export default TestPage;

