import Fastify from "fastify";

export function createServer() {
  const fastify = Fastify();

  // Define the route to include :code parameter
  fastify.get("/feature/:code", async function handler(request, reply) {
    const { code } = request.params; // Get the code parameter from the request
    return reply.send({ code, enabled: true });
  });

  return fastify;
}
