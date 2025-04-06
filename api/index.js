const { Web3 } = require('web3');
const express = require('express');
const client = require('prom-client');

const web3 = new Web3('http://geth-node:8545');
const app = express();
const gauge = new client.Gauge({
  name: 'eth_block_number',
  help: 'Current Ethereum block number'
});

async function updateMetrics() {
  const block = await web3.eth.getBlockNumber();
  gauge.set(block);
}

setInterval(updateMetrics, 15000);

app.get('/metrics', async (req, res) => {
  res.set('Content-Type', client.register.contentType);
  res.end(await client.register.metrics());
});

app.listen(3000);