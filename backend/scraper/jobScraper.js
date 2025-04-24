const axios = require("axios");
const cheerio = require("cheerio");

axios.get("https://www.indeed.com/q-software-developer-jobs.html")
  .then(response => {
    const $ = cheerio.load(response.data);
    $(".job_seen_beacon").each((i, el) => {
      const title = $(el).find("h2").text().trim();
      console.log("Job:", title);
    });
  });

  