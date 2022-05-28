import express from "express";
import lnd from "./utils/lnd";
const lnService = require("ln-service");


const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", async (req, res) => {
  try {
      const info = await lnService.getWalletInfo({ lnd });
      res.send(info);
  } catch(e) {
      res.send(e);
  }
});

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
});