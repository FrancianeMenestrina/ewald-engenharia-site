import React from "react";
import { graphql } from "gatsby";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppIcon from "../components/WhatsAppIcon";
import { Disclosure } from "@headlessui/react";
import { ChevronRightIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import Seo from "..//components/Seo";

const Service = ({ data, ...props }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <head>
        <script>
          (function(w,d,s,l,i){(w[l] = w[l] || [])}w[l].push({"gtm.start"}
          new Date().getTime(),event:'gtm.js');var
          f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          )(window,document,'script','dataLayer','GTM-N8R84FSB');
        </script>
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N8R84FSB"
            height="0"
            width="0"
            style="display:none;visibility:hidden"
          ></iframe>
        </noscript> */}

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
                {data.contentfulServiceCategory.title}
              </h2>
              <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
                {data.contentfulServiceCategory.services.map((service) => (
                  <Disclosure
                    as="div"
                    key={service.title}
                    className="pt-6 text-justify"
                  >
                    {({ open }) => (
                      <>
                        <dt>
                          <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                            <span className="text-base font-semibold leading-7">
                              {service.title}
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
                        <Disclosure.Panel
                          as="dd"
                          className="mt-2 pr-12  items-center"
                        >
                          <p className="text-base leading-7 text-gray-600">
                            {service.description.internal.content}
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
      {/* </body> */}
    </div>
  );
};

export const pageQuery = graphql`
  query ($slug: String!) {
    contentfulServiceCategory(slug: { eq: $slug }) {
      title
      services {
        title
        description {
          internal {
            content
          }
        }
      }
    }
  }
`;

export default Service;
