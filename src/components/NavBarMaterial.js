import { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom'
import { Navbar, Typography, IconButton, Collapse } from "@material-tailwind/react";

export default function NavBarMaterial() {
    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
        window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
    }, []);
    const showActive = (isActive)=>{
        return isActive? ' text-xl bold text-blue-500 m-2':'text-xl bold text-gray-400 m-2'
    }
    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <NavLink className={({isActive})=>showActive(isActive)} 
                to='/user'>Usuarios</NavLink>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <NavLink className={({isActive})=>showActive(isActive)}
                to='/file'>Archivos</NavLink>
            </Typography>
        </ul>
    );

    return (
        <Navbar className="mx-auto my-5 max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4 bg-gray-800">
            <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
                <Typography
                    className="mr-4 py-1.5 font-medium cursor-default"
                >
                  <span className="text-2xl text-blue-500 bold"> Browser History Graph</span>  
                </Typography>
                <div className="hidden lg:block">{navList}</div>

                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            className="h-6 w-6"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </IconButton>
            </div>
            <Collapse open={openNav}>
                <div className="container mx-auto">
                    {navList}
                </div>
            </Collapse>
        </Navbar>
    );
}