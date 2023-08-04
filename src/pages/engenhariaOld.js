import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppIcon from "../components/WhatsAppIcon";
import { Disclosure } from "@headlessui/react";
import { ChevronRightIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import Seo from "../components/Seo";

const servicos = [
  {
    question: "Servico 1",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat. I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur ad, I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur ad",
  },
  {
    question: "Servico 2",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat. I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur ad, I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur ad",
  },
  {
    question: "Servico 3",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat. I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur ad, I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur ad",
  },
  {
    question: "Servico 4",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat. I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur ad, I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur ad",
  },
];

const Engenharia = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Seo
        title="Ewald Engenharia"
        description="Ewald Engenharia - Segurança do Trabalho e Gestão Fabril"
      ></Seo>
      <WhatsAppIcon />
      <Header />
      <div className="flex-grow">
        <div className="bg-gray-100">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
            <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
              <h2 className="text-4xl font-bold leading-10 tracking-tight text-gray-900">
                Serviços de Engenharia
              </h2>
              <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
                {servicos.map((servico) => (
                  <Disclosure as="div" key={servico.question} className="pt-6">
                    {({ open }) => (
                      <>
                        <dt>
                          <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                            <span className="text-base font-semibold leading-7">
                              {servico.question}
                            </span>
                            <span className="ml-6 flex h-7 items-center">
                              {open ? (
                                <ChevronUpIcon
                                  className="h-6 w-6"
                                  aria-hidden="true"
                                />
                              ) : (
                                <ChevronRightIcon
                                  className="h-6 w-6"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </dt>
                        <Disclosure.Panel as="dd" className="mt-2 pr-12">
                          <p className="text-base leading-7 text-gray-600">
                            {servico.answer}
                          </p>
                          <a
                            href="https://wa.me/5547984174008?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20Ewald%20Engenharia!"
                            target="_blank"
                            className="rounded-md sm:w-1/5 text-center bg-amarelo px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm  hover:bg-mostarda hover:text-black mt-6 block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                          >
                            Fale conosco <span aria-hidden="true">&rarr;</span>
                          </a>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Engenharia;
