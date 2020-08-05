const $ = require('cheerio');
const fs = require('fs');

const input = fs.readFileSync('../test/DarkAngelsCurrent.html', 'utf-8')
// console.log(input);
const fileName = './DarkAngelsCurrent.json'



fs.writeFile(
  fileName,
  input,
  'utf-8',
  () => {
    console.log(trimJSON(fs.readFileSync(`${fileName}`, 'utf-8')));
  }
)
// Take the JSON file and then
const trimJSON = (inputJSON) => {
  const armies = [
    {
      armyName: $('h1', inputJSON).text(),
      detachments: [
        {
          detachmentName: "",
          battlefieldRoles: [
            {
              roleName: "",
              units: [""]
            }
          ]
        }
      ]
    }
  ]
  // const armyTitle = $('h1', inputJSON).text()

  const getArmyName = (inputJSON) => {
    return {armyName: $('h1', inputJSON).text()}
  }

  const createArrayofDetachments = (inputJSON) => {
    return {detachments: [$('.force', inputJSON).map((i, det) => {
      detachmentName: $('h2', det).map((i, title) => $(title).text()).get()
      })]
    }
  }

  // const createArrayofDetachments = (inputJSON) => {
  //   const detachmentArray = $('.force', inputJSON)
  //   return { detachments:
  //     detachmentArray.map((i, det) => {
  //       detachmentName: detTitles(det),
  //       battlefieldRoles: batRoles(det)
  //     }).get();
  //   }
  // }

  // const detachments = $('.force', inputJSON);
  // const detachmentArray = $('.force', inputJSON).map((i, det) =>
  //   detTitles(det) + " " + batRoles(det)
  // ).get()

  // const batRoles = (detInput) => {
  //   return $('.category', detInput).map((i, r) => {
  //     roleName: $('h3', r).text(), units: getUnits(r)
  //   }).get()
  // }

  const getUnits = (roleInput) => {
    return $  ('.rootselection > h4', roleInput).map((i, u) => $(u).text()).get();
  }

  const detTitles = (det) => {
    return $('h2', det).map((i, title) => $(title).text()).get()
  } //


  // const detTitles = $('h2', detachments).map((i, title) => $(title).text()).get();

  // get() changes it back to an array

  // armies.push(getArmyName(inputJSON))
  console.log(createArrayofDetachments(inputJSON));

  // return armies;
}


const out = [
  {
    armyName: "",
    detachments: [
      {
        detachmentName: "",
        battlefieldRoles: [
          {
            roleName: "",
            units: [""]
          }
        ]
      }
    ]
  }
]
