import { useState } from "react";
import Cards from "../../Cards/Cards";
import { useSubmit } from "react-router-dom";

const Banner = () => {
    // const [inputData, setInputData] = useState();

    let submit = useSubmit()

    // const handleSubmit = e => {
    //     e.preventDefault();
    //     setInputData(e.target.search.value)
    // }
    // console.log(inputData);

    return (
        <div className="mx-auto">
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/4dhXY7t/bg-img.png)', backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
                <div style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }} className="hero-overlay"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 text-black text-3xl md:text-5xl font-bold">I Grow By Helping People In Need</h1>

                        <form onChange={(event) => {
                            submit(event.currentTarget);
                        }} /* onSubmit={handleSubmit} */>

                            <div className="flex justify-center flex-wrap mb-5">
                                <input className="p-4 pr-[100px] md:pr-[150px] lg:pr-[200px] rounded-l-lg text-black shadow-2xl" type="search" name="search" id="" placeholder="Search here...." />
                                <button type="submit" className="py-4 px-6 bg-[#FF444A] text-white font-semibold rounded-r-lg hover:bg-[#f45a60]"> Search </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* <Cards inputData={inputData}></Cards> */}
        </div>
    );
};

export default Banner;