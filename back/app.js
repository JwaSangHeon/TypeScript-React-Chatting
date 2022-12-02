"use strict";

const express = require("express");
const app = express();
const PORT = 3000;
const users = [
  { id: 1, name: "user1" },
  { id: 2, name: "user2" },
  { id: 3, name: "user3" },
];

app.get("/", (req, res) => {
  res.send("hello World");
});

app.get("/api/users", (req, res) => {
  res.json({ ok: true, users: users });
});

app.listen(PORT, () => {
  console.log(`${PORT}번에서 서버 가동중...`);
});
