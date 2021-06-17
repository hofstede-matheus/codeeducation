const express = require("express");
const app = express();
const { getAllPeople, createPeople } = require("./repository/PeopleRepository");
const { getRandomName } = require("./helper/randomName")
const { convertArrayToHtmlList } = require("./helper/htmlListBuilder")

require('dotenv').config()

const API_PORT = process.env.API_PORT


app.get("/", async (_, res) => {
  await createPeople( { name: getRandomName() } )
  const { people } = await getAllPeople()

  const listOfNames = people.map((element) => element.name)

  const listOfPeopleHTML = convertArrayToHtmlList(listOfNames)

  res.status(200).send(`<h1>Full Cycle Rocks!</h1> \n ${listOfPeopleHTML}`);
});

app.listen(API_PORT, () => {
  console.log(`Running on port ${API_PORT}`);
});