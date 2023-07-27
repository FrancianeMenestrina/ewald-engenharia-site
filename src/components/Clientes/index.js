import React from "react";
import brigada from "../../images/brigada.png";
import butzke from "../../images/butzke.png";
import fc from "../../images/fc.png";
import declaus from "../../images/declaus.png";

const Clientes = () => {
  return (
    <div className="flex mt-10 flex-col items-center text-center py-12">
      <h1 className="text-1xl font-bold tracking-tight text-black sm:text-2xl">
        Conheça alguns de nossos clientes
      </h1>
      <br></br>
      <div className=" flex items-center rounded-md w-4/5 bg-amarelo shadow-2xl py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            <a
              href="https://www.instagram.com/fc_servicos7/?igshid=MzRlODBiNWFlZA%3D%3D"
              target="_blank"
            >
              <img
                className="col-span-2 max-h-32 w-full object-contain sm:col-start-2 lg:col-span-1"
                src={fc}
                alt="SavvyCal"
                width={158}
                height={48}
              />
            </a>
            <a href="https://butzkeempresas.com.br" target="_blank">
              <img
                className="col-span-2 max-h-48 w-full object-contain lg:col-span-1"
                src={butzke}
                alt="Reform"
                width={158}
                height={48}
              />
            </a>
            <a
              href="https://www.instagram.com/brigadapadrao/?igshid=MzRlODBiNWFlZA%3D%3D"
              target="_blank"
            >
              <img
                className="col-span-2 max-h-32 w-full object-contain lg:col-span-1"
                src={brigada}
                alt="Transistor"
                width={158}
                height={48}
              />
            </a>
            <a href="https://www.declaus.com.br/" target="_blank">
              <img
                className="col-span-2 max-h-48 w-full object-contain lg:col-span-1"
                src={declaus}
                alt="Tuple"
                width={158}
                height={48}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clientes;
