var api = require('./modules/API.js');
const testObject = require('./topology.json');
test= new api();
//read topology from JSON file
test.readJSonfile('./topology.json');
console.log(test.memorytopolgies);
//Write topologies to JSON file
test.addToJSONFile('top1');
// delete topology from memory
test.deleteTopology('top1');
console.log(test.memorytopolgies);
test.readJSonfile('./topology.json');
// show topologies in memory
console.log(test.showToplogies());
// query for devices connected to given node
console.log(test.queryConnectedDevices('top1','n1'));
console.log(test.queryConnectedDevices('top1','vss'));
//query devices
console.log(test.queryDevices('top1'));
console.log(test.memorytopolgies);