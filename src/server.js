import { env } from "./env.js";
import { fastify } from "fastify";

const app = fastify({
  logger: true
});

async function bootstrap() {
  try {
    await app.listen({
      port: env.PORT
    });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

await bootstrap();
