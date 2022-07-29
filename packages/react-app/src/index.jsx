import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React from "react";
import { ThemeSwitcherProvider } from "react-css-theme-switcher";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import App from "./App";
import { Account, Contract, Faucet, GasGauge, Header, Ramp, ThemeSwitch, CustomHeader } from "./components";
import { Landing, Mint } from "./views";
import "./index.css";

const themes = {
  dark: `${process.env.PUBLIC_URL}/dark-theme.css`,
  light: `${process.env.PUBLIC_URL}/light-theme.css`,
};

const prevTheme = window.localStorage.getItem("theme");

const subgraphUri = "http://localhost:8000/subgraphs/name/scaffold-eth/your-contract";

const client = new ApolloClient({
  uri: subgraphUri,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <ThemeSwitcherProvider themeMap={themes} defaultTheme={prevTheme || "light"}>
      <BrowserRouter>
        {/* hi */}
        <App subgraphUri={subgraphUri} />
        {/* <Mint /> */}
        {/* <Landing /> */}
        {/* <Contract
          name="LegalDoc"
          signer={userSigner}
          provider={localProvider}
          address={address}
          blockExplorer={blockExplorer}
          contractConfig={contractConfig}
        /> */}
        {/* <Landing /> */}
      </BrowserRouter>
    </ThemeSwitcherProvider>
  </ApolloProvider>,
  document.getElementById("root"),
);
