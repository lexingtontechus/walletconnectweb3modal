"use client";
import Link from "next/link";
import Image from "next/image";
import Switch from "./switchtheme";

const logoImage = ({ src, width, quality }) => {
  return `http://localhost:3000/${src}?w=${width}&q=${quality || 75}`;
};

const Header = () => (
  <div className="navbar">
    <div className="flex-1">
      <Link href="/">
        <Logo />
      </Link>
    </div>

    <div className="navbar-end">
      <Switch />
    </div>
  </div>
);

export default Header;

function Logo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 312.5 211.83246657671296"
      className="size-12 btn btn-secondary btn-circle p-1 stroke-2"
    >
      <g
        transform="matrix(4.288688776400825,0,0,4.288688776400825,47.42262244719835,-5.580061746098252)"
        className="fill-base-100"
      >
        <path
          d="M3.5885 40.038594 l-1.5885 0 l0 -27.999 l1.5885 0 l0 27.999 z M6.6112 38.45 l10.167 -0.000039062 l0 1.5885 l-11.755 0 l0 -1.071 l-0.000078125 0 l0 -26.928 l1.5886 0 l0 26.411 z M26.187 26.032 l6.5268 14.003 l-1.753 0 l-0.010352 -0.022226 l-5.6396 -12.1 l-5.6492 12.123 l-1.753 0 l0.025625 -0.054844 l6.5012 -13.948 l-6.522 -13.993 l1.7529 0 l0.01043 0.022305 l5.6344 12.09 l5.6452 -12.112 l1.7529 0 l-0.025625 0.054844 z M26.187 33.0432 l3.2588 6.9924 l-1.7521 0 l-2.383 -5.1124 l-2.3825 5.1124 l-1.7529 0 l3.2589 -6.9924 l-0.00023438 -0.000625 l0.87648 -1.8794 z M33.856 12.027000000000001 l14.778 0 l0 1.5885 l-8.0665 0 l0 26.423 l-1.5885 0 l0 -26.423 l-5.1231 0 l0 -1.5885 z M42.002 15.05 l6.6323 0 l0 1.5885 l-5.0439 0 l0 23.4 l-1.5884 0 l0 -24.989 z"
          className="fill-base-100"
        />
      </g>
    </svg>
  );
}
