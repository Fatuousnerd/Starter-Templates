import { SiGithub } from "@icons-pack/react-simple-icons";
import { motion } from "framer-motion";
import { Code, Moon, Sun } from "lucide-react";
import { useTheme } from "../utils/ThemeContext";

const Main = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<div className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden bg-(--MainBg) text-(--MainText) transition-colors duration-500">
			{/* Background Elements */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-(--HText) opacity-[0.05] blur-[100px]" />
				<div className="absolute top-[40%] right-[-10%] w-[40%] h-[40%] rounded-full bg-(--HText) opacity-[0.03] blur-[100px]" />
			</div>

			{/* Theme Toggle */}
			<motion.button
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.2 }}
				onClick={toggleTheme}
				className="absolute top-6 right-6 p-2 rounded-full hover:bg-(--SecBg) transition-all duration-300 group"
				aria-label="Toggle Theme"
			>
				{theme === "dark" ? (
					<Sun className="text-(--MainText) group-hover:text-(--HText) transition-colors" />
				) : (
					<Moon className="text-(--MainText) group-hover:text-(--HText) transition-colors" />
				)}
			</motion.button>

			{/* Main Content */}
			<motion.div
				initial={{ opacity: 0, scale: 0.9 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.8, ease: "easeOut" }}
				className="z-10 flex flex-col items-center gap-8 text-center px-4"
			>
				{/* Logo */}
				<motion.div
					animate={{ y: [0, -15, 0] }}
					transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
					className="relative"
				>
					<div className="absolute inset-0 bg-(--HText) blur-2xl opacity-20 rounded-full" />
					<img
						src="/vite.svg"
						alt="Vite Logo"
						className="w-32 h-32 md:w-40 md:h-40 relative z-10 drop-shadow-2xl"
					/>
				</motion.div>

				{/* Text Content */}
				<div className="space-y-4 max-w-2xl">
					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.3 }}
						className="text-4xl md:text-6xl font-black tracking-tight"
					>
						Vite-React <span className="text-(--HText)">Starter</span>
					</motion.h1>

					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.4 }}
						className="text-lg md:text-xl text-(--SecText) font-light leading-relaxed"
					>
						A clear, opinionated, and high-performance foundation for your next
						web application. Pre-configured with{" "}
						<span className="font-semibold text-(--MainText)">TypeScript</span>,{" "}
						<span className="font-semibold text-(--MainText)">
							Tailwind CSS
						</span>
						, and{" "}
						<span className="font-semibold text-(--MainText)">
							Framer Motion
						</span>
						.
					</motion.p>
				</div>

				{/* Action Buttons */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.5 }}
					className="flex flex-col sm:flex-row gap-4 mt-4"
				>
					<a
						href="https://github.com/Fatuousnerd"
						target="_blank"
						rel="noopener noreferrer"
						className="group flex items-center justify-center gap-2 px-6 py-3 bg-(--MainText) text-(--MainBg) rounded-lg font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
					>
						<SiGithub fontSize="small" />
						<span>Fatuousnerd</span>
					</a>

					<a
						href="https://github.com/Fatuousnerd/vite-react"
						target="_blank"
						rel="noopener noreferrer"
						className="group flex items-center justify-center gap-2 px-6 py-3 border-2 border-(--MainText) text-(--MainText) rounded-lg font-bold hover:bg-(--MainText) hover:text-(--MainBg) transition-all duration-300"
					>
						<Code fontSize="small" />
						<span>View Repository</span>
					</a>
				</motion.div>
			</motion.div>

			{/* Footer / Tech Stack Indicators */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1, duration: 1 }}
				className="absolute bottom-8 flex flex-wrap justify-center gap-6 text-(--SecText) text-sm font-medium tracking-widest uppercase"
			>
				<span>Vite</span>
				<span className="text-(--HText)">•</span>
				<span>React</span>
				<span className="text-(--HText)">•</span>
				<span>TypeScript</span>
				<span className="text-(--HText)">•</span>
				<span>Tailwind</span>
			</motion.div>
		</div>
	);
};

export default Main;
