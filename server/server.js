const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 5000;
const app = express();
const token =
  "esfeyJ1c2VySWQiOiJiMDhmODZhZi0zNWRhLTQ4ZjItOGZhYi1jZWYzOTA0NUIhkufemQifQ";

let nextId = 4;

let classes = [
  {
    id: 1,
    name: "class 1",
    type: "yoga",
    time: `${new Date().toUTCString()}`,
    duration: "1 hour",
    intensity: "5",
    location: "Tampa, FL",
    numOfAttendies: "10",
    maxSize: "18",
  },
  {
    id: 2,
    name: "class 2",
    type: "MMA",
    time: `${new Date().toUTCString()}`,
    duration: "1 hour",
    intensity: "5",
    location: "Tampa, FL",
    numOfAttendies: "10",
    maxSize: "18",
  },
  {
    id: 3,
    name: "class 3",
    type: "crossfit",
    time: `${new Date().toUTCString()}`,
    duration: "1 hour",
    intensity: "5",
    location: "Tampa, FL",
    numOfAttendies: "10",
    maxSize: "18",
  },
];

let users = [
  {
    username: "asdf",
    password: "asdf",
    id: 1000,
  },
];

app.use(bodyParser.json());

app.use(cors());

function authenticator(req, res, next) {
  const { authorization } = req.headers;
  if (authorization === token) {
    next();
  } else {
    res.status(403).json({ error: "User must be logged in to do that." });
  }
}

app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  if (
    users.some(
      (user) => user.username === username && user.password === password
    )
  ) {
    req.loggedIn = true;
    res.status(200).json({
      payload: token,
    });
  } else {
    res
      .status(403)
      .json({ error: "Username or Password incorrect. Please see Readme" });
  }
});

app.post("/api/register", (req, res) => {
  const { username, password } = req.body;
  const newUser = {
    ...req.body,
    id: getNextId(),
  };
  users = [...users, newUser];
  res.send({ payload: token });
});

app.get("/api/classes", authenticator, (req, res) => {
  setTimeout(() => {
    res.send(classes);
  }, 1000);
});

app.get("/api/classes/:id", authenticator, (req, res) => {
  const cls = classes.find((f) => f.id == req.params.id);

  if (cls) {
    res.status(200).json(cls);
  } else {
    res.status(404).send({ msg: "Class not found" });
  }
});

app.post("/api/classes", authenticator, (req, res) => {
  const cls = { id: getNextId(), ...req.body };
  console.log(cls);

  friends = [...classes, cls];

  res.send(classes);
});

app.put("/api/classes/:id", authenticator, (req, res) => {
  const { id } = req.params;

  const clsIndex = classes.findIndex((c) => c.id == id);

  if (clsIndex > -1) {
    const cls = { ...classes[clsIndex], ...req.body };

    classes = [
      ...classes.slice(0, clsIndex),
      cls,
      ...classes.slice(clsIndex + 1),
    ];
    res.send(classes);
  } else {
    res.status(404).send({ msg: "Friend not found" });
  }
});

app.delete("/api/classes/:id", authenticator, (req, res) => {
  const { id } = req.params;

  classes = classes.filter((c) => c.id !== Number(id));

  res.send(classes);
});

function getNextId() {
  return nextId++;
}

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
