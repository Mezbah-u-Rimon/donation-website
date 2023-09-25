import PropTypes from "prop-types"

const SingleCard = ({ singleCard }) => {
    const { id, images, title, category, ctg_bg_clr, cd_bg_clr, text_btn_bg_clr } = singleCard || {};
    return (
        <div className="flex justify-center relative">
            <div className="w-[80%] h-[80vh]">
                <img src={images} className="w-full h-full " alt="" />
                <div className="absolute bottom-0 p-10 w-[80%] mix-blend-multiply bg-black  bg-opacity-80">
                    <button className="btn"> button </button>
                </div>
            </div>
        </div>
    );
};


SingleCard.propTypes = {
    singleCard: PropTypes.object.isRequired,
}
export default SingleCard;