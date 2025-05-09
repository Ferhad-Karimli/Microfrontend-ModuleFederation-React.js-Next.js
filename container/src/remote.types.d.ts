declare module 'react_app/Button' {
  import React from 'react';
  const ReactApp: React.ComponentType<any>;
  export default ReactApp;
}

declare module 'nextModule/ExampleComponent' {
  import React from 'react';

  export interface ExampleComponentProps {
    title?: string;
    text?: string;
  }

  const ExampleComponent: React.FC<ExampleComponentProps>;
  export default ExampleComponent;
}

declare module 'nextModule/CardComponent' {
  import React from 'react';
  export interface CardComponentProps {
    title: string;
    image: string;
    text: string;
  }

  const CardComponent: React.FC<CardComponentProps>;
}

declare module 'nextModule/ServiceComponent' {
  import React from 'react';
  export interface ServiceProps {
    title: string;
    description: string;
    image: string;
  }

  const ServiceComponent: React.FC<ServiceProps>;
}
