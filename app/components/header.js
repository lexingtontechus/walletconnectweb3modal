"use client";
import Link from "next/link";
import Image from "next/image";
import Switch from "./switchtheme";

const logoImage = ({ src, width, quality }) => {
  return `http://localhost:3000/${src}?w=${width}&q=${quality || 75}`;
};

const Header = () => (
  <div className="navbar flex justify-between px-4 whitespace-normal uppercase">
    <div className="flex-1">
      <div className="avatar">
        <div className="p-0 h-10 w-10">
          <Link href="/">
            <Logo />
          </Link>
        </div>
      </div>
    </div>

    <div className="ml-2">
      <Switch />
    </div>
  </div>
);

export default Header;

function Logo() {
  return (
    <svg className="h-10 w-10" viewBox="0 0 312.5 312.5">
      <g transform="matrix(6.25,0,0,6.25,0.31249597668647766,0)" fill="#0F172A">
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="M24.95 0a25 25 0 1 0 25 25 25 25 0 0 0-25-25zm0 46.91a22 22 0 1 1 22-22 22 22 0 0 1-22 21.99z"
          className="fill-secondary"
        />
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="M24.95 3.65a21.3 21.3 0 1 0 21.3 21.3 21.33 21.33 0 0 0-21.3-21.3z"
          className="fill-secondary"
        />
      </g>
      <g
        transform="matrix(3.8212932024467334,0,0,3.8212932024467334,48.357413595106536,57.041305021540545)"
        fill="#F8FAFC"
      >
        <path
          d="M3.5885 40.038594 l-1.5885 0 l0 -27.999 l1.5885 0 l0 27.999 z M6.6112 38.45 l10.167 -0.000039062 l0 1.5885 l-11.755 0 l0 -1.071 l-0.000078125 0 l0 -26.928 l1.5886 0 l0 26.411 z M29.039 26.032 l6.5268 14.003 l-1.753 0 l-0.010352 -0.022226 l-5.6396 -12.1 l-5.6492 12.123 l-1.753 0 l0.025625 -0.054844 l6.5012 -13.948 l-6.522 -13.993 l1.7529 0 l0.01043 0.022305 l5.6344 12.09 l5.6452 -12.112 l1.7529 0 l-0.025625 0.054844 z M29.039 33.0432 l3.2588 6.9924 l-1.7521 0 l-2.383 -5.1124 l-2.3825 5.1124 l-1.7529 0 l3.2589 -6.9924 l-0.00023438 -0.000625 l0.87648 -1.8794 z M39.56 12.027000000000001 l14.778 0 l0 1.5885 l-8.0665 0 l0 26.423 l-1.5885 0 l0 -26.423 l-5.1231 0 l0 -1.5885 z M47.706 15.05 l6.6323 0 l0 1.5885 l-5.0439 0 l0 23.4 l-1.5884 0 l0 -24.989 z"
          fill="#F8FAFC"
        />
      </g>
    </svg>
  );
}