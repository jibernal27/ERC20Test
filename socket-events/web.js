var Web3 = require('web3');
//var web3 = new Web3(new Web3.providers.HttpProvider("http://pub-node1.etherscan.io:8545"));
//var web3 = new Web3(new Web3.providers.WebsocketProvider("ws://eth2.augur.net"));

var web3= new Web3('wss://socket.etherscan.io/wshandler');

//console.log(web3.isConnected());
var abi = [{
     name: 'Transfer',
     type: 'event',
     constant: true,
     inputs: [],
     outputs: [{name:'indexed _from',type:'addres'},{name:'indexed _to',type:'addres'},{name:'_value',type:'uint256'}]
}];


var add='0x86fa049857e0209aa7d9e616f7eb3b3b78ecfdb0'
var myContractInstance = web3.eth.contract(abi).at(add);

var event = myContractInstance.Transfer([],function (error, result) {
  if (error)
    console.log('Error in Transfer event handler: ' + error);
  else
    console.log('Transfer: ' + JSON.stringify(result.args));
});