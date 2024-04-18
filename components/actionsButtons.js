import React from "react";
import {Button} from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPencil, faEye } from "@fortawesome/free-solid-svg-icons";

export default function Buttons() {
  return (
    <div className="relative flex justify-center items-center gap-1">
						{/* <Dropdown>
							<DropdownTrigger>
								<Button isIconOnly size="sm" variant="light">
									<VerticalDotsIcon className="text-default-300" />
								</Button>
							</DropdownTrigger>
							<DropdownMenu>
								<DropdownItem>View</DropdownItem>
								<DropdownItem>Edit</DropdownItem>
								<DropdownItem>Delete</DropdownItem>
							</DropdownMenu>
						</Dropdown> */}
						<Button 
							// color="warning" 
							size="sm" 
							aria-label="View"
							className="bg-white rounded border border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white"
							isIconOnly 
							variant="faded" 
						>
							<FontAwesomeIcon size="md" icon={faEye} />
						</Button>
						<Button 
							// color="warning" 
							size="sm" 
							aria-label="Edit"
							className="bg-white rounded border border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white"
							isIconOnly 
							variant="faded" 
						>
							<FontAwesomeIcon size="md" icon={faPencil} />
						</Button>
						<Button 
							// color="warning" 
							size="sm" 
							aria-label="Delete"
							className="bg-white rounded border border-tabs-red text-tabs-red hover:bg-tabs-red hover:text-white"
							isIconOnly 
							variant="faded" 
						>
							<FontAwesomeIcon size="md" icon={faTrashCan} />
						</Button>
						
					</div>
  );
}

