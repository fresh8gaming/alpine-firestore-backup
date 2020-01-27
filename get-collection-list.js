const fs = require('fs');
const path = require('path');
const { Firestore } = require("@google-cloud/firestore");

const firestore = new Firestore();

async function main() {
  let collectionList = ''
  const collections = await firestore.listCollections()
  
  for (let i = 0; i < collections.length; i++) {
    const collection = collections[i]
    collectionList += collection.id;
    collectionList += i < collections.length - 1 ? ',' : '';
  }

  process.env.COLLECTION_LIST = collectionList;
  fs.writeFile(path.resolve(__dirname, 'collection-list.txt'), collectionList, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
}

main();