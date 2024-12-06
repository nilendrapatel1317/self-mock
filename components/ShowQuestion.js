"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { theme } from "@/utils/buttonColor";
import { mockQ } from "@/utils/contents";
import Wrapper from "./Wrapper";
import { Button, Chip, FormControlLabel, Switch } from "@mui/material";
import QuestionDialogBox from "./QuestionDialogBox";

const ShowQuestion = ({ topic }) => {
  console.log(topic);

  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [isRandomMode, setIsRandomMode] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dbQuestions, setDBQuestions] = useState([]);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await axios.get("/api/questions");
      setDBQuestions(response.data);
    } catch (error) {
      console.error("Error fetching Questions:", error);
    }
  };

  const storedQuestions = mockQ();

  const combinedQuestions = [...storedQuestions, ...dbQuestions];

  const getRandomQuestion = () => {
    const randomIndex = Math.floor(Math.random() * combinedQuestions.length);
    setCurrentIndex(randomIndex);
    return combinedQuestions[randomIndex];
  };

  const getNextOrderedQuestion = () => {
    if (currentIndex >= combinedQuestions.length) {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % combinedQuestions.length
      );
    }
    return combinedQuestions[currentIndex];
  };

  useEffect(() => {
    if (isRandomMode) {
      setCurrentQuestion(getRandomQuestion());
    } else {
      setCurrentQuestion(getNextOrderedQuestion());
    }
  }, [isRandomMode]);

  // Updated handleShuffle function
  const handleShuffle = () => {
    if (isRandomMode) {
      let question;
      do {
        question = getRandomQuestion();
      } while (question?.tag !== topic); // Keep generating until tag is 'array'
      setCurrentQuestion(question);
    } else {
      let question;
      do {
        question = getNextOrderedQuestion();
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } while (question?.tag !== topic);
      setCurrentQuestion(question);
    }
  };

  const handleToggleRandomMode = () => {
    if (isRandomMode) {
      setIsRandomMode(false);
      setCurrentQuestion(getNextOrderedQuestion());
    } else {
      setIsRandomMode(true);
      setCurrentIndex(0);
    }
  };

  return (
    <Wrapper>
      <div className="w-full h-screen relative ">
        <div className="main-content w-full h-screen  py-5 flex-col text-3xl text-center px-3 leading-relaxed">
          <div className="flex justify-between sm:justify-around w-full h-[15%]">
            <div className="">
              <Button
                variant="contained"
                theme={theme}
                color="nilu"
                onClick={handleShuffle}
                size="large"
              >
                Next
              </Button>
            </div>

            <div>
              {currentQuestion?.tag === topic ? (
                <div>
                  <Chip
                    label={"Topic : " + currentQuestion?.tag}
                    className="w-fit uppercase font-bold text-white  bg-[#28e1bf]"
                  />
                </div>
              ) : (
                ""
              )}
            </div>

            <div className="flex items-center flex-col pt-2">
              <p className="text-sm">Random Q Mode</p>
              <FormControlLabel
                control={
                  <Switch
                    theme={theme}
                    color="nilu"
                    defaultChecked
                    onClick={handleToggleRandomMode}
                  />
                }
              />
            </div>
          </div>

          <div>
            {currentQuestion?.tag === topic ? (
              <div className="w-full   pt-10">
                <div className="h-[50vh] flex flex-col items-center justify-center gap-10 py-5">
                  {/* <p>Q: {currentIndex}</p> */}
                  <p className="font-semibold">
                    {currentQuestion?.question
                      .split(currentQuestion?.key)
                      .map((part, index) => (
                        <React.Fragment key={index}>
                          {index > 0 && (
                            <span className="text-[#28e1bf] font-bold">
                              {currentQuestion?.key}
                            </span>
                          )}
                          {part}
                        </React.Fragment>
                      ))}
                  </p>
                  <div className="">
                    <p className="">
                      <QuestionDialogBox
                        currentIndex={currentIndex}
                        currentQuestion={currentQuestion}
                      />
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="w-full h-[80%] pt-40 flex justify-center">
                <div className=" space-y-3 ">
                  <p className="font-semibold text-2xl sm:text-3xl text-center">Click Next Button to start...</p>
                  <p className="text-red-500 text-sm text-center">"If you click the Next button 2-4 times, it means no questions have been added to this section yet."</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ShowQuestion;
