import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SingleCard from "./SingleCard";


const CardDetails = () => {
    const [singleCard, setSingleCard] = useState(null);
    const { id } = useParams();
    const cards = useLoaderData();


    useEffect(() => {

        const card = cards.find(card => card.id === parseFloat(id));
        setSingleCard(card);

    }, [cards, id])


    return (
        <div className="mx-auto max-w-6xl">
            <SingleCard singleCard={singleCard}></SingleCard>
        </div>
    );
};

export default CardDetails;