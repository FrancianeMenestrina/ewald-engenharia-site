import React from "react";
import logo from "../../images/01.jpg";
import phone from "../../images/phone.png";
import { Link as ScrollLink } from "react-scroll";

const navigation = [
  { name: "Empresa", href: "empresa" },
  { name: "Serviços", href: "servicos" },
  { name: "Clientes", href: "clientes" },
  { name: "Contato", href: "contato" },
];

const Header = () => {
  return (
    <header className="bg-white" id="header">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <img className="h-22 w-auto" src={logo} alt="logo"></img>
          </a>
        </div>
        {/* <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-base font-semibold leading-6 text-gray-900 hover:rounded-md hover:bg-amarelo px-3 py-2 hover:text-white hover:shadow-sm"
            >
              {item.name}
            </a>
          ))}
        </div> */}
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <span key={item.name}>
              <ScrollLink
                className=" cursor-pointer text-base font-semibold leading-6 text-gray-900 hover:rounded-md hover:bg-amarelo px-3 py-2 hover:text-white hover:shadow-sm"
                to={item.href}
                smooth={true}
                duration={2000}
              >
                {item.name}
              </ScrollLink>
            </span>
          ))}
        </div>
        <div className="flex items-center justify-end gap-x-6">
          <a
            className=" flex rounded-md items-center bg-amarelo px-3 py-2 text-base font-semibold text-white shadow-sm hover:bg-mostarda hover:text-black  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            href="https://wa.me/5547984174008?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20Ewald%20Engenharia!"
            target="_blank"
          >
            <img className="w-5 h-5" src={phone}></img>
            <span className="ml-2">(47) 98417-4008</span>
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
