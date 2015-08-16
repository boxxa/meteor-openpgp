meteor-openpgp
=================

Meteor package for [openpgpjs](https://github.com/openpgpjs/openpgpjs).

#Usage

Install package from Meteor:
```
meteor add boxxa:openpgp

```

```
var openpgp = require('openpgp');

var options = {
    numBits: 2048,
    userId: 'Jon Smith <jon.smith@example.org>',
    passphrase: 'super long and hard to guess secret'
};

openpgp.generateKeyPair(options).then(function(keypair) {
    // success
    var privkey = keypair.privateKeyArmored;
    var pubkey = keypair.publicKeyArmored;
}).catch(function(error) {
    // failure
});
```
