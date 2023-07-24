import React from "react";
import logo from "../../images/01.jpg";

const navigation = [
  { name: "Empresa", href: "#" },
  { name: "Serviços", href: "#" },
  { name: "Ver esse link", href: "#" },
  { name: "Contato", href: "#" },
];

const Header = () => {
  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <img className="h-22 w-auto" src={logo} alt="logo"></img>
          </a>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-base font-semibold leading-6 text-gray-900 hover:rounded-md hover:bg-amarelo px-3 py-2 hover:text-white hover:shadow-sm"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="flex flex-1 items-center justify-end gap-x-6">
          <a
            href="#"
            className="rounded-md bg-amarelo px-3 py-2 text-base font-semibold text-white shadow-sm hover:amarelo focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign up
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          ></button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
