const $ = require('cheerio');
const fs = require('fs');

const input = fs.readFileSync('../test/DarkAngelsCurrent.html', 'utf-8')
// console.log(input);


const trimHTML = (input) => {
  input = input.toString();
  // const input = "<h1>aosdiujaoisd</h1>"
  console.log(typeof input);
  const regexTitle = new RegExp("(?<=<h1>)(.*)(?=</h1>)");
  // console.log( regexTitle.exec(input), 'test' )
  return regexTitle.exec(input), 'test'
}



fs.writeFile(
  './DarkAngelsCurrent.json',
  trimHTML(input),
  'utf-8',
  () => {}
)
