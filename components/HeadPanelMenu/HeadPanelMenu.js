import React from "react";
// import { FaHistory } from "react-icons/fa";
// import { BsFileEarmarkText } from "react-icons/bs";
// import { MdOutlineAttachMoney } from "react-icons/md";
// import { RiCalendarCheckFill } from "react-icons/ri";
// import { RiKey2Fill } from "react-icons/ri";
// import '../app/styles.css';
import Link from "next/link";
import styles from './HeadPanelMenu.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClockRotateLeft, faFileLines, faDollarSign, faCalendarCheck, faKey } from "@fortawesome/free-solid-svg-icons";


const HeadPanelMenu = () => {
    return (
        <div className="flex items-center">
                <Link href={'#'} style={{textDecoration: 'none'}} className={`flex transition-all duration-200 ease-in-out ${styles.linkHead}`}>
                    <div className={`grid`}>
                        <FontAwesomeIcon className={`w-6 h-8`} icon={faClockRotateLeft} />
                        <span className={`font-light mt-1 ${styles.textHead}`}>Historial</span>
                    </div>
                </Link>
                <Link href={'#'} style={{textDecoration: 'none'}} className={`flex transition-all duration-200 ease-in-out ${styles.linkHead}`}>
                    <div className={`grid ${styles.innerLink}`}>
                        {/* <BsFileEarmarkText className={`d-flex text-center fs-3 ${styles.iconHead}`}/> */}
                        <FontAwesomeIcon className={`w-5 h-8`} icon={faFileLines} />
                        <span className={`font-light mt-1 ${styles.textHead}`}>Reportes</span>
                    </div>
                </Link>
                <Link href={'#'} style={{textDecoration: 'none'}} className={`flex transition-all duration-200 ease-in-out ${styles.linkHead}`}>
                    <div className={`grid ${styles.innerLink}`}>
                        {/* <MdOutlineAttachMoney className={`d-flex text-center fs-3 ${styles.iconHead}`}/> */}
                        <FontAwesomeIcon className={`w-4 h-8`} icon={faDollarSign} />
                        <span className={`font-light mt-1 ${styles.textHead}`}>Ventas</span>
                    </div>
                </Link>
                <Link href={'#'} style={{textDecoration: 'none'}} className={`flex transition-all duration-200 ease-in-out ${styles.linkHead}`}>
                    <div className={`grid ${styles.innerLink}`}>
                        {/* <RiCalendarCheckFill className={`d-flex text-center fs-3 ${styles.iconHead}`}/> */}
                        <FontAwesomeIcon className={`w-6 h-8`} icon={faCalendarCheck} />
                        <span className={`font-light mt-1 ${styles.textHead}`}>Turnos</span>
                    </div>
                </Link>
                <Link href={'#'} style={{textDecoration: 'none'}} className={`flex transition-all duration-200 ease-in-out ${styles.linkHead}`}>
                    <div className={`grid ${styles.innerLink}`}>
                        {/* <RiKey2Fill className={`d-flex text-center fs-3 ${styles.iconHead}`}/> */}
                        <FontAwesomeIcon className={`w-6 h-8`} icon={faKey} />
                        <span className={`font-light mt-1 ${styles.textHead}`}>Permisos</span>
                    </div>
                </Link>
        </div>
        
        
    )
}

export default HeadPanelMenu;
