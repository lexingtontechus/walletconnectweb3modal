"use client";
import Link from "next/link";

export default function Footer(props) {
  return (
    <>
      {/*}  <footer
        className={
          (props.absolute
            ? "absolute w-full bottom-0 bg-primary-900 text-center mx-auto"
            : "relative bg-primary-900 text-center mx-auto") + " pb-6"
        }
      >*/}
      <div className="btm-nav py-4">
        <div className="container mx-auto px-4">
          <hr className="mb-6 border-b-1 border-primary-50" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full px-4">
              <div className="text-sm text-primary-100 font-semibold py-2 text-center">
                Copyright © {new Date().getFullYear()} Powered by{" "}
                <Link href="https://lexingtontech.us/" target="_blank">
                  Lexington Tech
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
