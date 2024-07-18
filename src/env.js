import * as v from "valibot";

const envSchema = v.object({
  PORT: v.pipe(v.unknown(), v.transform(Number))
});

const _env = v.safeParse(envSchema, process.env);

if (!_env.success) {
  console.error(_env.issues);
  throw new TypeError("Invalid .env variables.");
}

export const env = _env.output;
