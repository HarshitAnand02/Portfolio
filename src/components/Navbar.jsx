import React from 'react'
import logo from '../assets/logo.png'
import { FaLinkedin , FaGithub} from "react-icons/fa"
import { SiCodechef , SiLeetcode, SiCodeforces} from "react-icons/si";
import AnchorLink from "react-anchor-link-smooth-scroll";

export const Navbar = () => {
    return (
        <nav className='mb-20 flex items-center justify-between pt-6'>
            <div className='flex flex-shrink-0 items-center'>
                <img className='mx-2 w-10' src={logo} alt="logo" />
            </div>
            <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <a href="https://www.linkedin.com/in/harshit-anand-060529247/"><FaLinkedin /></a>
            <a href="https://github.com/HarshitAnand02"><FaGithub /></a>
            <a href="https://www.codechef.com/users/harshit_anand5"><SiCodechef /></a>
            <a href="https://leetcode.com/u/Harshit_Anand05/"><SiLeetcode /></a>
            <a href="https://codeforces.com/profile/HarshitAnand.cpp"><SiCodeforces /></a>
            </div>
        </nav>
    )
}
