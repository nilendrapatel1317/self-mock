// components/QuestionForm.js
import { theme } from "@/utils/buttonColor";
import { Button, MenuItem, TextField } from "@mui/material";
import { X } from "lucide-react";
import React from "react";

const currencies = [
  {
    value: "sql",
    label: "SQL"
  },
  {
    value: "oops",
    label: "Java (OOPS)"
  },
  {
    value: "data structure",
    label: "Java (Data Structure)"
  },
  {
    value: "html",
    label: "Web (HTML)"
  },
  {
    value: "css",
    label: "Web (CSS)"
  },
  {
    value: "javascript",
    label: "Web (JavaScript)"
  },
  {
    value: "reactjs",
    label: "Web (Reactjs)"
  }
];

const QuestionForm = ({
  handleSubmit,
  currentQuestion,
  setCurrentQuestion,
  setFormVisible
}) => {
  // General handler for field changes
  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setCurrentQuestion((prevQuestion) => ({
      ...prevQuestion,
      [name]: value
    }));
  };

  // Function to handle changes in additional fields

  return (
    <div className="bg-white  h-screen fixed top-0 left-0 right-0 bottom-0 text-3xl text-[#28e1bf] flex flex-col gap-10 justify-center items-center">
      <X
        onClick={() => {
          setFormVisible(false);
        }}
        size={50}
        className="cursor-pointer absolute top-5 right-5 bg-white rounded-full p-2 text-xl"
      />
      <h1>Add Your Question</h1>
      <form onSubmit={handleSubmit} className="w-96 flex flex-col gap-5">
        <TextField
          label="Enter Your Question"
          name="question"
          variant="outlined"
          id="outlined-multiline-static"
          multiline
          value={currentQuestion.question}
          onChange={handleFieldChange}
          required
          rows={5}
          // className="w-96"
        />
        <TextField
          label="Enter Your Answer"
          name="answer"
          variant="outlined"
          id="outlined-multiline-static"
          multiline
          value={currentQuestion.answer}
          onChange={handleFieldChange}
          rows={5}
        />

        <TextField
          id="outlined-select-currency"
          select
          label="Question Topic"
          defaultValue="EUR"
          helperText="Please select your Question Topic"
          name="tag"
          value={currentQuestion.tag || ""}
          onChange={handleFieldChange}
          required
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <Button
          variant="contained"
          size="large"
          theme={theme}
          color="nilu"
          type="submit"
        >
          Create Question
        </Button>
      </form>
    </div>
  );
};

export default QuestionForm;
