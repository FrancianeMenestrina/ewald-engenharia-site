import React from "react";
import logofooter from "../../images/logo-footer.png";

const navigation = {
  main: [
    { name: "Empresa", href: "#" },
    { name: "Serviços", href: "#" },
    { name: "Clientes", href: "#" },
    { name: "Contato", href: "#" },
  ],
  social: [
    {
      name: "Linkedin",
      href: "https://www.linkedin.com/company/ewald-engenharia/",
      icon: (props) => (
        <svg
          fill="#9CA3AF"
          height="24px"
          width="24px"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 455 455"
          stroke="#9CA3AF"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <g>
              {" "}
              <path
                style={{
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                }}
                d="M246.4,204.35v-0.665c-0.136,0.223-0.324,0.446-0.442,0.665H246.4z"
              ></path>{" "}
              <path
                style={{
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                }}
                d="M0,0v455h455V0H0z M141.522,378.002H74.016V174.906h67.506V378.002z M107.769,147.186h-0.446C84.678,147.186,70,131.585,70,112.085c0-19.928,15.107-35.087,38.211-35.087 c23.109,0,37.31,15.159,37.752,35.087C145.963,131.585,131.32,147.186,107.769,147.186z M385,378.002h-67.524V269.345 c0-27.291-9.756-45.92-34.195-45.92c-18.664,0-29.755,12.543-34.641,24.693c-1.776,4.34-2.24,10.373-2.24,16.459v113.426h-67.537 c0,0,0.905-184.043,0-203.096H246.4v28.779c8.973-13.807,24.986-33.547,60.856-33.547c44.437,0,77.744,29.02,77.744,91.398V378.002 z"
              ></path>{" "}
            </g>{" "}
          </g>
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://instagram.com/ewald_engenharia?igshid=MzRlODBiNWFlZA==",
      icon: (props) => (
        <svg
          fill="#9CA3AF"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 169.063 169.063"
          stroke="#9CA3AF"
          {...props}
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <g>
              {" "}
              <path d="M122.406,0H46.654C20.929,0,0,20.93,0,46.655v75.752c0,25.726,20.929,46.655,46.654,46.655h75.752 c25.727,0,46.656-20.93,46.656-46.655V46.655C169.063,20.93,148.133,0,122.406,0z M154.063,122.407 c0,17.455-14.201,31.655-31.656,31.655H46.654C29.2,154.063,15,139.862,15,122.407V46.655C15,29.201,29.2,15,46.654,15h75.752 c17.455,0,31.656,14.201,31.656,31.655V122.407z"></path>{" "}
              <path d="M84.531,40.97c-24.021,0-43.563,19.542-43.563,43.563c0,24.02,19.542,43.561,43.563,43.561s43.563-19.541,43.563-43.561 C128.094,60.512,108.552,40.97,84.531,40.97z M84.531,113.093c-15.749,0-28.563-12.812-28.563-28.561 c0-15.75,12.813-28.563,28.563-28.563s28.563,12.813,28.563,28.563C113.094,100.281,100.28,113.093,84.531,113.093z"></path>{" "}
              <path d="M129.921,28.251c-2.89,0-5.729,1.17-7.77,3.22c-2.051,2.04-3.23,4.88-3.23,7.78c0,2.891,1.18,5.73,3.23,7.78 c2.04,2.04,4.88,3.22,7.77,3.22c2.9,0,5.73-1.18,7.78-3.22c2.05-2.05,3.22-4.89,3.22-7.78c0-2.9-1.17-5.74-3.22-7.78 C135.661,29.421,132.821,28.251,129.921,28.251z"></path>{" "}
            </g>{" "}
          </g>
        </svg>
      ),
    },
    {
      name: "Email",
      href: "mailto:engenhariaewald@gmail.com",
      icon: (props) => (
        <svg
          fill="#9CA3AF"
          viewBox="0 0 1920 1920"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#9CA3AF"
          {...props}
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M1920 428.266v1189.54l-464.16-580.146-88.203 70.585 468.679 585.904H83.684l468.679-585.904-88.202-70.585L0 1617.805V428.265l959.944 832.441L1920 428.266ZM1919.932 226v52.627l-959.943 832.44L.045 278.628V226h1919.887Z"
              fill-rule="evenodd"
            ></path>{" "}
          </g>
        </svg>
      ),
    },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden py-10 sm:py-12 lg:px-2">
        <nav
          className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
          aria-label="Footer"
        >
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <a
                href={item.href}
                className="text-base leading-6 text-gray-600 hover:text-gray-900"
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <div className="flex justify-around items-center space-x-10 mb-2">
          <div className="flex ">
            <img className="h-50 w-80" src={logofooter}></img>
          </div>
          <div>
            <p className="text-gray-500">Timbó - Santa Catarina</p>
            <a
              href="https://wa.me/5547984174008?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20Ewald%20Engenharia!"
              target="_blank"
              className="text-gray-500 font-semi-bold hover:text-gray-900 "
            >
              (47) 98417-4008
            </a>
          </div>
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              className="text-gray-400 hover:text-gray-500"
            >
              <div className="flex justify-center">
                <item.icon className="h-6 w-6 " aria-hidden="true" />
              </div>
            </a>
          ))}
        </div>
        <div className="border-t border-gray-300"></div>
        <p className="mt-4 text-center text-xs leading-5 text-gray-500">
          &copy; 2023 Ewald Engenharia - Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
