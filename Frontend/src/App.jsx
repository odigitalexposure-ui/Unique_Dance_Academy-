import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import { motion as Motion } from "framer-motion";
import MainLayout from "./layout/MainLayout";


// Pages
const Home = lazy(() => import("./Pages/Home"));
const About = lazy(() => import("./Pages/About"));
const Contact = lazy(() => import("./Pages/Contact"));
const Gallery = lazy(() => import("./Pages/Gallery"));
const Classes = lazy(() => import("./Pages/Classes"));

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-[60vh] w-full">
      
      <Motion.div
        className="w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-t-transparent border-indigo-500"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 1,
          ease: "linear",
        }}
      />

      <Motion.div
        className="absolute w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 blur-lg opacity-70"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};
const App=()=>{
const router = createBrowserRouter([
  {
    path: "/",
    element: <Suspense fallback={<Loader />}><MainLayout /></Suspense>,
    children: [
      { index: true, element: <Suspense fallback={<Loader />}><Home /></Suspense> },
      { path: "about", element: <Suspense fallback={<Loader />}><About /></Suspense> },
      { path: "contact", element: <Suspense fallback={<Loader />}><Contact /></Suspense> },
      { path: "gallery", element: <Suspense fallback={<Loader />}><Gallery /></Suspense> },
      { path: "classes", element: <Suspense fallback={<Loader />}><Classes /></Suspense> },
    ],
  },
]);

 return <RouterProvider router={router} />
}
export default App;
