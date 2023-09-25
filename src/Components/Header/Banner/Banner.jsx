import { useState } from "react";

const Banner = () => {
    const [isTrue, setIsTrue] = useState(false)
    const handleClickBtn = () => {

    }

    return (
        <div className="mx-auto">
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(/public/images/bg-img.png)' }}>
                <div className="hero-overlay bg-opacity-80"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 text-white text-5xl font-bold">I Grow By Helping People In Need</h1>
                        <div className="flex justify-center flex-wrap mb-5">
                            <input className="p-4 pr-[100px] md:pr-[150px] lg:pr-[200px] rounded-l-lg shadow-md" type="search" name="" id="" placeholder="Search here...." />
                            <button onClick={() => setIsTrue(!false)} className="py-4 px-6 bg-[#FF444A] text-white font-semibold rounded-r-lg hover:bg-[#f45a60]"> Search </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;