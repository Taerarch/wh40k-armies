const $ = require('cheerio');


// const fs = require('fs');
// const fileName = './DarkAngelsCurrent.json'
// Was used as a test


const trimFaction = (inputString) => {
  const allFactions = ["Adeptus Astartes", "Grey Knights", "Chaos Demons", "Chaos Knights", "Chaos Space Marines", "Adeptus Custodes", "Deathguard", "Drukhari", "Craftworlds", "Genestealer Cults", "Harlequins", "Astra Militarum", "Imperial Knight", "Necrons", "Orks", "Adeptus Sororitas", "Tau", "Thousand Sons", "Tyranids", "Blood Angels", "Dark Angels", "Space Wolves", "Deathwatch", "Ynnari", "Adeptus Mechanicus" ];
  return allFactions.find(faction => inputString.includes(faction));
}
const trimDetachment = (inputString) => {
  const allDetachments = ["Battalion", "Patrol", "Brigade", "Spearhead", "Vanguard", "Outrider", "Auxiliary Support", "Fortification Network", "Super-Heavy Auxiliary", "Super-Heavy"]
  return allDetachments.find(detachment => inputString.includes(detachment));
}

const trimJSON = (inputJSON, inputDescription, currentUser) => {
  const createArrayofDetachments = (inputJSON) => {
    return {
      userName: currentUser,
      armyName: $('h1', inputJSON).text(),
      armyFaction: trimFaction($('li > h2', inputJSON).text()),
      description: inputDescription,
      detachments: $('.force', inputJSON).map((i, det) => {
        return getDetachmentName(det)
      }).get()}
  }

  const getDetachmentName = (det) => {
    return {
      detachmentName: trimDetachment($('h2', det).text()),
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

// Write file was used for testing
// fs.writeFile(
//   fileName,
//   trimJSON(input),
//   'utf-8',
//   () => {}
// )
export default trimJSON
