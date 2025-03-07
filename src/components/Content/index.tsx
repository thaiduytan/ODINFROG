"use client";

import {
	Box,
	Flex,
	Group,
	Image,
	ScrollArea,
	Stack,
	Text,
	UnstyledButton,
} from "@mantine/core";
import type React from "react";
import classes from "./Content.module.css";
import { useRef, useState } from "react";
import Link from "next/link";
import { gluten } from "@/theme/fonts";

enum Scroll {
	None = "none",
	Top = "top",
	Bottom = "bottom",
}

export const Content: React.FC = () => {
	const viewport = useRef<HTMLDivElement>(null);
	const [isScrolling, setIsScrolling] = useState<Scroll>(Scroll.None);
	const scrollTop = () => {
		const currentPosition = viewport.current!.scrollTop;
		viewport.current!.scrollTo({
			top: currentPosition - 150,
			behavior: "smooth",
		});
	};

	const scrollBottom = () => {
		const currentPosition = viewport.current!.scrollTop;
		viewport.current!.scrollTo({
			top: currentPosition + 150,
			behavior: "smooth",
		});
	};

	return (
		<Flex
			direction={{
				base: "column",
				sm: "row",
			}}
			wrap={{
				base: "unset",
				sm: "nowrap",
			}}
			h="100%"
			w={{
				base: "90%",
				sm: "80%",
				md: "63%",
			}}
			mx={"auto"}
			py={{
				base: 0,
				sm: 20,
			}}
			gap={{ base: 10, sm: 30 }}
		>
			<Stack style={{ overflow: "hidden" }} gap={0}>
				<Box>
					<Image src="/odinfrog.png" w="100%" />
				</Box>
				<Box
					style={{ overflow: "hidden" }}
					pos="relative"
					h="100%"
					w="100%"
				>
					<Box className={classes.odinfog} p={{ base: 0, sm: 10 }}>
						<Image
							src="/odinfrog.png"
							w={{
								base: 150,
								sm: 200,
								md: 271,
							}}
							h={{
								base: "auto",
								sm: 40,
								md: 45,
							}}
						/>
					</Box>
					<Box className={classes.slideWrapper}>
						<ScrollArea
							h={"100%"}
							type="never"
							viewportRef={viewport}
						>
							<Box
								className={classes.frog}
								w={{
									base: 120,
									sm: 200,
									md: 250,
								}}
								h={{
									base: 120,
									sm: 230,
									md: 270,
								}}
							>
								<Image src="/frog.png" w="100%" fit="cover" />
							</Box>

							<Box className={classes.line_yellow} />

							<Box className={classes.block_1}>
								<Image src="/bg_1.png" w="100%" fit="cover" />
							</Box>

							<Box className={classes.block_2}>
								<Image
									src="/bg_2.png"
									w="100%"
									fit="cover"
									className={classes.bg_2}
								/>
								<Image
									src="/bg_3.png"
									w="100%"
									fit="cover"
									className={classes.bg_3}
								/>
							</Box>

							<Box className={classes.block_3}>
								<Image
									pos="relative"
									src="/bg_4.png"
									w="100%"
									fit="cover"
									style={{ zIndex: 16 }}
								/>
							</Box>

							<Box className={classes.block_4}>
								<Image src="/bg_5.png" w="100%" fit="cover" />
								<Image
									src="/bg_6.png"
									w="100%"
									fit="cover"
									className={classes.bg_6}
								/>
							</Box>

							<Box className={classes.block_5}>
								<Image src="/bg_7.png" w="100%" fit="cover" />
							</Box>

							<Box className={classes.block_6}>
								<Image src="/bg_8.png" w="100%" fit="cover" />
							</Box>

							<Box className={classes.block_7}>
								<Image src="/bg_10.png" w="100%" fit="cover" />
							</Box>

							<Box className={classes.block_8}>
								<Image src="/bg_11.png" w="100%" fit="cover" />
							</Box>

							<Box className={classes.block_9}>
								<Image
									src="/bg_12.png"
									w="100%"
									fit="cover"
									className={classes.bg_12}
								/>
								<Image
									src="/bg_12_1.png"
									w="100%"
									fit="cover"
									className={classes.bg_12_1}
								/>
							</Box>

							<Box className={classes.block_10}>
								<Image
									src="/bg_13.png"
									w="100%"
									fit="cover"
									className={classes.bg_13}
								/>
								<Image
									src="/bg_14.png"
									w="100%"
									fit="cover"
									className={classes.bg_14}
								/>
							</Box>

							<Box className={classes.block_11}>
								<Image src="/bg_15.png" w="100%" fit="cover" />
							</Box>

							<Box className={classes.block_12}>
								<Image src="/bg_16.png" w="100%" fit="cover" />
							</Box>

							<Box className={classes.block_13}>
								<Image src="/bg_17.png" w="100%" fit="cover" />
							</Box>

							<Box className={classes.block_14}>
								<Image src="/bg_18.png" w="100%" fit="cover" />
							</Box>

							<Box className={classes.block_15}>
								<Image src="/bg_19.png" w="100%" fit="cover" />
							</Box>

							<Box className={classes.block_16}>
								<Image
									src="/bg_20.png"
									w="100%"
									fit="cover"
									className={classes.bg_20}
								/>
								<Image src="/bg_21.png" w="100%" fit="cover" />
							</Box>

							<Box className={classes.block_17}>
								<Image
									src="/bg_22_0.png"
									w="100%"
									fit="cover"
								/>
								<Image
									src="/bg_22_1.png"
									w="100%"
									fit="cover"
									className={classes.bg_22_1}
								/>
							</Box>

							<Box className={classes.block_18}>
								<Image
									src="/bg_23_0.png"
									w="100%"
									fit="cover"
									className={classes.bg_23_0}
								/>
								<Image
									src="/bg_23_1.png"
									w="100%"
									fit="cover"
								/>
							</Box>

							<Box className={classes.block_19}>
								<Image src="/bg_25.png" w="100%" fit="cover" />
							</Box>

							<Box className={classes.block_20}>
								<Image src="/bg_26.png" w="100%" fit="cover" />
							</Box>

							<Box className={classes.block_21}>
								<Image src="/bg_27.png" w="100%" fit="cover" />
							</Box>

							<Box className={classes.block_22}>
								<Image src="/bg_28.png" w="100%" fit="cover" />
							</Box>

							<Box className={classes.block_23}>
								<Image src="/bg_29.png" w="100%" fit="cover" />
							</Box>

							<Box className={classes.block_24}>
								<Image
									src="/bg_30_0.png"
									w="100%"
									fit="cover"
								/>
								<Image
									src="/bg_30_1.png"
									w="100%"
									fit="cover"
									className={classes.bg_30_1}
								/>
							</Box>

							<Box className={classes.block_25}>
								<Image
									src="/bg_31_0.png"
									w="100%"
									fit="cover"
								/>
								<Image
									src="/bg_31_1.png"
									w="100%"
									fit="cover"
									className={classes.bg_31_1}
								/>
							</Box>

							<Box className={classes.block_26}>
								<Image
									src="/bg_32.png"
									w="100%"
									fit="cover"
									className={classes.bg_32}
								/>
							</Box>

							<Box className={classes.block_27}>
								<Image
									src="/bg_33.png"
									w="100%"
									fit="cover"
									className={classes.bg_33}
								/>
							</Box>

							<Box className={classes.block_28}>
								<Image
									src="/bg_34_0.png"
									w="100%"
									fit="cover"
								/>
								<Image
									src="/bg_34_1.png"
									w="100%"
									fit="cover"
									className={classes.bg_34_1}
								/>
							</Box>

							<Box className={classes.block_29}>
								<Image
									src="/bg_35_0.png"
									w="100%"
									fit="cover"
								/>
								<Image
									src="/bg_35_1.png"
									w="100%"
									fit="cover"
									className={classes.bg_35_1}
								/>
							</Box>

							<Box className={classes.block_30} pos="relative">
								<Image
									src="/bg_36_0.png"
									w="100%"
									fit="cover"
								/>
								<Image
									src="/bg_36_1.png"
									w="100%"
									fit="cover"
									className={classes.bg_36_1}
								/>
								<Box
									style={{
										zIndex: 20,
									}}
									component={Link}
									href="/"
									pos="absolute"
									left={"31%"}
									top={"86%"}
								>
									<Image
										src="/buydinnow.png"
										w={{base: 93 ,sm: 123, md: 177 }}
										h={{base: 58,sm: 75, md: 107 }}
										fit="fill"
									/>
								</Box>
								<Box
									style={{
										zIndex: 20,
									}}
									component={Link}
									href="/"
									pos="absolute"
									right={"23%"}
									top={"108%"}
								>
									<Image
										src="/socical_x.png"
										w={{base: 18, sm: 25, md: 35 }}
										h={{base: 18, sm: 30, md: 40 }}
										fit="fill"
									/>
								</Box>
							</Box>

							<Box className={classes.block_31}>
								<Image src="/bg_37.png" w="100%" fit="cover" />
							</Box>

							<Box className={classes.block_32}>
								<Image src="/bg_38.png" w="100%" fit="cover" />

								<Text
									className={gluten.className}
									style={{
										zIndex: 100,
										left: "50%",
										transform: "translateX(-50%)",
									}}
									component={Link}
									href="/"
									pos="absolute"
									bottom={0}
									fw={500}
									fz={{ base: 12, md: 16 }}
									tt="uppercase"
								>
									CREATED BY @ODIN
								</Text>
							</Box>
						</ScrollArea>
					</Box>
				</Box>
			</Stack>
			<Flex
				direction={{
					base: "row",
					sm: "column",
				}}
				justify={{
					base: "center",
					sm: "end",
				}}
				h="100%"
				gap={25}
			>
				<UnstyledButton
					className={classes.buttonScroll}
					w={{ base: 60, sm: 86 }}
					h={{ base: 80, sm: 128 }}
					p={{ base: 20 }}
					onClick={scrollTop}
					onMouseDown={() => setIsScrolling(Scroll.Top)}
					onMouseUp={() => setIsScrolling(Scroll.None)}
					mod={{
						active: isScrolling === Scroll.Top,
					}}
				>
					<Group className={classes.buttonScroll_Top}>
						<Text>
							<svg
								width="100%"
								height="100%"
								viewBox="0 0 54 55"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M24.6135 53.4485C25.9315 54.7665 28.0685 54.7665 29.3865 53.4485L53.0115 29.8235C54.3295 28.5055 54.3295 26.3685 53.0115 25.0505L29.3865 1.42552C28.0685 0.107506 25.9315 0.107506 24.6135 1.42552C23.2955 2.74354 23.2955 4.88047 24.6135 6.1985L42.477 24.062L3.375 24.062C1.51104 24.062 0 25.5731 0 27.437C0 29.301 1.51104 30.812 3.375 30.812L42.477 30.812L24.6135 48.6755C23.2955 49.9935 23.2955 52.1305 24.6135 53.4485Z"
									fill="currentColor"
								></path>
							</svg>
						</Text>
					</Group>
				</UnstyledButton>
				<UnstyledButton
					className={classes.buttonScroll}
					w={{ base: 60, sm: 86 }}
					h={{ base: 80, sm: 128 }}
					p={{ base: 20 }}
					onClick={scrollBottom}
					onMouseDown={() => setIsScrolling(Scroll.Bottom)}
					onMouseUp={() => setIsScrolling(Scroll.None)}
					mod={{
						active: isScrolling === Scroll.Bottom,
					}}
				>
					<Text className={classes.buttonScroll_Bottom}>
						<svg
							width="100%"
							height="100%"
							viewBox="0 0 54 55"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M24.6135 53.4485C25.9315 54.7665 28.0685 54.7665 29.3865 53.4485L53.0115 29.8235C54.3295 28.5055 54.3295 26.3685 53.0115 25.0505L29.3865 1.42552C28.0685 0.107506 25.9315 0.107506 24.6135 1.42552C23.2955 2.74354 23.2955 4.88047 24.6135 6.1985L42.477 24.062L3.375 24.062C1.51104 24.062 0 25.5731 0 27.437C0 29.301 1.51104 30.812 3.375 30.812L42.477 30.812L24.6135 48.6755C23.2955 49.9935 23.2955 52.1305 24.6135 53.4485Z"
								fill="currentColor"
							></path>
						</svg>
					</Text>
				</UnstyledButton>
			</Flex>
		</Flex>
	);
};
