const express = require("express");
const fetch = require("node-fetch");
const app = express();

const API_KEY = "YOUR_BING_API_KEY";

app.use(express.static("."));

app.get("/search", async (req, res) => {
  const q = req.query.q;
  const response = await fetch(
    `https://api.bing.microsoft.com/v7.0/search?q=${encodeURIComponent(q)}`,
    {
      headers: {
        "Ocp-Apim-Subscription-Key": API_KEY
      }
    }
  );
  const data = await response.json();
  res.json(data);
});

app.listen(3000, () => console.log("Running on http://localhost:3000"));
