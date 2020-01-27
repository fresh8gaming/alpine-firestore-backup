const fs = require('fs');
const path = require('path');
const { Firestore } = require("@google-cloud/firestore");

const firestore = new Firestore();

async function main() {
  let collectionList = ''
  try {
    const collections = await firestore.listCollections()
    
    for (let i = 0; i < collections.length; i++) {
      collectionList += collections[i].id;
      collectionList += i < collections.length - 1 ? ',' : '';
    }

    fs.writeFile(path.resolve(__dirname, 'collection-list.txt'), collectionList, (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    });
  } catch (err) {
    console.log(err)
  }
}

main();