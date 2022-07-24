import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-[1200px] min-h-screen relative">
      <LogoBG_/>
      <div
        className={`absolute top-0 right-0 w-full h-screen flex flex-col justify-center items-start opacity-70`}
      >
      
      </div>
      
    </div>
  );
};

export default Home;

// // // // // // // // // // // // //
// // // // // // // // // // // // //

interface LogoBG_Props {
  
}
 
const LogoBG_ = ({}:LogoBG_Props) => {
  return ( 
    <div
        className={`absolute top-0 right-0 w-full h-screen flex flex-col justify-center items-center pointer-events-none`}
      >
        <img
          src={`/assets/images/LwaziNF.png`}
          className={`w-[200px] opacity-10 mb-2 mr-[0px]`}
        />
        <p className={`font-black text-[13px] text-center opacity-[15%] cursor-default`}>
          Market || Build
        </p>
        <p className={`font-black text-[25px] text-center opacity-[15%] cursor-default mt-[-8px]`}>
          Prosper
        </p>
      </div>
   );
}