'use strict';
import { FaGithub, FaNpm, FaYoutube } from 'react-icons/fa';

export const emailContact = "au7812ooae32@gmail.com";
export const phoneContact = "(+34) 643 56 70 16";
export const arrayNavbarItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name:"Contact", path: "/contact" },
]
export const sizeFooterIcons = '30px';
export const colorFooterIcons = 'black'
export const iconsFooterList = [
    [<FaGithub key={1} size={sizeFooterIcons} color={colorFooterIcons}/>, 'https://www.github.com/HarryEddward'],
    [<FaYoutube key={2} size={sizeFooterIcons} color={colorFooterIcons}/>, 'https://www.youtube.com/@__adrian__martin__'],
    [<FaNpm key={3} size={sizeFooterIcons} color={colorFooterIcons}/>, 'https://www.npmjs.com/~agaster']
];