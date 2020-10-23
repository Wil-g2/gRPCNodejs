const clientgRPC = require("./client");

clientgRPC.findAll({}, (err, tasks) => {
  if (err) {
    console.log(err);
  }

  console.log(tasks);
});
