import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface BonganiArc_Props {}

const BonganiArc_ = ({}: BonganiArc_Props) => {
  return (
    <div
      className={`flex flex-col items-center justify-center w-full min-h-screen relative`}
    >
      <div
        className={`flex flex-col items-center justify-center w-full h-screen relative`}
      >
        <div className={`absolute top-0 w-full h-screen overflow-hidden`}>
          <img
            src={`https://images.pexels.com/photos/7061672/pexels-photo-7061672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
            className={`w-full object-cover`}
          />
        </div>
        <div
          className={`absolute top-0 w-full h-screen overflow-hidden topFade`}
        />
        {/* 👇️👇️👇️ Services */}
        <div
          className={`flex flex-row items-center justify-center w-full min-h-[20px] relative mb-[10px]`}
        >
          <p className={`text-[16px] font-normal text-white`}>Plumbing</p>
          <div className={`w-[5px] h-[5px] rounded-[50%] bg-yellow-400 m-1`} />
          <p className={`text-[16px] font-normal text-white`}>Landscaping</p>
          <div className={`w-[5px] h-[5px] rounded-[50%] bg-yellow-400 m-1`} />
          <p className={`text-[16px] font-normal text-white`}>Electrical</p>
          <div className={`w-[5px] h-[5px] rounded-[50%] bg-yellow-400 m-1`} />
          <p className={`text-[16px] font-normal text-white`}>Architecture</p>
        </div>
        <div
          className={`flex flex-row items-center justify-center bg-yellow-400/30 w-[650px] min-h-[1px] relative`}
        ></div>
        {/* 👇️👇️👇️ Main Header */}
        <div
          className={`flex flex-row items-center justify-center w-full min-h-[20px] relative`}
        >
          <p className={`text-[45px] font-light text-white m-1`}>
            Quality Workmanship.
          </p>
          <p className={`text-[45px] font-bold text-yellow-400 m-1`}>
            Amazing Price.
          </p>
        </div>
        <div
          className={`flex flex-row items-center justify-center bg-yellow-400/30 w-[450px] min-h-[1px] relative`}
        ></div>
        {/* 👇️👇️👇️ Hero Copy */}
        <div
          className={`flex flex-col items-center justify-center w-[650px] min-h-[20px] relative mb-3`}
        >
          <p className={`text-[16px] font-normal text-white text-center m-1`}>
            Ipsum dolore officia tempor magna sint ea ex anim laborum occaecat
            enim nostrud nostrud. Cupidatat in occaecat eiusmod in labore
            deserunt! Consectetur officia aliqua. Reprehenderit exercitation
            deserunt ipsum Lorem ea officia.
          </p>
        </div>
        {/* 👇️👇️👇️ Hero Ratings */}
        <div
          className={`flex flex-row items-center justify-center w-[150px] relative`}
        >
          <div
            className={`flex flex-row items-center justify-center w-[150px] relative`}
          >
            <FontAwesomeIcon
            // @ts-ignore
              icon={faFacebook}
              className={`h-[25px] w-[25px] cursor-pointer text-white transition-all duration-200 m-[1px]`}
              onClick={() => {}}
            />
            <div
              className={`flex flex-col items-center justify-center ml-[-25px] w-[150px] h-[35px] relative`}
            >
              <div
                className={`flex flex-row items-center justify-center w-[150px] h-[35px] relative`}
              >
                <FontAwesomeIcon
                  icon={faStar}
                  className={`h-[15px] w-[15px] cursor-pointer text-yellow-500 transition-all duration-200 m-[1px]`}
                  onClick={() => {}}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  className={`h-[15px] w-[15px] cursor-pointer text-yellow-500 transition-all duration-200 m-[1px]`}
                  onClick={() => {}}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  className={`h-[15px] w-[15px] cursor-pointer text-yellow-500 transition-all duration-200 m-[1px]`}
                  onClick={() => {}}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  className={`h-[15px] w-[15px] cursor-pointer text-yellow-500 transition-all duration-200 m-[1px]`}
                  onClick={() => {}}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  className={`h-[15px] w-[15px] cursor-pointer text-yellow-500 transition-all duration-200 m-[1px]`}
                  onClick={() => {}}
                />
              </div>
              <p className={`text-white text-[12px] font-light`}>5.0 Rating</p>
            </div>
          </div>
          <div
            className={`flex flex-row items-center justify-center w-[150px] relative`}
          >
            <FontAwesomeIcon
            // @ts-ignore
              icon={faGoogle}
              className={`h-[22px] w-[22px] cursor-pointer text-white transition-all duration-200 m-[1px]`}
              onClick={() => {}}
            />
            <div
              className={`flex flex-col items-center justify-center ml-[-25px] w-[150px] h-[35px] relative`}
            >
              <div
                className={`flex flex-row items-center justify-center w-[150px] h-[35px] relative`}
              >
                <FontAwesomeIcon
                  icon={faStar}
                  className={`h-[15px] w-[15px] cursor-pointer text-yellow-500 transition-all duration-200 m-[1px]`}
                  onClick={() => {}}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  className={`h-[15px] w-[15px] cursor-pointer text-yellow-500 transition-all duration-200 m-[1px]`}
                  onClick={() => {}}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  className={`h-[15px] w-[15px] cursor-pointer text-yellow-500 transition-all duration-200 m-[1px]`}
                  onClick={() => {}}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  className={`h-[15px] w-[15px] cursor-pointer text-yellow-500 transition-all duration-200 m-[1px]`}
                  onClick={() => {}}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  className={`h-[15px] w-[15px] cursor-pointer text-yellow-500 transition-all duration-200 m-[1px]`}
                  onClick={() => {}}
                />
              </div>
              <p className={`text-white text-[12px] font-light`}>5.0 Rating</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BonganiArc_;