import PropTypes from "prop-types"
import Swal from 'sweetalert2';


const SingleCard = ({ singleCard }) => {
    const { id, images, title, text_btn_bg_clr, price, description } = singleCard || {};

    const handleDonation = () => {
        const addDonationItem = [];

        const donationItem = JSON.parse(localStorage.getItem("donation"));

        if (!donationItem) {
            addDonationItem.push(singleCard);
            localStorage.setItem("donation", JSON.stringify(addDonationItem));
        }
        else {
            const isExists = donationItem.find(phone => phone.id == id)
            if (!isExists) {
                addDonationItem.push(...donationItem, singleCard);
                localStorage.setItem("donation", JSON.stringify(addDonationItem));
                Swal.fire(
                    'Good job!',
                    'Your Donation added successfully!',
                    'success'
                )
            }
            else {
                Swal.fire(
                    'Sorry!',
                    'You have already donate this group',
                    'error'
                )
            }
        }

    }


    return (
        <div className="flex justify-center mb-24">
            <div className="w-[80%] ">
                <div className="relative">
                    <img src={images} className="w-full" alt="" />
                    <div className="absolute bottom-0 p-10 w-full mix-blend-normal bg-black  bg-opacity-60">

                        <button onClick={handleDonation} style={{ backgroundColor: text_btn_bg_clr }} className="border-none px-6 py-4 rounded-lg text-white btn font-semibold"> Donation ${price} </button>
                    </div>
                </div>

                <div className="mt-10 space-y-6">
                    <h1 className="text-4xl font-bold">{title} </h1>
                    <p>
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};


SingleCard.propTypes = {
    singleCard: PropTypes.object.isRequired,
}
export default SingleCard;