import React, { Suspense } from 'react';
// import logo from './logo.svg';
import './App.css';
const NextComponent = React.lazy(() => import('nextModule/ExampleComponent'));
const NextCardComponent = React.lazy(() => import('nextModule/CardComponent'))
const NextServiceComponent = React.lazy(() => import('nextModule/ServiceComponent'))
// const ReactButton = React.lazy(() => import('react_app/Button'));

function App() {
  return (
    <div className="App">
   

   <p>Hello world ! </p>

      <Suspense fallback={<div>Loading Next.js component...</div>}>
        <NextComponent
          title="Hello from Container"
          text="It works know "
        />
      </Suspense>
      <Suspense fallback={<div>Loading Next.js component...</div>}>
        <NextCardComponent
          title="Hello from Container"
          image=""
          text="card image "
        />
        </Suspense>

        <Suspense fallback={<div>Loading Next.js component...</div>}>

        <NextServiceComponent
          title="chnage"
          description="servise component"
          image="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTfJlJcwyyD8Dv6LuFXi4fGxVOTp48V4O0iXFy-DCrsYIzqdVbz8N--sr86MM812S__r8huZQTuz4kTLlMnYVVPGQ"
          />
        </Suspense>


{/* <Suspense/> */}
      {/* <Suspense fallback={<div>Loading React button...</div>}>
        <ReactButton text="Click me" />
      </Suspense> */}
    </div>
  );
}

export default App;
