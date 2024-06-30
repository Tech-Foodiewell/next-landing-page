import { faChevronDown } from "@fortawesome/free-solid-svg-icons/faChevronDown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";

const Dropdown = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility

  const menuRender = () => {
    if (items.children?.type === "text") {
      return (
        <div>
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } absolute top-16 h-20 -ml-7 w-36`}
          ></div>
          <div
            onMouseLeave={() => setIsOpen(false)}
            className={`absolute ${
              isOpen ? "block" : "hidden"
            } text-text bg-whit -translate-x-1/4 bg-white rounded-md border top-28 mt-4`}
          >
            <div>
              {items.children?.menus?.map((link: { label: string }) => (
                <p key={link.label} className="py-[6px] px-4 text-sm">
                  <Link href="">{link.label}</Link>
                </p>
              ))}
            </div>
          </div>
        </div>
      );
    } else if (items.children?.type === "rich") {
      return (
        <div>
          <div
            onMouseLeave={() => setIsOpen(false)}
            className={`absolute ${
              isOpen ? "block" : "hidden"
            } text-text -translate-x-1/4 top-[70px] mt-4`}
          >
            <div
              className={`${
                isOpen ? "block" : "hidden"
              } relative z-[999] -top-5 h-10 w-3/4 mx-auto`}
            ></div>
            {items.children?.menus}
          </div>
        </div>
      );
    } else {
      null;
    }
  };

  return (
    <>
      <div
        className="group mx-auto"
        onMouseLeave={() => setIsOpen(false)}
        onMouseOver={() => setIsOpen(true)}
      >
        <button className={`text-text`}>
          {items.label}
          {items?.children ? (
            <FontAwesomeIcon className="ml-2 w-2" icon={faChevronDown} />
          ) : null}
        </button>
        {menuRender()}
      </div>
    </>
  );
};

export default Dropdown;
