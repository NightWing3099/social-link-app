// ===================================================================
//  Build script: compiles src/input.css -> dist/output.css
//  using the official @tailwindcss/cli tool.
//  Run with:  npm run build   (or npm run watch to auto-rebuild)
// ===================================================================
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

const input = resolve(root, "src/input.css");
const output = resolve(root, "dist/output.css");

const args = [
  "-i", input,
  "-o", output,
  "--minify", // makes the final CSS as small as possible = optimized
];

if (process.argv.includes("--watch")) {
  args.push("--watch");
  console.log("👀 Watching for changes... (press Ctrl+C to stop)");
} else {
  console.log("🔨 Building Tailwind CSS...");
}

execFileSync("npx", ["@tailwindcss/cli", ...args], {
  stdio: "inherit",
  cwd: root,
});
