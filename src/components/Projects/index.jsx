import React from "react";
import IBAA from "../../../public/2.png";
import OLC from "../../../public/checkinonline.jpg";
import OPS from "../../../public/OPS.png";
import Jumeirah from "../../../public/jet.jpg";
import WW from "../../../public/ww.png";
import Travel from "../../../public/travel.jpeg";
import Pulse from "../../../public/pulse.jpeg";
import Image from "next/image";

const Projects = () => {
  return (
    <div id="projects" className="w-full flex justify-center items-center bg-gradient-to-r z-50 from-green-100 to-lime-100">
      <div className="w-full grid justify-center   grid-cols-1 gap-4 ">
        <div className="py-12  lg:py-24 w-full   sm:py-32">
          <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
            <p className="text-lg text-center font-medium text-gray-600 font-pj">Enough Talk. Show me what you got </p>
            <h2 className="mt-4 text-3xl text-center font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">Projects</h2>

            <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-4">
              <div className="relative lg:row-span-1 lg:col-span-2 ">
                <div className="absolute inset-px  bg-white rounded-lg"></div>
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] ">
                  <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                    <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                      <a target="_blank" href="https://webcheckin.jumeirah.com" alt="https://webcheckin.jumeirah.com" className="underline">
                        Online Check-in
                      </a>
                      {" 🔗"}
                    </p>
                    <p className="mt-2 max-w-xl text-sm/6 text-gray-600  text-left">
                      A Hotel Online Check-In<span className="font-bold "> (first in the UAE region in hospitality industry)</span> Web App built with <b>MERN Stack</b> that uses a third party solution with{" "}
                      <b>AI Vision, OCR extraction for identity documents and Facial Recognition </b> to provide a seamless pre-arrival checkin experience for all guests of Jumeirah Hospitality.We developed the complete web app in-house with a lean
                      team that helped provide a premium experience and improved efficiency for the Hotel Operations team.
                    </p>
                  </div>
                  <div className="relative min-h-[20rem] lg:min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                    <div className="absolute inset-x-5 bottom-0 top-10 overflow-hidden rounded-t-[6cqw] border-x-[2cqw] border-t-[3cqw] border-gray-700 bg-transparent shadow-2xl">
                      <Image src={OLC} className="w-full h-full object-cover object-left bg-no-repeat" alt="project" />
                    </div>
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 "></div>
              </div>
              <div className="relative max-lg:row-start-3 lg:col-start-3 lg:row-start-1">
                <div className="absolute inset-px rounded-lg bg-white"></div>
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
                  <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                    <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                      <a target="_blank" href="https://insideburjalarab.com/" alt="https://insideburjalarab.com/" className="underline">
                        Inside Burj Al Arab
                      </a>
                      {" 🔗"}
                    </p>
                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600 text-left">
                      An E-commerce ticketing website but with <b>React,SpringBoot and Sitecore CMS </b>to get entry passes for an exclusive tour to explore the secrets of the iconic Burj Al Arab Hotel.I was involved in a{" "}
                      <b>complete rebrand of the website in 2022</b> and also introduced additional features such as <b>add-ons,upsell flows,payment integrations and package tours</b> in the booking journey resulting in increased traffic,smooth
                      experience and growth in revenue.Also completed the hand overof the website to <b>Dubai Holding Entertainment.</b>
                    </p>
                  </div>
                  <div className="flex flex-1 justify-center items-center [container-type:inline-size] max-lg:py-6 lg:pb-2">
                    <Image src={IBAA} className="w-72 h-72 object-cover object-left bg-no-repeat" alt="project" />
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
              </div>

              <div className="relative max-lg:row-start-2">
                <div className="absolute inset-px rounded-lg bg-white "></div>
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                  <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                    <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Front Office Operations hub</p>
                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600 text-left">
                      Developed a sophisticated Front Oﬃce Operations Dashboard that provides real-time insights, empowering the front oﬃce team with capabilities to view upcoming online checked-in guests, sign e-registration cards, payment
                      status,view guest reports and more.
                    </p>
                  </div>
                  <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2 ">
                    <Image className="w-full h-full object-contain object-left bg-no-repeat " src={OPS} alt="project" />
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 "></div>
              </div>
              <div className="relative lg:row-span-1 lg:col-span-2">
                <div className="absolute inset-px rounded-lg bg-white "></div>
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                  <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                    <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                      <a target="_blank" href="https://www.jumeirah.com/en" alt="https://www.jumeirah.com/en" className="underline">
                        Rebrand of Jumeirah
                      </a>
                      {" 🔗"}
                    </p>
                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600 text-left">
                      Developed multiple pages of the website using ReactJS,NodeJS and SitecoreCMS within short span that led to increase of direct channel bookings and popularity of the brand in the UAE.
                    </p>
                  </div>
                  <div className="relative min-h-[20rem] lg:min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                    <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-transparent shadow-2xl">
                      <Image src={Jumeirah} className="w-full h-full object-cover object-center bg-no-repeat" alt="project" />
                    </div>
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 "></div>
              </div>
              <div className="relative lg:row-span-1 lg:col-span-3">
                <div className="absolute inset-px rounded-lg bg-white "></div>
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                  <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                    <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Travel Concierge for Agents</p>
                    <p className="mt-2 min-w-lg text-sm/6 text-gray-600 text-left">
                      Personalised Travel Concierge app built with ReactJS/NodeJS/PostgreSQL that uses AI based recommendation engine and customer taste prediction algorithm.It helps travel agents of a major lifestyle bank in Bahrain to make
                      flight/hotel reservations and resulted in increased revenue.
                    </p>
                  </div>
                  <div className="relative min-h-[20rem] lg:min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                    <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[2cqw] border-x-[1cqw] border-t-[1cqw] border-gray-700 bg-transparent shadow-2xl">
                      <Image src={Travel} className="w-full h-full object-cover object-center bg-no-repeat" alt="project" />
                    </div>
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 "></div>
              </div>
              <div className="relative lg:row-span-1">
                <div className="absolute inset-px rounded-lg bg-white  "></div>
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                  <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                    <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                      <a target="_blank" href=" https://wildwadi.com/en" alt=" https://wildwadi.com/en" className="underline">
                        Wildwadi.com
                      </a>
                      {" 🔗"}
                    </p>
                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600 text-left">
                      <br />
                      An E-commerce ticketing website but with React & NodeJS to buy entry passes to the Wildwadi Waterpark.
                    </p>
                  </div>

                  <div className="flex flex-1 justify-center items-center [container-type:inline-size] max-lg:py-6 lg:pb-2">
                    <Image src={WW} className="w-3/4  object-contain object-left bg-no-repeat" alt="project" />
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5  lg:rounded-[0.25rem]"></div>
              </div>
              <div className="relative lg:row-span-1 lg:col-span-2">
                <div className="absolute inset-px rounded-lg bg-white "></div>
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] ">
                  <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                    <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Super App</p>
                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600 text-left">
                      'PULSE',a web application empowering our colleagues to complete over 30 operational tasks directly on the Property Management System (PMS) using mobile/tablet browsers which reduced check-in duration at the front desk under 5
                      minutes.
                    </p>
                  </div>
                  <div className="relative min-h-[15rem] lg:min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                    <div className=" absolute bottom-0 overflow-hidden  bg-transparent shadow-2xl">
                      <Image src={Pulse} className="w-full h-full object-cover object-center bg-no-repeat" alt="project" />
                    </div>
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 "></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
