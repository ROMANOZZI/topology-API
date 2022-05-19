# topology API


A topology is a set of electronic components that are connected together.
## start

Use the package manager [npm](https://www.npmjs.com/) to run the application.

```bash
npm start 
```
## testing 
the app use Jest to test component and topology modules but the API is tested manually becaause it has methods that take directory as a parameter
```bash
npm test
node API_test
```

##  Usage
 1. read topologies from JSON file
2. Write a given topology from the memory to a JSON file. 
3. Query about which topologies are currently in the memory.
 4. Delete a given topology from memory. 
5. Query about which devices are in a given topology.
 6. Query about which devices are connected to a given netlist node in
a given topology.
