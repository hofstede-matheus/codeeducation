function convertArrayToHtmlList(array) {
  let listOfPeopleHTML = "<ul> \n"

  array.forEach((element) => {
    listOfPeopleHTML = listOfPeopleHTML + `<li>${element}</li>\n`
  })

  listOfPeopleHTML = listOfPeopleHTML + "</ul>"

  return listOfPeopleHTML
}

module.exports = { convertArrayToHtmlList };

