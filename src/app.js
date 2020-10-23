//https://grpc.io/docs/languages/node/quickstart/
const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");
const tasks = require("./tasks");

//Load proto file
const packageDefs = protoLoader.loadSync("tasks.proto");

const taskProto = grpc.loadPackageDefinition(packageDefs);

// Create a gRPC Server
const gRPCServer = new grpc.Server();

gRPCServer.addService(taskProto.TaskService.service, {
  findAll: (_, callback) => {
    callback(null, { tasks });
  },
  insert: (_, callback) => {
    const task = _.request;
    console.log(task);
    tasks.push(task);
    callback(null, { task });
  },
  findById: (_, callback) => {
    const task = tasks.find((elment) => element.id === _.request.id);
    if (task) {
      callback(null, { task });
    } else {
      callback({
        code: grpc.status.NOT_FOUND,
        reason: "Id not found",
      });
    }
  },
});

gRPCServer.bind("127.0.0.1:50051", grpc.ServerCredentials.createInsecure());
gRPCServer.start();
console.log("Server gRPC started in 127.0.0.1:50051");
