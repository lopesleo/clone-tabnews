const { exec } = require("node:child_process");
const { error } = require("node:console");

function checkPostgres() {
  exec("docker exec postgres-dev pg_isready --host localhost", handleReturn);

  function handleReturn(error, stdout) {
    if (stdout.search("accepting connections") === -1) {
      process.stdout.write(".");
      checkPostgres();
      return;
    }
    console.log("Postgres is up and running");
  }
}

console.log("Waiting for Postgres to start...");
checkPostgres();
