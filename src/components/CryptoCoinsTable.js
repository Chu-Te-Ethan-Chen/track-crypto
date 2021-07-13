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
    <section className="flex items-center justify-center bg-gray-900">
      <div className="container mx-auto max-w-4xl">
        <div className="col-span-12">
          <div className="overflow-auto lg:overflow-visible">
            <table
              className="table text-gray-400 border-separate space-y-6 text-sm"
              style={{ borderSpacing: "0 15px" }}
            >
              <thead className="bg-yellow-100 text-blue-900">
                <tr className="border-solid border-2 border-yellow-500">
                  <th className="w-1/5 text-left py-3 px-6 font-semibold text-sm">
                    Stock
                  </th>
                  <th className="text-left py-3 px-6 font-semibold text-sm">
                    Price
                  </th>
                  <th className="w-1/6 text-left py-3 px-6 font-semibold text-sm">
                    24h %
                  </th>
                  <th className="w-1/6 text-left py-3 px-6 font-semibold text-sm">
                    7d %
                  </th>
                  <th className="w-1/5 text-left py-3 px-6 font-semibold text-sm">
                    Market Cap
                  </th>
                  <th className="text-left py-3 px-6 font-semibold text-sm">
                    Volumn
                  </th>
                  <th className="w-1/4 text-left py-3 px-6 font-semibold text-sm">
                    Chart
                  </th>
                </tr>
              </thead>
              <tbody
                className="bg-white text-gray-900"
                style={{ height: 6 + "em" }}
              >
                {DUMMY_CRYPTOCOINS.map((coin) => (
                  <tr key={coin.id} className="position-relative">
                    <td className="w-1/5 text-left py-3 pl-6">{coin.name}</td>
                    <td className="text-left py-3 pl-6">$32,523.32</td>
                    <td className="w-1/6 text-left py-3 pl-6">2.81%</td>
                    <td className="w-1/5 text-left py-3 pl-6">3.79%</td>
                    <td className="text-left py-3 pl-6">$614,889,097,430</td>
                    <td className="w-1/4 text-left py-1">$20,883,028,640</td>
                    <td>Graph</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CryptoCoinsTable;
