"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./navLink";

const links = [
	{ url: "/", name: "Home" },
	{ url: "/about", name: "About" },
	{ url: "/projects", name: "Projects" },
	{ url: "/contact", name: "Contact" },
];

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const menuIconAnimations = {
		topVariant: {
			closed: {
				rotate: 0,
			},
			opened: {
				rotate: 45,
				backgroundColor: "rgb(255,255,255)",
			},
		},
		centerVariant: {
			closed: {
				opacity: 1,
			},
			opened: {
				opacity: 0,
			},
		},
		bottomVariant: {
			closed: {
				rotate: 0,
			},
			opened: {
				rotate: -45,
				backgroundColor: "rgb(255,255,255)",
			},
		},
	};
	const menuAnimation = {
		closed: {
			x: "100vw", // This is the position, it will be at the end of the screen
		},
		opened: {
			x: 0, // This is the position, it will be at the start of the screen
			transition: {
				when: "beforeChildren",
				staggerChildren: 0.15,
				duration: 0.3,
			},
		},
	};

	const menuLinkAnimations = {
		closed: {
			x: -50,
			opacity: 0,
		},
		opened: {
			x: 0,
			opacity: 1,
		},
	};

	return (
		<nav className='h-full flex justify-between items-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 '>
			<div className='hidden md:flex gap-4 w-1/3'>
				{links.map((link) => (
					<NavLink key={link.url} link={link} />
				))}
			</div>
			{/* LOGO */}
			<div className='md:hidden lg:flex justify-center w-1/3'>
				<Link
					href='/'
					className='text-nowrap text-lg bg-black rounded-md p-2 font-semibold '
				>
					<span className='text-white mr-1'> Yusuf Mirza Altay</span>
					<span className='rounded bg-white p-1'>.dev</span>
				</Link>
			</div>

			{/* Links Social Media */}
			<div className='hidden md:flex justify-center gap-4 w-1/3'>
				<Link href='https://www.linkedin.com/in/yusuf-mirza-altay-6a6b2b1b0/'>
					<Image
						src='/linkedin.png'
						alt='linkedin'
						width={30}
						height={30}
					/>
				</Link>
				<Link href='https://github.com/YMirzaa'>
					<Image
						src='/github.png'
						alt='github'
						width={30}
						height={30}
					/>
				</Link>
			</div>
			{/* Responsive Menu  */}
			<button
				className='w-10 h-8 flex flex-col justify-between md:hidden z-50 relative'
				onClick={() => setIsOpen(!isOpen)}
			>
				<motion.div
					variants={menuIconAnimations.topVariant}
					animate={isOpen ? "opened" : "closed"}
					className='w-10 h-1 bg-black flex flex-col origin-left'
				>
					{" "}
				</motion.div>
				<motion.div
					variants={menuIconAnimations.centerVariant}
					animate={isOpen ? "opened" : "closed"}
					className='w-10 h-1 bg-black flex flex-col'
				>
					{" "}
				</motion.div>
				<motion.div
					variants={menuIconAnimations.bottomVariant}
					animate={isOpen ? "opened" : "closed"}
					className='w-10 h-1 bg-black flex flex-col origin-left'
				>
					{" "}
				</motion.div>
			</button>
			{/* MENU LIST */}
			{isOpen && (
				<motion.div
					variants={menuAnimation}
					initial='closed'
					animate='opened'
					className='absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40'
				>
					{links.map((link) => (
						<motion.div
							variants={menuLinkAnimations} // When animation is triggered, it will animate the children, so no need to write initial or closed.
							key={link.url}
						>
							<Link href={link.url} className='  '>
								{link.name}
							</Link>
						</motion.div>
					))}
				</motion.div>
			)}
		</nav>
	);
};

export default Navbar;

