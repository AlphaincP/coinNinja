let apiKey = '2e5400a8-cf95-43b1-92cc-6da9c1de2246';

fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',{
    method : 'GET',
    headers : {
        'Content-Type':'application/json',
        'Access-Control-Allow-Origin':'http://127.0.0.1:5500/',
        'X-CMC_PRO_API_KEY':`${apiKey}`
    }
}).then(res => res.json())
.then(data =>{
    let cryptoCoin = data.data;
    let coinNinja = '';

    cryptoCoin.map(coin =>{
       coinNinja += `<tr>`;
       coinNinja += `<td>${coin.name}<br><span>${coin.symbol}</span></td>`;
       coinNinja += `<td>${coin.cmc_rank}</td>`;
       coinNinja += `<td>$${Math.round(coin.quote.USD.price)}</td>`;
       coinNinja += `<td>${coin.quote.USD.market_cap}</td>`,'</tr>';
    })
    document.getElementById('data').innerHTML  = coinNinja;
})