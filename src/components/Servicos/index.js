import React from "react";

const tiers = [
  {
    name: "Capacitação de trabalhadores em atividades em altura - NR 35",
    id: "01",
    href: "#",

    description:
      "Assessoria, Consultoria, Treinamento, Orientação, Supervisão.",
  },
  {
    name: "Capacitação para formação de Brigadistas.",
    id: "02",
    href: "#",

    description:
      "Assessoria, Consultoria, Treinamento, Orientação, Supervisão.",
  },
  {
    name: "Capacitação para membros da CIPA - NR 05",
    id: "03",
    href: "#",

    description:
      "Assessoria, Consultoria, Treinamento, Orientação, Supervisão.",
  },
  {
    name: "Plano de Implantação da Brigada de Incêndio",
    id: "04",
    href: "#",

    description:
      "Análise, Avaliação, Detalhamento, Elaboração, Especificação, Estudo, Estudo de Viabilidade Técnica, Execução, Orientação.",
  },
  {
    name: "Capacitação de trabalhadores em atividades com inflamáveis e combustíveis - NR20.",
    id: "05",
    href: "#",

    description:
      "Assessoria, Consultoria, Treinamento, Orientação, Supervisão.",
  },
  {
    name: "Condições de segurança do trabalho em operações de máquinas e equipamentos.",
    id: "06",
    href: "#",

    description:
      "Análise, Auditoria, Avaliação, Treinamentos, Inspeção, Laudo, Parecer, Perícia, Vistoria.",
  },
];

const Servicos = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Conheça nossos serviços
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
          Choose an affordable plan that’s packed with the best features for.
        </p>
        <div className="mt-16 flex justify-center"></div>
        <div className="isolate mx-auto  mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className="shadow-2xl gradient rounded-3xl p-8 xl:p-10"
            >
              <div className="flex items-center justify-between gap-x-4">
                <h3
                  id={tier.id}
                  className="text-lg font-semibold leading-8 text-gray-900"
                >
                  {tier.name}
                </h3>
                {tier.mostPopular ? (
                  <p className="rounded-full bg-indigo-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-indigo-600">
                    Most popular
                  </p>
                ) : null}
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-600">
                {tier.description}
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-gray-900"></span>
                <span className="text-sm font-semibold leading-6 text-gray-600"></span>
              </p>
              <a
                href="https://wa.me/5547984174008?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20Ewald%20Engenharia!"
                target="_blank"
                aria-describedby={tier.id}
                className=" text-white  hover:bg-gray-300 hover:text-black mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
              >
                Fale conosco ->
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Servicos;