"use client"
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import {Button} from "@nextui-org/button";
import Graphics from "@/components/Graphics";
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/react";


export default function Home() {
	return (
		<div>
			<Graphics />
		</div>
	);
}
