"use client"
import { title } from "@/components/primitives";
import React from "react";
import {Tabs, Tab, Card, CardBody} from "@nextui-org/react"; 
import styles from './Article.module.css';

export default function ArticlePage() {

	const variant = "underlined";
	const [selected, setSelected] = React.useState("photos");

	return (
            
			<div className="flex w-full flex-col p-5">
				<Tabs 
					aria-label="Options" 
					key={variant} 
					variant={variant}
                    
				 	classNames={{
								tabList: "gap-0 w-full relative rounded-none p-0 border-b border-divider", //quite gap-6
								cursor: "w-full bg-transparent h-1",
								tab: "max-w-fit h-12 px-0", // border-b-3 border-tabs-grey-one
								tabContent: "group-data-[selected=true]:border-b-3 group-data-[selected=true]:border-primary-blue group-data-[selected=true]:text-primary-blue text-tabs-grey-one font-normal p-3 border-b-3 border-tabs-grey-one"
                                
				  	}}
				>
					<Tab 
                        key="photos" 
                        title="Materiales"
                        
                    >
					<Card>
						<CardBody>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
						</CardBody>
					</Card>  
					</Tab>
					<Tab key="music" title="Artículos Compuestos">
					<Card>
						<CardBody>
						Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
						</CardBody>
					</Card>  
					</Tab>
				</Tabs>
    		</div>
		
	);
}