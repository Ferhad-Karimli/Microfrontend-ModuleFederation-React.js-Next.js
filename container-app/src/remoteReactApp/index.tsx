import { lazy, Suspense } from 'react';

const ReactApp = lazy(() => import('react_app/ReactApp'));



export default function RemoteReactApp() {
  return (
    <Suspense fallback={<div>Loading React App...</div>}>
      <ReactApp />
    </Suspense>
  )
}
