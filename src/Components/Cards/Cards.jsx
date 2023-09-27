import { useEffect, useState } from "react";
import AllCards from "./AllCards";
import PropTypes from "prop-types"
import { useSubmit } from "react-router-dom";


const Cards = ({ cards, inputData }) => {
    const [categoryName, setCategoryName] = useState("");
    //main cards ta akhane rakhbo
    const [inputCard, setInputCard] = useState([]);

    //atar moddhe filter kora man gula pathabo
    const [inputValue, setInputValue] = useState([]);

    const submit = useSubmit();


    useEffect(() => {
        setCategoryName(inputData);

        console.log(submit);

        if (categoryName) {

            const filterCards = inputCard?.filter(item => item.category.toLowerCase().includes(categoryName.toLowerCase()));
            console.log(filterCards);
            setInputValue(filterCards);

        } else {
            setInputCard(cards)
            setInputValue(cards);
        }

    }, [inputValue, inputData, cards, inputCard, categoryName, submit]);

    /*
      const [filterString, setFilterString] = useState('');

      const [filteredData, setFilteredData] = useState([]);

      useEffect(() => {
        // Filter the data when the filterString or jsonData changes
        const filtered = jsonData.filter((item) =>
          item.name.toLowerCase().includes(filterString.toLowerCase())
        );

        setFilteredData(filtered);
      }, [filterString, jsonData]);

    */

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-24 px-14 -mt-10">
            {
                inputCard?.map(card => <AllCards key={card.id} card={card}>
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