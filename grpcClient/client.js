const grpc = require("grpc");

const protoLoad = require("@grpc/proto-loader");
const tasks = require("../src/tasks");

const packageDefs = protoLoad.loadSync("tasks.proto");

const taskProto = grpc.loadPackageDefinition(packageDefs);

const clientgRPC = new taskProto.TaskService(
  "127.0.0.1:50051",
  grpc.credentials.createInsecure()
);

module.exports = clientgRPC;
