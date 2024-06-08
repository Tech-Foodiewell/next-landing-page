import { faChevronDown } from "@fortawesome/free-solid-svg-icons/faChevronDown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const Dropdown = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility

  const toggleDropdown = () => setIsOpen(!isOpen); // Function to toggle dropdown state

  useEffect(() => {
    console.log(isOpen);
  });

  const menuRender = () => {
    if (items.children?.type === "text") {
      return (
        <div
          onMouseLeave={() => setIsOpen(false)}
          className={`absolute ${
            isOpen ? "block" : "hidden"
          } text-text bg-whit -translate-x-1/4 bg-white rounded-md border top-full mt-4`}
        >
          <div>
            {items.children?.menus?.map((link) => (
              <a key={link.label} href="">
                <p className="py-[6px] px-4 text-sm">{link.label}</p>
              </a>
            ))}
          </div>
        </div>
      );
    } else if (items.children?.type === "rich") {
      return (
        <div
          onMouseLeave={() => setIsOpen(false)}
          className={`absolute ${
            isOpen ? "block" : "hidden"
          } text-text -translate-x-1/4 top-full mt-4`}
        >
          {items.children?.menus}
        </div>
      );
    } else {
      null;
    }
  };

  return (
    <div className="group mx-auto" onMouseEnter={() => setIsOpen(true)}>
      <button className={`text-text`}>
        {items.label}
        {items?.children ? (
          <FontAwesomeIcon className="ml-2 w-2" icon={faChevronDown} />
        ) : null}
      </button>
      {menuRender()}
      {/* <div
        onMouseLeave={() => setIsOpen(false)}
        className={`absolute ${
          isOpen ? "block" : "hidden"
        } text-text bg-whit -translate-x-1/4 bg-white rounded-md border top-full mt-4`}
      >
        <div>
          {items.children?.type !== "rich"
            ? items.children?.menus?.map((link) => (
                <a key={link.label} href="">
                  <p className="py-[6px] px-4 text-sm">{link.label}</p>
                </a>
              ))
            : items.children.menus}
        </div>
      </div> */}
    </div>
  );
};

export default Dropdown;
