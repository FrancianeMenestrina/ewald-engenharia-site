import React from "react";

const tiers = [
  {
    name: "Treinamento 1",
    id: "tier-freelancer",
    href: "#",

    description: "The essentials to provide your best work for clients.",
  },
  {
    name: "Treinamento 2",
    id: "tier-startup",
    href: "#",

    description: "A plan that scales with your rapidly growing business.",
  },
  {
    name: "Treinamento 3",
    id: "tier-enterprise",
    href: "#",

    description: "Dedicated support and infrastructure for your company.",
  },
  {
    name: "Treinamento 4",
    id: "tier-freelancers",
    href: "#",

    description: "The essentials to provide your best work for clients.",
  },
  {
    name: "Treinamento 5",
    id: "tier-startups",
    href: "#",

    description: "A plan that scales with your rapidly growing business.",
  },
  {
    name: "Treinamento 6",
    id: "tier-enterprises",
    href: "#",

    description: "Dedicated support and infrastructure for your company.",
  },
  {
    name: "Treinamento 7",
    id: "tier-enterprises",
    href: "#",

    description: "Dedicated support and infrastructure for your company.",
  },
  {
    name: "Treinamento 8",
    id: "tier-enterprises",
    href: "#",

    description: "Dedicated support and infrastructure for your company.",
  },
  {
    name: "Treinamento 9",
    id: "tier-enterprises",
    href: "#",

    description: "Dedicated support and infrastructure for your company.",
  },
  {
    name: "Treinamento 10",
    id: "tier-enterprises",
    href: "#",

    description: "Dedicated support and infrastructure for your company.",
  },
];

const ServicosTagMenor = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="isolate mx-auto  mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-5">
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

export default ServicosTagMenor;
