import React from "react";
import perfil from "../../images/perfil.jpeg";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import { Element } from "react-scroll";

const benefits = [
  "Engenheiro de Produção",
  "Curso de anatomia no salvamento veicular",
  "Engenheiro de Segurança do Trabalho",
  "Curso em saúde e segurança no ambiente de trabalho",
  "Especialização em Gestão da Indústria 4.0",
  "Curso de ventilação operacional em incêndio",
  "Instrutor de Brigada credenciado pelo CBMSC",
  "Curso de soluções móveis HazMat para incidentes multirisco",
  "Brigadista credenciado pelo CBMSC",

  "Curso oficial de segurança em incidentes (OSI)",
  "Bombeiro Voluntário na cidade de Pomerode BVP-18",
  "Curso de resgate veicular básico – nível I e II",
  "Condutor de veículo de emergência com especialização em operação de bomba de combate à incêndio em viaturas de bombeiros",
];

const PerfilGui = () => {
  return (
    <Element name="empresa">
      <div
        id="empresa"
        className="bg-white -mt-20 pb-16  pt-24 sm:pb-24 sm:pt-32 xl:pb-32"
      >
        <p className="text-center text-3xl  text-black font-bold  sm:text-2xl">
          SAIBA MAIS SOBRE NOSSO INSTRUTOR
        </p>
        <div className="flex flex-col justify-center items-center">
          <p className="p-4 ml-16 text-center text-2xl leading-8 text-gray-700">
            Guilherme Tiago Ewald - CREA-SC 174740-2
          </p>
        </div>
        <br></br>
        <div className="gradient pb-20 sm:pb-24 xl:pb-0">
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
            <div className="-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
              <div className="relative h-full md:-mx-8 xl:mx-0 xl:aspect-auto">
                <img
                  className="absolute inset-0 h-full w-full rounded-2xl bg-gray-800 object-cover shadow-2xl"
                  src={perfil}
                  alt=""
                />
              </div>
            </div>

            <div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24">
              <blockquote className="text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
                <ul
                  role="list"
                  className=" grid grid-cols-1 gap-x-8  text-base  text-black sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 sm:mt-10"
                >
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex gap-x-3">
                      <CheckCircleIcon
                        className="h-7 w-5 flex-none"
                        aria-hidden="true"
                      />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </blockquote>
            </div>
          </div>
        </div>
        <div className="mt-5 flex justify-center">
          <a
            href="https://wa.me/5547984174008?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20Ewald%20Engenharia!"
            target="_blank"
            className="rounded-md w-1/5 text-center bg-amarelo px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm  hover:bg-mostarda hover:text-black mt-6 block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            Fale conosco <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </Element>
  );
};

export default PerfilGui;
