import PropTypes from "prop-types"
import { Link } from "react-router-dom";

const AllCards = ({ card }) => {
    const { id, images, title, category, ctg_bg_clr, cd_bg_clr, text_btn_bg_clr } = card;

    return (
        <Link to={`/cardDetails/${id}`}>
            <div style={{ backgroundColor: cd_bg_clr, color: text_btn_bg_clr }} className="relative flex flex-col justify-center rounded-xl bg-clip-border shadow-md">

                <div className="relative rounded-t-xl">
                    <img
                        src={images}
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="p-6 space-y-2">
                    <p style={{ backgroundColor: ctg_bg_clr }} className="inline rounded py-1 px-2 text-base font-medium">
                        {category}
                    </p>

                    <h1 className="text-[18px] font-bold">
                        {title}
                    </h1>
                </div>
            </div>
        </Link>
    );
};

AllCards.propTypes = {
    card: PropTypes.object.isRequired,
}
export default AllCards;