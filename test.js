var logger = require("semafor")()
var child = require("child_process")
var spawn = child.spawnSync("./cli.js")
var err = spawn.stderr+""
if(err!= "") {
  logger.fail(err)
  process.exit(1)
}
var output = (spawn.stdout+"").trim()
if(!/[\d+]/.test(output)) {
  logger.fail("Invalid timestamp created, "+output)
  process.exit(1)
}
var date = new Date(parseInt(output))
if(isNaN(date.getTime())){
  logger.fail("Invalid timestamp created, "+output)
  process.exit(1)
}
process.exit(0)
