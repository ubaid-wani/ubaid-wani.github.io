// import Type from "./Type";
// import dp from "../../Assets/dp.jpeg"
// import { Span, Div, Flex, FlexColumn, Img } from "../general/BaseComponents";

// const Hero = () => {
// 	return (
// 		<section id="Home" className="relative bg-top bg-no-repeat min-h-screen flex items-center pt-20"
// 		>
// 			<Div className="max-w-7xl text-neutral-100 mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
// 				<Div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
// 					<Div className="w-full md:w-[55%] lg:w-[50%] flex flex-col items-center md:items-start text-center md:text-left">
// 						<h1 className="text-[2.4em] pb-4">
// 							Hi There! <Span role="img" aria-label="wave">👋🏻</Span>
// 						</h1>
// 						<h1 className="text-[2.5em]">
// 							I'm <strong className="text-heading ml-2">Ubaid Ashraf Wani</strong>
// 						</h1>
// 						<Type />
// 					</Div>
// 					<Flex className="w-full md:w-[45%] lg:w-[40%] justify-center md:justify-end">
// 						<Div
// 							className="
// 								relative inline-block p-2.5 sm:p-3 rounded-full
// 								before:content-['']
// 								before:absolute
// 								before:-inset-1.5 sm:before:-inset-2
// 								before:-z-10
// 								before:rounded-full
// 								before:bg-[linear-gradient(90deg,#00c8ff,#009dff,#00d0ff,#00aaff)]
// 								before:bg-size-[300%_300%]
// 								before:animate-glowing
// 								before:blur-lg
// 							"
// 						>
// 							<Img
// 								src={dp}
// 								alt="Ubaid Wani"
// 								className="
// 									rounded-full
// 									w-48 h-48
// 									sm:w-56 sm:h-56
// 									md:w-64 md:h-64
// 									lg:w-80 lg:h-80
// 									xl:w-96 xl:h-96
// 									object-cover
// 								"
// 							/>
// 						</Div>
// 					</Flex>
// 				</Div>
// 			</Div>
// 		</section>
// 	);
// };

// export default Hero;

import dp from "../../Assets/dp.jpeg";
import { Span, Div, Flex, FlexColumn, Img } from "../general/BaseComponents.tsx";

const Hero = () => {
	return (
		<section id="Home" className="flex items-center relative min-h-screen bg-grid-hero overflow-hidden pt-20 test_border">
			<div className="max-w-[90%] mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 test_border">
				<div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 test_border">
					{/* LEFT — TEXT */}
					<div className="relative test_border">
						<FlexColumn className="text-[12rem] font-extrabold font-heading text-left leading-none test_border">
							<span className="">
								UBAID
							</span>
							<span className="-mt-13 bg-linear-to-r from-primary-text  via-primary-text to-white/35 bg-clip-text text-transparent bg-transparent">
								ASHRAF
							</span>
							<span className="-mt-13 bg-linear-to-r from-primary-text  via-primary-text to-white/35 bg-clip-text text-transparent bg-transparent">
								WANI
							</span>
						</FlexColumn>
						<Div className="absolute bottom-8 right-0">
							<div className="relative inline-block mt-8">
								<div className="absolute inset-0 translate-x-4 translate-y-4 bg-primary-text"></div>
								<div className="relative bg-white px-14 py-6">
									<span className="text-black text-5xl font-extrabold tracking-tight font-heading">
										FULL-STACK DEVELOPER.
									</span>
								</div>
							</div>
						</Div>
						<p className="mt-10 max-w-lg text-strong leading-relaxed">
							Engineering high-persistence digital realities with clinical precision.
						</p>

						<button className="btn-primary btn-primary-hover mt-14">
							INITIALIZE →
						</button>
					</div>

					{/* RIGHT — VISUAL SPACE */}
					<div className="hidden lg:flex justify-end relative test_border">
						{/* Floating neon dot */}
						<span className="absolute top-1/3 right-24 w-2 h-2 rounded-full bg-neon-500 shadow-[0_0_14px_#b6ff00]"></span>

						{/* Optional image (can remove later) */}
						<div className="neon-ring rounded-full p-3">
							<img
								src={dp}
								alt="Ubaid"
								className="rounded-full w-72 h-72 object-cover bg-black"
							/>
						</div>
					</div>

				</div>
			</div>
		</section>
	);
};

export default Hero;
