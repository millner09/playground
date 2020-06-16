const todos = [
  { id: 1, name: "Create todos" },
  { id: 2, name: "Add todo endpoints" },
  { id: 3, name: "Make bank" },
];

exports.get = (req, res) => {
  res.send(todos);
};

exports.post = (req, res) => {
  const todo = { id: todos.length + 1, name: req.body.name };
  todos.push(todo);
  res.send(todos);
};
