import React from "react";
import { graphql } from "gatsby";

const Service = ({ data, ...props }) => {
  return (
    <div>
      <h1>{data.contentfulServiceCategory.title}</h1>

      {data.contentfulServiceCategory.services.map((service) => {
        console.log(service.title);
        return (
          <div key={service.title}>
            <h2>{service.title}</h2>
            <h3>{service.description.description}</h3>
          </div>
        );
      })}

      <pre>{JSON.stringify(data, null, 2)}</pre>
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
          description
        }
      }
    }
  }
`;
export default Service;
