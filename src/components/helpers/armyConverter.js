const $ = require('cheerio');
// const fs = require('fs');

// const fileName = './DarkAngelsCurrent.json'
// Was used as a test

// Take the JSON file and then
const trimJSON = (inputJSON) => {

  // const armiesBlueprint = [
  //   {
  //     armyName: $('h1', inputJSON).text(),
  //     detachments: [
  //       {
  //         detachmentName: "",
  //         battlefieldRoles: [
  //           {
  //             roleName: "",
  //             units: [""]
  //           }
  //         ]
  //       }
  //     ]
  //   }
  // ]

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

  const getUnits = (roleInput) => {
    return $('.rootselection > h4', roleInput).map((i, u) => $(u).text()).get();
  }



  return JSON.stringify(createArrayofDetachments(inputJSON), null, 4)
}

// Was used for testing //
// fs.writeFile(
//   fileName,
//   trimJSON(input),
//   'utf-8',
//   () => {}
// )
export default trimJSON
