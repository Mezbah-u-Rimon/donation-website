import { Link } from "react-router-dom";
import PropTypes from "prop-types"

const DonationCard = ({ donationCard }) => {
    const { images, title, text_btn_bg_clr, price, category, ctg_bg_clr, cd_bg_clr } = donationCard || {};


    return (
        <div>
            <div style={{ backgroundColor: cd_bg_clr, color: text_btn_bg_clr }} className="relative flex w-full flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                    <img
                        src={images}
                        alt="image"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="p-6">
                    <p style={{ backgroundColor: ctg_bg_clr }} className="inline rounded py-1 px-2 text-base font-medium">
                        {category}
                    </p>
                    <h4 className="mb-2 block font-sans text-2xl font-semibold">
                        {title}
                    </h4>
                    <p style={{ color: text_btn_bg_clr }} className="font-semibold mb-8">
                        ${price}
                    </p>
                    <Link>
                        <button style={{ backgroundColor: text_btn_bg_clr }} className="border-none px-6 py-4 rounded-lg text-white btn font-semibold"> View Details </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

DonationCard.propTypes = {
    donationCard: PropTypes.object.isRequired,
}
export default DonationCard;