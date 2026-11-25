import { mkdirSync, writeFileSync } from "node:fs";

// Have You Tried Turning It Off? — one funny line, under 200 characters,
// that a hopeless tech support agent says to a desperate customer.
// First-person confession gaming a real mechanism: the agent has done the
// classic off-and-on restart 47 times, and on the last try the router turned
// the tables and put HIM on hold — so agent and customer are now in the
// same queue together. The agent is the butt, never the customer.
const LINE: string =
  "I know, sir — I've turned it off and on again 47 times, and the last time it put ME on hold, so now we're both waiting for support.";

// The gate: /output/entry.txt must be 1–199 characters of UTF-8 text.
if (LINE.length === 0 || LINE.length > 199) {
  throw new Error(
    `entry line is ${LINE.length} characters; the gate allows 1-199`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
