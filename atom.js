window.onload = async () => {
    if (!window.keplr) {
        alert("Please install keplr extension");
    } else 
    await window.keplr.experimentalSuggestChain({
    chainId: "theta-testnet-001",
    chainName: "Theta_test",
    rpc: "http://54.39.243.226:20657", // replace with your rpc url
    rest: "http://54.39.243.226:1017", // replace with your rest api url
    bip44: {
        coinType: 118,
    },
    bech32Config: {
        bech32PrefixAccAddr: "coho",
        bech32PrefixAccPub: "coho" + "pub",
        bech32PrefixValAddr: "coho" + "valoper",
        bech32PrefixValPub: "coho" + "valoperpub",
        bech32PrefixConsAddr: "coho" + "valcons",
        bech32PrefixConsPub: "coho" + "valconspub",
    },
    currencies: [ 
        { 
            coinDenom: "ATOM", 
            coinMinimalDenom: "uatom", 
            coinDecimals: 6, 
            coinGeckoId: "uatom", 
        }, 
    ],
    feeCurrencies: [
        {
            coinDenom: "ATOM",
            coinMinimalDenom: "uatom",
            coinDecimals: 6,
            coinGeckoId: "uatom",
        },
    ],
    stakeCurrency: {
        coinDenom: "ATOM",
        coinMinimalDenom: "uatom",
        coinDecimals: 6,
        coinGeckoId: "uatom",
      },
    coinType: 118,
    gasPriceStep: {
        low: 0.01,
        average: 0.025,
        high: 0.03,
    },
    
    features: [
        "cosmwasm", "ibc-transfer", "ibc-go", "wasmd_0.24+"
        ],
});
}
