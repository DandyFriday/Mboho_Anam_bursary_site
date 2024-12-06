import { assets } from "../assets/assets";

export const Hero = () => {
    return (
        <section
            className="mt-4 relative min-h-screen bg-center bg-green-950 flex justify-center items-center"
            style={{
                backgroundImage: `url(${assets.Flag_of_Akwa_Ibom}), url(${assets.logo_web})`,
                backgroundSize: "100% auto", // First image larger than the second
                backgroundPosition: "left center",
                backgroundRepeat: "no-repeat",
          
            }}
            
        >
            {/* Green Overlay */}
            <div className="absolute inset-0 bg-primary bg-opacity-85"></div>

            {/* Content */}
            <div className="absolute w-11/12 lg:w-10/12 flex flex-col justify-start">
                <div className="w-[976px] flex flex-col justify-start items-start text-orange gap-6 lg:gap-12 ml-[-46px] text-center">
                    <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl md:w-11/12 lg:w-8/12">
                      Welcome to Anam , We are Committed to Growth and Development
                    </h1>
                    <p className="md:w-11/12 lg:w-8/12 text-white ml-[-20px]">
                        Giving a bright future to our people is a none negotaible task we must acheive. We link you with Lagos’s finest and most affordable residences -{" "}
                        <span className="font-bold">
                            Zero agent fees, middlemen payments & hassles.
                        </span>
                    </p>
                </div>

                <div className="absolute right-[-6.6rem] top-2/4 -translate-y-1/2  hidden lg:block">
                    <img
                        src={assets.chairman_2}
                        alt="Highlight"
                        className="w-[36rem] h-auto object-contain  shadow-lg 
                        rounded-tl-[150px] rounded-tr-[0px] rounded-br-[150px] rounded-bl-[0px]
                        border-3"
                    />
                </div>


            </div>
        </section>
    );
};
