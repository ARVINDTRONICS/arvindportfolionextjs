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
    <div id="projects" className="w-full flex justify-center items-center bg-gradient-to-r from-zinc-100 to-zinc-300">
      <div className="w-full grid justify-center   grid-cols-1 gap-4 ">
        <div className=" py-24 w-full   sm:py-32">
          <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
            <h2 className="text-center text-base/7 font-semibold text-black">WORK</h2>
            <p className="mx-auto mt-2 max-w-lg text-balance text-center text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">Projects</p>

            <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-4">
             
              <div className="relative lg:row-span-1 lg:col-span-2">
                <div className="absolute inset-px  bg-white "></div>
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] ">
                  <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                    <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Online Check-in</p>
                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                      <a target="_blank" href="https://webcheckin.jumeirah.com" alt="https://webcheckin.jumeirah.com" className="underline">
                        https://webcheckin.jumeirah.com
                      </a>{" "}
                      for online check-in <span className="font-bold">(first in the UAE region in hospitality industry)</span>that uses OCR- recognition capabilities to scan documents and Facial recognition for guest validation, thus streamlining the
                      check-in process and improving guest experience.
                    </p>
                  </div>
                  <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                    <div className="absolute inset-x-5 bottom-0 top-10 overflow-hidden rounded-t-[6cqw] border-x-[2cqw] border-t-[3cqw] border-gray-700 bg-transparent shadow-2xl">
                      <Image src={OLC} className="w-full h-full object-cover object-left bg-no-repeat"  alt="project"/>
                    </div>
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 "></div>
              </div>
              <div className="relative max-lg:row-start-3 lg:col-start-3 lg:row-start-1">
                <div className="absolute inset-px rounded-lg bg-white"></div>
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
                  <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                    <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Inside Burj Al Arab</p>
                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                      {" "}
                      <a target="_blank" href="https://insideburjalarab.com/" alt="https://insideburjalarab.com/" className="underline">
                        https://insideburjalarab.com/
                      </a>{" "}
                      <br />
                      E-commerce ticketing website for an exclusive tour to explore the secrets of the Burj Al Arab HotelDubai Holding Entertainment
                    </p>
                  </div>
                  <div className="flex flex-1 justify-center items-center [container-type:inline-size] max-lg:py-6 lg:pb-2">
                    <Image src={IBAA} width="300" height="100" alt="project" />
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
              </div>

              <div className="relative max-lg:row-start-2">
                <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                  <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                    <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Front Office Operations hub</p>
                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                      Internal Front Office Operations Dashboard that provides real-time insights, empowering the front office team with capabilities to view upcoming online checked-in guests, e-registration cards, payment status, reports, and more.
                    </p>
                  </div>
                  <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2 ">
                    <Image className="w-full h-full object-contain object-left bg-no-repeat " src={OPS} alt="project" />
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
              </div>
              <div className="relative lg:row-span-1 lg:col-span-2">
                <div className="absolute inset-px rounded-lg bg-white "></div>
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                  <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                    <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Jumeirah.com</p>
                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                      {" "}
                      <a target="_blank" href="https://www.jumeirah.com/en" alt="https://www.jumeirah.com/en" className="underline">
                        https://www.jumeirah.com/en
                      </a>{" "}
                      for Jumeirah, a member of Dubai Holding and a global luxury hotel company, operates a world-class portfolio of 26 properties, comprising beachfront resorts, city hotels, and luxury serviced residences across the Middle East,
                      Europe, and Asia.
                    </p>
                  </div>
                  <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                    <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-transparent shadow-2xl">
                      <Image src={Jumeirah} className="w-full h-full object-cover object-left bg-no-repeat" alt="project" />
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
                    <p className="mt-2 min-w-lg text-sm/6 text-gray-600 max-lg:text-center">Personalized travel concierge application for a major lifestyle bank that serves their premium customers</p>
                  </div>
                  <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                    <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[2cqw] border-x-[1cqw] border-t-[1cqw] border-gray-700 bg-transparent shadow-2xl">
                      <Image src={Travel} className="w-full h-full object-full object-left bg-no-repeat" alt="project" />
                    </div>
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 "></div>
              </div>
              <div className="relative lg:row-span-1">
                <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] "></div>
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                  <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                    <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">WildWadi</p>
                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                      {" "}
                      <a target="_blank" href=" https://wildwadi.com/en" alt="https://wildwadi.com/en" className="underline">
                        https://wildwadi.com/en
                      </a>{" "}
                      <br />
                      E-commerce ticketing website for Wildwadi waterpark managed by Dubai Holding Entertainment
                    </p>
                  </div>

                  <div className="flex flex-1 justify-center items-center [container-type:inline-size] max-lg:py-6 lg:pb-2">
                    <Image src={WW} className="w-3/4  object-contain object-left bg-no-repeat"  alt="project"/>
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-[0.25rem]"></div>
              </div>
              <div className="relative lg:row-span-1 lg:col-span-2">
                <div className="absolute inset-px rounded-lg bg-white "></div>
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                  <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                    <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Super App</p>
                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                      'PULSE',a web application allowing front office colleagues to complete over 30 operations tasks directly on the Property Management System (PMS) using tablet browsers, leading to a company-wide adoption and increased operational
                      efficiency.
                    </p>
                  </div>
                  <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                    <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden  bg-transparent shadow-2xl">
                      <Image src={Pulse} className="w-full h-full object-cover object-left bg-no-repeat" alt="project"/>
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
