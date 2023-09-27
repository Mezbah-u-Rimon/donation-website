import AllCards from "./AllCards";
import PropTypes from "prop-types"


const Cards = ({ cards }) => {

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-24 max-w-6xl mx-auto">
            {
                cards?.map(card => <AllCards key={card.id} card={card}>
                </AllCards>)
            }
        </div>

    );
};

Cards.propTypes = {
    cards: PropTypes.array.isRequired,
    inputData: PropTypes.string.isRequired,
}

export default Cards;