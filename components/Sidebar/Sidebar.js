'use client'
import syles from './Sidebar.module.css';
import Link from "next/link";
import { usePathname } from 'next/navigation'

const Sidebar = () => {

    const router = usePathname()
    console.log("router",router)

    return (
        <div className={``}> {/* seria el ul */}
            <div> {/* seria el li */}
                <Link href={'/'} className={`${router == "/" ? "active" : ""} ${syles.itemSidebar} flex items-center w-full relative py-0 px-3`}>
                    {/* <FaHome className={` me-2 fs-3 text-center`} /> */}
                    <span className={`${syles.textSidebar}`}>Inicio</span>
                </Link>
            </div>
            <div > {/* seria el li */}
                <Link href={'/providers'} className={`${router == "/providers" ? "active" : ""} ${syles.itemSidebar} flex items-center w-full relative py-0 px-3`}>
                    {/* <BiSolidTruck className={` me-2 fs-3 text-center`} /> */}
                    <span className={`${syles.textSidebar}`}>Proveedores</span>
                </Link>
            </div>
            <div > {/* seria el li */}
                <Link href={'/articles'} className={`${router == "/articles" ? "active" : ""} ${syles.itemSidebar} flex items-center w-full relative py-0 px-3`}>
                    {/* <BiSolidTruck className={` me-2 fs-3 text-center`} /> */}
                    <span className={`${syles.textSidebar}`}>Artículos</span>
                </Link>
            </div>
        </div>
    )
}

export default Sidebar;