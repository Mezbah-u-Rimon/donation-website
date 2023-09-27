import { Chart } from "react-google-charts";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Statistics = () => {
    const priceCards = useLoaderData();
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalPrices, setTotalPrices] = useState(0);

    useEffect(() => {
        const prices = priceCards.reduce((previous, current) => previous + current.price, 0);
        setTotalPrices(prices);

        const donationItem = JSON.parse(localStorage.getItem("donation"));
        console.log(donationItem);

        if (donationItem) {
            const total = donationItem.reduce((previous, current) => previous + current.price, 0);
            setTotalPrice(total)
        }
        else {
            setTotalPrice(0);
        }
    }, [priceCards]);

    //pie Chart

    const data = [
        ["Task", 'totalPrices'],
        ["Total Donation", totalPrices - totalPrice],
        ["Your Donation", totalPrice],
    ];

    const options = {
        title: "Your donation percentage from total donation",
    };

    return (
        <div>
            <Chart
                chartType="PieChart"
                data={data}
                options={options}
                width={"100%"}
                height={"600px"}
            />
        </div>
    );
};


export default Statistics;