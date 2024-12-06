"use client";
// components/Heading.js
import { theme } from "@/utils/buttonColor";
import { Button } from "@mui/material";
import React, { useState } from "react";
import QuestionForm from "./QuestionForm";
import axios from "axios";
import { Plus } from "lucide-react";

const Header = () => {
  const [formVisible, setFormVisible] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState({
    question: "",
    answer: "",
    tag: "",
    _id: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/questions", currentQuestion);
      setFormVisible(false);
      resetForm();
    } catch (error) {
      console.error("Error saving Questions:", error);
    }
  };

  const resetForm = () => {
    setCurrentQuestion({
      question: "",
      answer: "",
      tag: "",
      _id: ""
    });
    setEditMode(false);
  };

  return (
    <div className=" border border-black flex justify-between p-3 sticky top-0 z-50 backdrop-blur-lg">
      <Button href="/" className="w-fit  flex items-center justify-center">
        <img
          src="/logo.png"
          alt=""
          className="hidden sm:block object-contain h-10 border-none"
        />
        <img
          src="/NameLogo.png"
          alt=""
          className="sm:hidden object-contain h-10 border-none"
        />
      </Button>
      <Button
        variant="outlined"
        theme={theme}
        color="nilu"
        onClick={() => setFormVisible(!formVisible)}
        className="font-extrabold border-4 rounded-lg"
      >
        <Plus />
      </Button>
      {formVisible && (
        <QuestionForm
          handleSubmit={handleSubmit}
          currentQuestion={currentQuestion}
          setCurrentQuestion={setCurrentQuestion}
          formVisible={formVisible}
          setFormVisible={setFormVisible}
        />
      )}
    </div>
  );
};

export default Header;
