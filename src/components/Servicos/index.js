import React from "react";
import bomber from "../../images/bomber.png";
import fabril from "../../images/fabril.png";
import engenharia from "../../images/engenharia.png";
import cipa from "../../images/cipa.png";
import { Link } from "gatsby";

const tiers = [
  {
    name: "Serviços de Engenharia",
    id: "01",
    href: "#",
    type: "engenharia",

    description:
      "Assessoria, Consultoria, Treinamento, Orientação e Supervisão",
  },
  {
    name: "Treinamentos",
    id: "02",
    href: "#",
    type: "treinamentos",

    description:
      "Assessoria, Consultoria, Treinamento, Orientação e Supervisão.",
  },
  {
    name: "Consultoria em Gestão Fabril",
    id: "03",
    href: "#",
    type: "fabril",

    description:
      "Assessoria, Consultoria, Treinamento, Orientação e Supervisão.",
  },
  {
    name: "Brigadista Particular",
    id: "04",
    href: "#",
    type: "brigadista",

    description:
      "Análise, Avaliação, Detalhamento, Elaboração, Especificação, Estudo, Estudo de Viabilidade Técnica, Execução, Orientação.",
  },
];

const Servicos = () => {
  return (
    <div className="mx-auto bg-white  py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className=" text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Conheça nossos serviços
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
          Oferecemos serviços em engenharia, treinamentos em segurança do
          trabalho, gestão fabril e ainda serviços em eventos!
        </p>
        <div className="mt-2 flex justify-center"></div>
        <div className="isolate mx-auto  mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className="shadow-2xl bg-amarelo rounded-3xl p-8 xl:p-10"
            >
              <p className="mt-4 text-2xl font-bold text-center leading-6 text-black">
                {tier.name}
              </p>
              <p className="mt-4 text-xl text-center leading-6 text-gray-200">
                {tier.description}
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-gray-900"></span>
                <span className="text-sm font-semibold leading-6 text-gray-600"></span>
              </p>
              <div className="flex justify-between">
                {tier.type === "brigadista" ? (
                  <img className="w-16 h-16" src={bomber} alt="brigadista" />
                ) : tier.type === "treinamentos" ? (
                  <img className="w-16 h-16" src={cipa} alt="treinamentos" />
                ) : tier.type === "engenharia" ? (
                  <img
                    className="w-16 h-16"
                    src={engenharia}
                    alt="engenharia"
                  />
                ) : (
                  <img className="w-16 h-16" src={fabril} alt="fabril" />
                )}
                <Link
                  className="text-white text-xl text-end  hover:text-black mt-6 block rounded-md py-2 px-3 font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
                  to={`/${tier.type}`}
                >
                  Saiba mais <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Servicos;
