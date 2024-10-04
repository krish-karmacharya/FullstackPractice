import express from "express";
const app = express();

app.get("/", (rep, res) => res.send("server is ready"));
app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "Why did the scarecrow win an award?",
      content: "Because he was outstanding in his field!",
    },
    {
      id: 2,
      title: "Why don't skeletons fight each other?",
      content: "They don't have the guts.",
    },
    {
      id: 3,
      title: "What do you call fake spaghetti?",
      content: "An impasta!",
    },
    {
      id: 4,
      title: "Why was the math book sad?",
      content: "Because it had too many problems.",
    },
    {
      id: 5,
      title: "What do you call cheese that isn't yours?",
      content: "Nacho cheese!",
    },
  ];
  res.send(jokes);
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Server at local host 3000");
});
