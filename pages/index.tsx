import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-[1200px] min-h-screen relative">
      <LogoBG_/>
      <div
        className={`absolute top-0 right-0 w-full h-screen flex flex-col justify-center items-end`}
      >
        <div
        className={`w-[300px] h-[400px] rounded-[4px] bg-black/5`}
      >
        
      </div>
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
          className={`w-[200px] opacity-5 mb-2 mr-[10px]`}
        />
        <p className={`font-black text-[13px] text-center opacity-[15%] cursor-default`}>
          Market || Build || Prosper
        </p>
      </div>
   );
}