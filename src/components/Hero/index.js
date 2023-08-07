import React from "react";
import treino2 from "../../images/02t.jpg";
import treino3 from "../../images/03.jpeg";
import treino5 from "../../images/05.jpeg";
import treino002 from "../../images/002.jpg";

const Hero = () => {
  return (
    <div className="overflow-hidden bg-white py-14">
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
            <h2 className="text-3xl text-center font-bold tracking-tight text-gray-900 sm:text-4xl">
              Consultoria e Treinamentos em Segurança do Trabalho e Gestão
              Fabril
            </h2>
            <p className="mt-6 text-2xl text-center leading-8 text-gray-600  sm:text-center sm:mx-10">
              Engenheiro Guilherme Tiago Ewald
            </p>
            <p className=" text-2xl text-center leading-8 text-gray-600 sm:text-center">
              CREA-SC 174740-2
            </p>
            <p className="mt-6 text-center text-xl leading-7 text-gray-600">
              Encontre aqui os treinamentos necessários para a sua empresa!
              Nossa equipe é qualificada e está pronta para lhe atender!
            </p>
            <div className="mt-10 flex">
              <a
                href="https://wa.me/5547984174008?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20Ewald%20Engenharia!"
                target="_blank"
                className="rounded-md bg-amarelo px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm  hover:bg-mostarda hover:text-black mt-6 block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Fale conosco <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="flex lg:flex-wrap flex-col lg:items-start items-center lg:justify-end justify-center gap-6 md:gap-8 lg:contents">
            <div className="sm:w-0 flex w-96 flex-auto lg:ml-auto justify-center lg:w-auto lg:flex-none lg:self-end">
              <img
                src={treino2}
                alt="treino2"
                className="aspect-[7/5] sm:w-[37rem] w-[22rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
              />
            </div>
            <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
              <div className="order-first hidden sm:flex w-64 sm:flex-none sm:justify-end self-end lg:w-auto">
                <img
                  src={treino5}
                  alt="treino5"
                  className="aspect-[4/3] sm:w-[20rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
              <div className="flex w-96 flex-auto md:justify-end justify-center lg:w-auto lg:flex-none">
                <img
                  src={treino3}
                  alt="treino3"
                  className="aspect-[7/5] md:w-[32rem] w-[22rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
              <div className=" hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                <img
                  src={treino002}
                  className="aspect-[4/3] sm:w-[20rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
