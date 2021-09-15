import fs from 'fs';
import path from 'path';

// get filepath to data directory
const dataDir = path.join(process.cwd(), 'data');

// function returns ids for all json objects in array
export function getAllIds() {
  // get filepath to json file
  const filePath = path.join(dataDir, 'productlist1.json');
  const filePath2 = path.join(dataDir,'productlist2.json')
  // load json file contents
  const jsonString = fs.readFileSync(filePath, 'utf8');
  const jsonString2 = fs.readFileSync(filePath2, 'utf8');

  const jsonObj = JSON.parse(jsonString);
  const jsonObj2 = JSON.parse(jsonString2);
  const jsonObj3 = jsonObj.concat(jsonObj2);
  console.log(jsonObj3);
  // use map() on array to extract just id properties into new array of obj values
  return jsonObj3.map(item => {
    return {
      params: {
        id: item.id.toString()
      }
    }
  });
  // above code returns an array with nested obj values that looks like this:
  // [
  //   {
  //     params: {
  //       id: 3
  //     }
  //   },
  //   {
  //     params: {
  //       id: 2
  //     }
  //   }
  // ]
}

// function returns names and ids for all json objects in array, sorted by name property
export function getSortedList() {
  // get filepath to json file
  const filePath = path.join(dataDir, 'productlist1.json');
  const filePath2 = path.join(dataDir, 'productlist2.json');
  // load json file contents
  const jsonString = fs.readFileSync(filePath, 'utf8');
  const jsonString2 = fs.readFileSync(filePath2, 'utf8');

  // convert string from file into json array object
  const jsonObj = JSON.parse(jsonString);
  const jsonObj2 = JSON.parse(jsonString2);

  const jsonObj3 = jsonObj.concat(jsonObj2);

  // sort json array by name property
  jsonObj3.sort(function (a, b) {
      return a.name.localeCompare(b.name);
  });

  // use map() on array to extract just id + name properties into new array of obj values
  return jsonObj3.map(item => {
    return {
      id: item.id.toString(),
      name: item.name
    }
  });
}

export async function getData(idRequested) {
  // get filepath to json file
  const filePath = path.join(dataDir, 'productlist1.json');
  const filePath2 = path.join(dataDir, 'productlist2.json');

  // load json file contents
  const jsonString = fs.readFileSync(filePath, 'utf8');
  const jsonString2 = fs.readFileSync(filePath2, 'utf8');
  // convert string from file into json array object
  const jsonObj = JSON.parse(jsonString);
  const jsonObj2 = JSON.parse(jsonString2);
  const jsonObj3 = jsonObj.concat(jsonObj2);  

  // find object value in array that has matching id
  const objMatch = jsonObj3.filter(obj => {
    return obj.id.toString() === idRequested;
  });

  // extract object value in filtered array if any
  let objReturned;
  if (objMatch.length > 0) {
    objReturned = objMatch[0];
  } else {
    objReturned = {};
  }
  // console.log(objReturned);

  // return object value found
  return objReturned;
}