"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ link }: any) => {
	const pathname = usePathname();
	return (
		<Link
			href={link.url}
			className={`rounded p-1 ${
				pathname === link.url && "bg-black text-white"
			} `}
		>
			{link.name}
		</Link>
	);
};

export default NavLink;

