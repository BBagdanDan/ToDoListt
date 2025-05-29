const { getRepository } = require("typeorm");
const { User } = require("../entity/User.js");
const { Task } = require("../entity/Task.js");

const authenticateToken = require("../middleware/authenticateToken");

module.exports = (app) => {
  app.get("/tasks", authenticateToken, async (req, res) => {
    try {
      const userRepository = getRepository(User);

      const userWithTasks = await userRepository
        .createQueryBuilder("user")
        .leftJoinAndSelect("user.tasks", "task")
        .where("user.id = :id", { id: req.user.userId })
        .getOne();

      res.json(userWithTasks?.tasks || []);
    } catch (error) {
      console.error("Error fetching tasks:", error);
      res.status(500).json({ error: "Database error" });
    }
  });

  app.post("/tasks", authenticateToken, async (req, res) => {
    const todos = req.body.tasks;

    console.log("Received todos:", todos);

    try {
      const userRepository = getRepository(User);
      const taskRepository = getRepository(Task);

      const user = await userRepository.findOne({
        where: { id: req.user.userId },
        relations: ["tasks"],
      });

      if (!user) {
        console.log("User not found:", req.user.userId);
        return res.status(404).json({ error: "User not found" });
      }

      await taskRepository.delete({ user: user });

      const tasks = todos.map((todo) =>
        taskRepository.create({
          text: todo.text,
          status: todo.status,
          user: user,  
        })
      );

      await taskRepository.save(tasks);
      res.sendStatus(200);
    } catch (error) {
      console.error("Error saving tasks:", error);
      res.status(500).json({ error: "Database error" });
    }
  });
};
