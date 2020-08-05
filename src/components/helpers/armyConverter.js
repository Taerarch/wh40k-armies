const $ = require('cheerio');
const fs = require('fs');

const input = fs.readFileSync('../test/DarkAngelsCurrent.html', 'utf-8')
// console.log(input);
const fileName = './DarkAngelsCurrent.json'


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
    return {
      armyName: $('h1', inputJSON).text(),
      detachments: $('.force', inputJSON).map((i, det) => {
        return getDetachmentName(det)
      }).get()}
  }


  const getDetachmentName = (det) => {
    return {
      detachmentName: $('h2', det).text(),
      battlefieldRoles: createBattlefieldRoles(det)
    }
  }

  const createBattlefieldRoles = (detInput) => {
    return $('.category', detInput).map((i, roles) => {
      return getBattlefieldRoleName(roles)
    }).get()
  }

  const getBattlefieldRoleName = (rolesInput) => {
    return {
      roleName: $('h3', rolesInput).text(),
      units: getUnits(rolesInput)
    }
  }


  // const batRoles = (detInput) => {
  //   return $('.category', detInput).map((i, r) => {
  //     roleName: $('h3', r).text(), units: getUnits(r)
  //   }).get()
  // }

  const getUnits = (roleInput) => {
    return $('.rootselection > h4', roleInput).map((i, u) => $(u).text()).get();
  }

  const detTitles = (det) => {
    return $('h2', det).map((i, title) => $(title).text()).get()
  } //


  // const detTitles = $('h2', detachments).map((i, title) => $(title).text()).get();

  // get() changes it back to an array

  // armies.push(getArmyName(inputJSON))
  return JSON.stringify(createArrayofDetachments(inputJSON), null, 4)
}


fs.writeFile(
  fileName,
  trimJSON(input),
  'utf-8',
  () => {}
)
