const request = require('request');
const fs = require('fs');
const args = process.argv.slice(2);
const url = args[0];
const localPath = args[1];

const pageFetcher = (url, localPath) => {
  request(url, (error, response, body) => {
    if (error) {
      return console.log('error:', error);
    }
    console.log('body:', body);

    fs.writeFile(localPath, body, () => {
      console.log(`Downloaded and saved ${body.length} bytes to ${localPath}`);
    });
  });
};

pageFetcher(url, localPath);