import React, {useState, useEffect} from "react";

function Coins() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
            .then(response => response.json())
            .then(json => {
                setCoins(json)
                setLoading(false);
            });
    }, []);

    // 첼린지 : USD 를 BTC 로 전환해보기
    // input 생성해서 사용자가 가지고 있는 돈으로 얼마만큼의 비트코인을 살 수 있는지 만들어보기
    return (
        <div>
            <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
            {loading ? <strong>Loading...</strong> : (
                <select>
                    {coins.map((coin) => (
                        <option key={coin.id}>{coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD}</option>
                    ))}
                </select>
            )}
        </div>
    );
}

export default Coins;
