import React from "react";
import Image from "next/image";
// import { FaBars } from "react-icons/fa";
import styles from '../Logo/Logo.module.css';
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Logo = () => {
    return (
        <>
                <Link href="/">
                    <Image 
                    width={140}
                    height={65}    
                    src='/img/voda-logo.png'
                    alt="Logo Voda"
                    />
                </Link>
                <Link href="#" className={`transition-all duration-200 ease-in-out ${styles.logoBar}`}>
                    <FontAwesomeIcon className={`w-6`}  icon={faBars}  />
                </Link>
        </>
        
        
    )
}

export default Logo;