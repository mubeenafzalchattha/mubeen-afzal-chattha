import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Blog from "./components/Blog";
import BlogPage from "./components/BlogPage";
import Stack from "./components/Stack";
import Projects from "./components/Projects";
import MoviesAnime from "./components/MoviesAnime";
import Books from "./components/Books";
import Travel from "./components/Travel";
import Contact from "./components/Contact";
import BlogDetail from "./components/BlogDetail";
import BioSidebar from "./components/BioSidebar";
import BlogSidebar from "./components/BlogSidebar";

export default function App() {
  const [route, setRoute] = React.useState(window.location.hash);

  React.useEffect(() => {
    const onHashChange = () => setRoute(window.location.hash);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const blogMatch = route.match(/^#blog\/?([^?]*)?/);
  const blogSlug = blogMatch && blogMatch[1] ? decodeURIComponent(blogMatch[1]) : null;

  const isBlogDetail = route.startsWith("#blog/");

  // const showBio = route === "" || route === "#home" || route === "#books" || route === "#movies" || route === "#travel" || route === "#contact";
  const showBio = route === "" || route === "#home" || route === "#books"  || route === "#travel" || route === "#contact";

  return (
    <div className="h-screen bg-paper text-red-900 flex overflow-hidden">
      <Navbar currentRoute={route} showBio={showBio} />

      <main className="flex-1 p-8 max-w-5xl mx-auto overflow-y-auto hide-scrollbar ml-24 lg:mr-80">
        {(route === "" || route === "#home") && (
          <>
            <Home />
            <Projects />
            <section className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <Blog />
              <Stack />
            </section>
            <section className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* <MoviesAnime /> */}
              <Books />
            </section>
            <section className="mt-8">
              <Travel />
            </section>
            <Contact />
          </>
        )}

        {route === "#blog" && (
          <>
          {/* // <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          //   <div className="md:col-span-2"> */}
              <BlogPage />
            {/* // </div> */}
          
          {/* // </section> */}
          </>
        )}

        {route === "#books" && (
          <Books />
        )}

        {route === "#movies" && (
          <MoviesAnime />
        )}

        {route === "#travel" && (
          <Travel />
        )}

        {route === "#contact" && (
          <Contact />
        )}

        {isBlogDetail && (
          // <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <BlogDetail slug={blogSlug} />
          // </section>
        )}
      </main>

      {showBio && <BioSidebar />}
      {!showBio &&   <BlogSidebar />}

      <style>{`
        :root {
          --paper: #faf7ef;
          --grid-color: #e8e5d8;
        }
        .bg-paper {
          background-color: var(--paper);
          background-image: 
            linear-gradient(var(--grid-color) 0.5px, transparent 0.5px),
            linear-gradient(90deg, var(--grid-color) 0.5px, transparent 0.5px);
          background-size: 30px 30px;
          position: relative;
        }
        .bg-paper::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            radial-gradient(circle at 0.5px 0.5px, rgba(0,0,0,0.015) 0.5px, transparent 0);
          background-size: 15px 15px;
          pointer-events: none;
          z-index: 0;
        }
        .bg-paper > * {
          position: relative;
          z-index: 1;
        }
        .section-title {
          font-weight: 600;
          font-size: 14px;
        }
        .btn {
          background: #0f172a;
          color: white;
          padding: 8px 12px;
          border-radius: 8px;
          font-size: 13px;
          text-decoration: none;
        }
        .btn.ghost {
          background: transparent;
          color: #0f172a;
          border: 1px solid #e5e7eb;
        }
        /* Hide scrollbar but keep scrolling functionality */
        .hide-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;  /* Chrome, Safari, Opera */
        }
      `}</style>
    </div>
  );
}
