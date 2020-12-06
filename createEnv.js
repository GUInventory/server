require('dotenv').config()
const fileSystem = require('fs')
const googleStorageCredentials = require('./google-storage-credentials.js')

fileSystem.writeFile(
  'google-storage-credentials.json',
  JSON.stringify(googleStorageCredentials).replace(/\\\\n/g, '\x5cn'),
  (err) => {
    if (err) console.log(err)
    console.log('Google Cloud Storage environments successfully written to file.')
  },
)
