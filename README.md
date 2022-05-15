## Theta theta-testnet-001 keplr wallet integration
<!--
#### Requirements 
[keplr wallet extension](https://google.com)
-->
### Auto installation
1) Just visit this link. Once the keplr window popup press the approve button.  
2) In the network section choose Theta_test network  
3) That's it. Have fun:)  

### Manual installation

Open the developer console:

- Chromium based browsers: View> Developer>Developer Tools(ctrl-shift-j)

- Copy paste the code and press enter. Do not forget to edit rpc and rest api urls in the code! :


```markdown
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
    
  
});
}
```
