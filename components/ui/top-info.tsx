// const Info = () => {
//     return ( 
//         <div className="w-full flex flex-col justify-center  bg-slate-950">
//               <div>
//                 <h1 className="text-white text-center text-3xl md:text-5xl mb-4 font-bold mt-10 ">
//                   Search AI Tools with
//                 </h1>
//               </div>
//               <div>
//                 <h1 className="text-center font-medium text-base md:text-lg text-[#FFFFFF]/[.48] mb-8 ">
//                 Build software faster using powerful AI tools build by trusted developers
//                 </h1>
//               </div>

//             </div>
//      );
// }
 
// export default Info;
"use client";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import { DevInfo } from "./dev-info";
import { MovingBorderButton} from "./moving-border-demo";
export function TopInfo() {
  const words = [
    {
      text: "Search",
    },
    {
      text: "awesome",
    },
    {
      text: "tools",
    },
    {
      text: "with",
    },
    {
      text: "AI Store",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <>
      <div className="flex flex-col items-center justify-center h-[25rem] w-full  bg-slate-950 -10 ">
        <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
          Build software faster using powerful AI tools build by trusted developers
        </p>
        <TypewriterEffectSmooth words={words} />
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
          {/* <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
            Join now
            </button>
            <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
            Signup
          </button> */}
          
          <MovingBorderButton />
        </div>
      </div>
      <div className="bg-slate-950">
        <DevInfo />
      </div>
    </>
  );
}
// Build software faster using powerful AI tools build by trusted developers
// Search Tools the right way