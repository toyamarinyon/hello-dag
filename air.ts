const scrape = (data: string) => {
  console.log(`Scraping: ${data}`);
  return "scraped data";
};

const summarize = (data: string) => {
  console.log(`Summarizing: ${data}`);
  return "summarized data";
};

const translate = (data: string) => {
  console.log(`Translating: ${data}`);
  return "translated data";
};

const webScraper = (data: string) => {
  const scrapedData = scrape(data);
  const summarizeData = summarize(scrapedData);
  return translate(summarizeData);
};

webScraper("https://example.com");
