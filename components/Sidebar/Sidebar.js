'use client'
import { useState } from 'react'
import styles from './Sidebar.module.css';
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faTruck, faTableCells } from "@fortawesome/free-solid-svg-icons";
import { color } from 'framer-motion';


const Sidebar = () => {

    const router = usePathname()
    console.log("router",router)
    


    return (
        <div className={``}> {/* seria el ul */}
            <div> {/* seria el li */}
                <Link href={'/'} className={` ${router == "/" ? "active" : ""} ${styles.itemSidebar} transition-all duration-200 ease-in-out flex items-center w-full relative py-0 px-3`}>
                        <FontAwesomeIcon size="" className={`mr-1.5 h-5`} icon={faHouse}  />
                        <span className={`text-sm ${styles.textSidebar}`}>Inicio</span>                    
                </Link>
            </div>
            <div > {/* seria el li */}
                <Link href={'/providers'} className={`${router == "/providers" ? "active" : ""} ${styles.itemSidebar} transition-all duration-200 ease-in-out flex items-center w-full relative py-0 px-3 `}>
                <FontAwesomeIcon icon={faTruck} size="" flip="" className={`mr-1.5 h-5`} />
                    <span className={`text-sm ${styles.textSidebar}`}>Proveedores</span>
                </Link>
            </div>
            <div > {/* seria el li */}
                <Link href={'/articles'} className={` ${router == "/articles" ? "active" : ""} ${styles.itemSidebar} transition-all duration-200 ease-in-out flex items-center w-full relative py-0 px-3 `}>
                    <FontAwesomeIcon icon={faTableCells} size="" flip="" className={`mr-1.5 h-5`} />
                    <span className={`text-sm ${styles.textSidebar}`}>Artículos</span>
                </Link>
            </div>
        </div>
    )
}

export default Sidebar;