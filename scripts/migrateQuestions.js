// /scripts/migrateUsers.js
import Question from "@/models/question";
import dbConnect from "@/utils/dbConnect";

(async () => {
  await dbConnect();

  try {
    const questions = await Question.find({});
    for (let Question of questions) {
      // Add New field here
      question.tag = question.tag || ""; 
      await question.save();
    }
    console.log("Migration completed successfully.");
  } catch (error) {
    console.error("Migration failed:", error);
  } finally {
    process.exit();
  }
})();
