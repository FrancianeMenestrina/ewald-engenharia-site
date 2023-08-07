import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "Os treinamentos são online ou presenciais?",
    answer: "Os treinamentos são todos presenciais.",
  },
  {
    question: "Qual é o local onde são ministrados os treinamentos e cursos?",
    answer:
      "Os treinamentos e cursos são ministrados na sede da empresa contratante ou no local onde o contratante especificar.",
  },
  {
    question:
      "Posso contratar a Ewald para a ministrar conteúdos da semana de prevenção de acidentes da CIPA?",
    answer:
      "Claro! Em nosso portifólio de serviços contamos também com palestras e treinamentos voltados especificamente à esse tipo de evento.",
  },
  {
    question:
      "Estou organizando um evento onde é obrigatório ter um brigadista, a Ewald pode me ajudar com isso?",
    answer:
      "Com certeza! Realizamos o serviço de brigadista particular em eventos",
  },
  {
    question:
      "Posso contratar os serviços e treinamentos para serem ministrados aos finais de semana?",
    answer:
      "Pode sim! Entre em contato conosco para podermos agendar! Realizamos os treinamentos durante a semana e aos finais de semana também, conforme solicitação do cliente e nossa disponibilidade.",
  },
  {
    question: "Eu recebo certificado dos treinamentos?",
    answer:
      "Recebe sim! Todos os nossos cursos e treinamentos possuem certificados que são entregues na conclusão.",
  },
];

const Faq = () => {
  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-6 lg:px-8 lg:py-12">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
            Perguntas Frequentes
            <a
              href="https://wa.me/5547984174008?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20Ewald%20Engenharia!"
              target="_blank"
              className=" -mx-3 font-semibold text-xl text-gray-500  hover:text-black mt-6 block rounded-md py-2 px-3 leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
            >
              Tem mais alguma pergunta? Estamos aqui para te ajudar{" "}
              <span aria-hidden="true">&rarr;</span>
            </a>
          </h2>

          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure
                as="div"
                key={faq.question}
                className="pt-6 text-justify"
              >
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base font-semibold leading-7">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <ChevronUpIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          ) : (
                            <ChevronDownIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-600">
                        {faq.answer}
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Faq;
