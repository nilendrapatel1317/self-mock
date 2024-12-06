import Question from "@/models/question";
import dbConnect from "@/utils/dbConnect";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "GET") {
    try {
      const questions = await Question.find({});
      res.status(200).json(questions);
    } catch (error) {
      console.error("Error fetching questions:", error); // Detailed logging
      res.status(500).json({ error: "Internal server error" });
    }
  } else if (req.method === "POST") {
    try {
      const { question, answer, tag } = req.body;

      // Create new user object
      const newQuestion = new Question({
        question,
        answer,
        tag,
      });
      console.log(newQuestion);

      // Save user to database
      const savedQuestion = await newQuestion.save();
      res.status(201).json(savedQuestion);
    } catch (error) {
      console.error("Error saving user:", error); // Detailed logging
      res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
