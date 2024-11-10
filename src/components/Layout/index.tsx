import { ReactNode } from "react";
import Head from "next/head";
import Link from "next/link";
import Banner from "../Banner";
import Navbar from "../Navbar";
import Skills from "../Skills";
import Experience from "../Experience";
import Projects from "../Projects";
import Testimonials from "../Testimonials";

// Define the props type for the Layout component
interface LayoutProps {
  children: ReactNode;
  title?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title = "Arvind Kumar Thoppe" }) => {
  return (
    <>
      <div>
        <Head>
          <title>{title}</title>
          <meta name="description" content="This is a sample app layout." />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <header className=" mx-auto w-full  ">
          <Navbar />
          <Banner />
        </header>

        <main className="w-full mx-auto">
          <Skills />
          <Experience />
          <Projects />
          <Testimonials />
        </main>

        <footer className="w-full bg-white dark:bg-gray-150">
          <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <div className="sm:flex sm:items-center sm:justify-between">
              <span className="text-sm text-gray-800 sm:text-center dark:text-gray-400">
                © {new Date().getFullYear()}{" "}
                <a target="_blank" href="https://www.arvindthoppe.in/" className="hover:underline">
                  arvindthoppe.in
                </a>
                . All Rights Reserved.
              </span>
              <div className="flex mt-4 sm:justify-center sm:mt-0">
                <a target="_blank" href="https://github.com/ARVINDTRONICS" className="text-gray-500 hover:text-gray-900  ms-5">
                  <span className="[&>svg]:h-5 [&>svg]:w-5">
                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fill-rule="evenodd"
                        d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="sr-only">GitHub account</span>
                </a>

                <a target="_blank"  href="mailto:tsarvind996@gmail.com" className="text-gray-500 hover:text-gray-900 ms-5">
                  <span className="[&>svg]:h-5 [&>svg]:w-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 488 512">
                      <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                    </svg>
                  </span>
                  <span className="sr-only"> account</span>
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/arvindthoppe" className="text-gray-500 hover:text-gray-900  ms-5">
                  <span className="[&>svg]:h-5 [&>svg]:w-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
                      <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                    </svg>
                  </span>
                  <span className="sr-only">Linked In</span>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Layout;
