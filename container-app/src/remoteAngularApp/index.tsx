import { lazy, Suspense } from 'react';

const AngularApp = lazy(() => import('angular_app/AngularComponent'));



export default function RemoteAngularApp() {
  return (
    <Suspense fallback={<div>Loading React App...</div>}>
      <AngularApp />
    </Suspense>
  )
}