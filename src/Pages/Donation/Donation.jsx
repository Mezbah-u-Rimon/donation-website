import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";


const Donation = () => {
    const [donation, setDonation] = useState([]);
    const [noData, setNoData] = useState("");
    const [isShow] = useState(false);
    const [hideData, setHideData] = useState(4);

    useEffect(() => {
        const donationItem = JSON.parse(localStorage.getItem("donation"));

        if (donationItem) {
            setDonation(donationItem);
        }
        else {
            setNoData("You have not made any donation")
        }

    }, [])


    return (
        <div className="max-w-6xl mx-auto mb-20 mt-10">
            {
                noData ? (<p className="h-[80vh] flex justify-center items-center text-2xl font-bold"> {noData} </p>) : (
                    <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {
                                isShow ? (donation.map(donationCard => <DonationCard key={donationCard.id} donationCard={donationCard}></DonationCard>))
                                    : (donation.slice(0, hideData).map(donationCard => <DonationCard key={donationCard.id} donationCard={donationCard}></DonationCard>))
                            }
                        </div>

                        {
                            donation.length > 4 &&
                            <button onClick={() => setHideData(donation.length)} className={hideData === donation.length ? "hidden" : "px-7 py-2 my-10 bg-[#79C23F] btn block mx-auto"}>
                                See All
                            </button>

                        }

                    </div>
                )}
            <div>
            </div>
        </div>
    );
};

export default Donation;