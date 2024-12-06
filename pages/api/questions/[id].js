// /pages/api/Questions/[id].js
import Question from "@/models/question";
import dbConnect from "@/utils/dbConnect";

export default async function handler(req, res) {
  await dbConnect();

  const { method, body, query } = req;
  const { id } = query;

  switch (method) {
    case "GET":
      try {
        const question = await Question.findById(id);
        if (!question) {
          return res.status(404).json({ error: "question not found" });
        }
        res.status(200).json(question);
      } catch (error) {
        console.error("Error fetching question:", error);
        res.status(500).json({ error: "Internal server error" });
      }
      break;

    case "PUT":
      try {
        const { question, answer, tag } = body;
        const updatedQuestion = await Question.findByIdAndUpdate(
          id,
          { question, answer, tag},
          { new: true } // Return the updated document
        );
        if (!updatedQuestion) {
          return res.status(404).json({ error: "Question not found" });
        }
        res.status(200).json(updatedQuestion);
      } catch (error) {
        console.error("Error updating question:", error);
        res.status(500).json({ error: "Internal server error" });
      }
      break;

    case "DELETE":
      try {
        const deletedQuestion = await Question.findByIdAndDelete(id);
        if (!deletedQuestion) {
          return res.status(404).json({ error: "Question not found" });
        }
        res.status(200).json({ message: "Question deleted successfully" });
      } catch (error) {
        console.error("Error deleting Question:", error);
        res.status(500).json({ error: "Internal server error" });
      }
      break;

    default:
      res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
      res.status(405).json({ error: `Method ${method} Not Allowed` });
      break;
  }
}
