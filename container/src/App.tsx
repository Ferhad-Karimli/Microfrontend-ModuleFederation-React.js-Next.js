import React, { Suspense } from 'react';

const NextCardComponent = React.lazy(() => import('nextModule/CardComponent'));
const NextServiceComponent = React.lazy(
  () => import('nextModule/ServiceComponent')
);
const ReactModuleProduct = React.lazy(() => import('reactmodule/Product'));

function App() {
  return (
    <div className="App">
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
      <Suspense fallback={<div>Loading React module...</div>}>
        <ReactModuleProduct 
             name="Premium Laptop"
             price={12300}
             image="https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXBwbGUlMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
             description="Powerful notebook with the latest technology for professionals."
         />

      </Suspense>
    </div>
  );
}

export default App;
