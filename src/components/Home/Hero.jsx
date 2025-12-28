import Type from "./Type";
import dp from "../../Assets/dp.jpeg"
import { Span, Div, Flex, FlexColumn, Img } from "../general/BaseComponents";

const Hero = () => {
	return (
		<section id="Home" className="relative bg-top bg-no-repeat min-h-screen flex items-center pt-20"
		>
			<Div className="max-w-7xl text-neutral-100 mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
				<Div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
					<Div className="w-full md:w-[55%] lg:w-[50%] flex flex-col items-center md:items-start text-center md:text-left">
						<h1 className="text-[2.4em] pb-4">
							Hi There! <Span role="img" aria-label="wave">👋🏻</Span>
						</h1>
						<h1 className="text-[2.5em]">
							I'm <strong className="text-heading ml-2">Ubaid Ashraf Wani</strong>
						</h1>
						<Type />
					</Div>
					<Flex className="w-full md:w-[45%] lg:w-[40%] justify-center md:justify-end">
						<Div
							className="
								relative inline-block p-2.5 sm:p-3 rounded-full
								before:content-['']
								before:absolute
								before:-inset-1.5 sm:before:-inset-2
								before:-z-10
								before:rounded-full
								before:bg-[linear-gradient(90deg,#00c8ff,#009dff,#00d0ff,#00aaff)]
								before:bg-size-[300%_300%]
								before:animate-glowing
								before:blur-lg
							"
						>
							<Img
								src={dp}
								alt="Ubaid Wani"
								className="
									rounded-full
									w-48 h-48
									sm:w-56 sm:h-56
									md:w-64 md:h-64
									lg:w-80 lg:h-80
									xl:w-96 xl:h-96
									object-cover
								"
							/>
						</Div>
					</Flex>
				</Div>
			</Div>
		</section>
	);
};

export default Hero;
