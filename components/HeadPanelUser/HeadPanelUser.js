"use client"
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem, Button, User } from "@nextui-org/react";
import {Avatar} from "@nextui-org/react";
import styles from './HeadPanelUser.module.css';


const HeadPanelUser = () => {
    return (
        <div className="pe-5">
            <Dropdown
                // showArrow
                radius="none"
                classNames={{
                    base: "before:bg-default-200 relative translate-y-3 w-60 border border-solid border-primary-blue", // change arrow background
                    content: "shadow-none p-0 border-divider bg-background",
                }}
            >
                <DropdownTrigger>
                    {/* <Button variant="ghost" disableRipple>Open Menu</Button> */}
                    <div className="flex gap-4 items-center">
                        <Avatar showFallback src='https://images.unsplash.com/broken'
                            classNames={{
                                base: "bg-white w-8 h-8",
                                icon: "text-primary-blue",
                   
                            }}/>
                        {/* <Avatar showFallback name='Jane' src='https://images.unsplash.com/broken' />
                        <Avatar name='Joe' src='https://images.unsplash.com/broken' /> */}
                    </div>
                </DropdownTrigger>
                <DropdownMenu
                    aria-label="Custom item styles"
                    disabledKeys={["profile"]}
                    className={`p-3`}
                    itemClasses={{
                        base: [
                            "rounded-md",
                            "text-default-500",
                            "transition-opacity",
                            "data-[hover=true]:text-foreground",
                            "data-[hover=true]:bg-default-100",
                            "dark:data-[hover=true]:bg-default-50",
                            "data-[selectable=true]:focus:bg-default-50",
                            "data-[pressed=true]:opacity-70",
                            "data-[focus-visible=true]:ring-default-500",
                        ],
                    }}
                >
                    <DropdownSection aria-label="Profile & Actions" showDivider>
                        <DropdownItem
                            isReadOnly
                            key="profile"
                            className="h-14 gap-2 opacity-100"
                        >
                            <User
                                name="Franco Gatica"
                                description="@francogaticadev"
                                classNames={{
                                    name: "text-default-600",
                                    description: "text-default-500",
                                    isDisabled: true
                                }}
                                avatarProps={{
                                    size: "sm",
                                    src: "https://avatars.githubusercontent.com/u/30373425?v=4",
                                }}
                            />
                        </DropdownItem>
                        {/* <DropdownItem key="dashboard">
                            Dashboard
                        </DropdownItem>
                        <DropdownItem key="settings">Settings</DropdownItem> */}
                    </DropdownSection>

                    <DropdownSection aria-label="Help & Feedback">
                        {/* <DropdownItem key="help_and_feedback">
                            Help & Feedback
                        </DropdownItem> */}
                        <DropdownItem className={`text-primary-blue`} key="logout">Cerrar sesión</DropdownItem>
                    </DropdownSection>
                </DropdownMenu>
            </Dropdown>
        </div>
    )
}

export default HeadPanelUser;