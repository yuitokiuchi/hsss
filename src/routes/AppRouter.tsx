// src/routes/AppRouter.tsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loading from './Loading';
import NotFound from './NotFound';
import MainLayout from '@/layouts/MainLayout';

// Helper to convert dynamic import into a React.LazyExoticComponent
const toLazy = (factory: () => Promise<any>) =>
  React.lazy(() => factory().then((m) => ({ default: m.default ?? Object.values(m)[0] })));

// Pages that use the MainLayout (Header + Footer)
const mainRoutes = [
  { path: '/', loader: () => import('@/pages/HomePage') },
  { path: '/about', loader: () => import('@/pages/AboutPage') },
  { path: '/teams', loader: () => import('@/pages/TeamsPage') },
  { path: '/projects', loader: () => import('@/pages/ProjectsPage') },
  { path: '/news', loader: () => import('@/pages/NewsPage') },
  { path: '/contact', loader: () => import('@/pages/ContactPage') },
];

// Standalone pages (Game/App)
const appRoutes = [
  { path: '/spelling', loader: () => import('@/features/spelling/Spelling') },
  { path: '/result', loader: () => import('@/features/result/Result') },
];

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Website Layout */}
        <Route element={<MainLayout />}>
          {mainRoutes.map((r) => {
            const Comp = toLazy(r.loader);
            return (
              <Route
                key={r.path}
                path={r.path}
                element={
                  <React.Suspense fallback={<Loading />}>
                    <Comp />
                  </React.Suspense>
                }
              />
            );
          })}
        </Route>

        {/* Standalone App Routes */}
        {appRoutes.map((r) => {
          const Comp = toLazy(r.loader);
          return (
            <Route
              key={r.path}
              path={r.path}
              element={
                <React.Suspense fallback={<Loading />}>
                  <Comp />
                </React.Suspense>
              }
            />
          );
        })}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;