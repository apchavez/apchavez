#!/usr/bin/env node
"use strict";

const { execFileSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const OWNER = "apchavez";

const REPOS = [
  { name: "aws-typescript", type: "Cloud", live: true },
  { name: "azure-python", type: "Cloud", live: true },
  { name: "gcp-go", type: "Cloud", live: true },
  { name: "quarkus-react", type: "Fullstack", live: false },
  { name: "spring-webflux-angular", type: "Fullstack", live: false },
  { name: "spring-mvc-angular", type: "Fullstack", live: false },
  { name: "net-vue", type: "Fullstack", live: false },
];

function ghApi(pathname) {
  const out = execFileSync("gh", ["api", pathname], { encoding: "utf-8" });
  return JSON.parse(out);
}

function latestRun(repo, workflowFile) {
  try {
    const data = ghApi(
      `repos/${OWNER}/${repo}/actions/workflows/${workflowFile}/runs?per_page=1`
    );
    const run = data.workflow_runs && data.workflow_runs[0];
    if (!run) return null;
    return { conclusion: run.conclusion, date: run.updated_at.slice(0, 10) };
  } catch {
    return null;
  }
}

function badge(run) {
  if (!run) return "—";
  const icon = run.conclusion === "success" ? "✅" : run.conclusion === "failure" ? "❌" : "⏳";
  return `${icon} ${run.date}`;
}

function buildTable() {
  const rows = REPOS.map((r) => {
    const ci = latestRun(r.name, "ci.yml");
    let liveCell = "—";
    if (r.live) {
      const deploy = latestRun(r.name, "deploy.yml");
      const destroy = latestRun(r.name, "destroy.yml");
      const deployedAfterDestroy =
        deploy && destroy && new Date(deploy.date) > new Date(destroy.date);
      const restState = deployedAfterDestroy ? "⚠️ desplegado" : "💤 costo cero";
      liveCell = `Deploy ${badge(deploy)} · Destroy ${badge(destroy)} (${restState})`;
    }
    return `| [${r.name}](https://github.com/${OWNER}/${r.name}) | ${r.type} | ${badge(ci)} | ${liveCell} |`;
  });

  const updatedAt = new Date().toISOString().slice(0, 16).replace("T", " ") + " UTC";

  return [
    "| Proyecto | Tipo | CI | Estado de infraestructura |",
    "|---|---|---|---|",
    ...rows,
    "",
    `_Actualizado automáticamente ${updatedAt} por [update-status.yml](.github/workflows/update-status.yml)._`,
  ].join("\n");
}

function main() {
  const readmePath = path.join(__dirname, "..", "README.md");
  const readme = fs.readFileSync(readmePath, "utf-8");
  const start = "<!-- STATUS:START -->";
  const end = "<!-- STATUS:END -->";
  const startIdx = readme.indexOf(start);
  const endIdx = readme.indexOf(end);
  if (startIdx === -1 || endIdx === -1) {
    throw new Error(`README.md must contain ${start} / ${end} markers`);
  }
  const table = buildTable();
  const updated =
    readme.slice(0, startIdx + start.length) +
    "\n\n" +
    table +
    "\n\n" +
    readme.slice(endIdx);
  fs.writeFileSync(readmePath, updated);
  console.log(table);
}

main();
