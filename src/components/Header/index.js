import React from "react";
import logo from "../../images/01.jpg";
import phone from "../../images/phone.png";
import logocircle from "../../images/07-.png";
import { Link as ScrollLink } from "react-scroll";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XCircleIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Empresa", href: "empresa" },
  { name: "Serviços", href: "servicos" },
  // { name: "Clientes", href: "clientes" },
  { name: "Contato", href: "contato" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="bg-white" id="header">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <img className="md:h-36 h-20 w-auto" src={logo} alt="logo"></img>
          </a>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <span key={item.name}>
              <ScrollLink
                className="cursor-pointer text-base font-semibold leading-6 text-gray-900 hover:rounded-md hover:bg-amarelo px-3 py-2 hover:text-white hover:shadow-sm"
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
            className="hidden sm:flex rounded-md sm:items-center bg-amarelo sm:px-3 sm:py-2 sm:text-base font-semibold text-white shadow-sm hover:bg-mostarda hover:text-black  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
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
            onClick={() => setMobileMenuOpen(true)}
          >
            {/* <span className="sr-only">Open main menu</span> */}
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 h-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center gap-x-6">
            <a href="#" className="-m-1.5 p-1.5">
              <img className="h-40 w-auto" src={logocircle} alt="" />
            </a>

            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XCircleIcon
                className="ml-24 -mt-12 h-8 w-8"
                aria-hidden="true"
              />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <span key={item.name}>
                    <ScrollLink
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      to={item.href}
                      smooth={true}
                      duration={2000}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </ScrollLink>
                  </span>
                ))}
              </div>
              <div className="py-6 rounded-lg"></div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Header;
