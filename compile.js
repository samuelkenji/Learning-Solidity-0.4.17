// compile code will go here
const path = require('path')
const fs = require('fs')

const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol')
const inboxSource = fs.readFileSync(inboxPath, 'utf8')

const solc = require('solc')

module.exports = solc.compile(inboxSource, 1).contracts[':Inbox']