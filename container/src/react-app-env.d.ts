declare module 'react_app/ReactApp' {
  import React from 'react';
  const ReactApp: React.ComponentType<any>;
  export default ReactApp;
}

declare module 'nextModule/ExampleComponent' {
  export interface ExampleComponentProps {
    title?: string;
    text?: string;
  }

  const ExampleComponent: React.FC<ExampleComponentProps>;
  export default ExampleComponent;
}

declare module 'nextModule/CardComponent' {
  export interface CardComponentProps {
    title: string;
    image: string;
    text: string;
  }

  const CardComponent: React.FC<CardComponentProps>;
  export default CardComponent;
}

declare module 'nextModule/ServiceComponent' {
  import React from 'react';
  export interface ServiceComponentProps {
    title: string;
    description: string;
    image: string;
  }

  const ServiceComponent: React.FC<ServiceComponentProps>;
  export default ServiceComponent;
}

declare module 'reactmodule/Product' {
  import React from 'react';

  interface ProductProps {
    name: string;
    price: number;
    image:string;
    description:string
  }

  const Product: React.FC<ProductProps>;
  export default Product;
}
