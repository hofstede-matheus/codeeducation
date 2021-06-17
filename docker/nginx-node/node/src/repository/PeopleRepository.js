const { connect } = require("../database");
const { v4: uuidv4 } = require('uuid');

async function getAllPeople() {
  const connection = await connect();
  const [rows] = await connection.execute("SELECT * FROM people;");

  connection.end();

  return {
    people: rows,
  };
}

async function createPeople({ name }) {
  const connection = await connect();

  const uuid = uuidv4()

  const [rows] = await connection.execute("INSERT INTO people VALUES (?, ?);", [uuid, name]);

  connection.end();

  return {
    people: rows,
  };
}

module.exports = { getAllPeople, createPeople };