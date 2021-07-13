const DUMMY_CRYPTOCOINS = [
  {
    id: "bitcoinmono",
    symbol: "btcmz",
    name: "BitcoinMono",
  },
  {
    id: "bitcoin-network-demand-set",
    symbol: "byte3",
    name: "Bitcoin Network Demand Set",
  },
  {
    id: "bitcoin-networks",
    symbol: "btcn",
    name: "Bitcoin Networks",
  },
];

const CryptoCoinsTable = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>24h %</th>
          <th>7d %</th>
          <th>MartketCap</th>
          <th>Volume</th>
          <th>Chart</th>
        </tr>
      </thead>
      <tbody>
        {DUMMY_CRYPTOCOINS.map((coin) => (
          <tr key={coin.id}>
            <td>{coin.name}</td>
            <td>$32,523.32</td>
            <td>2.81%</td>
            <td>3.79%</td>
            <td>$614,889,097,430</td>
            <td>$20,883,028,640</td>
            <td>Graph</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CryptoCoinsTable;
