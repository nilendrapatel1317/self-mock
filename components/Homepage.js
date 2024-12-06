"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Wrapper from "./Wrapper";
import { Button } from "@mui/material";
import { theme } from "@/utils/buttonColor";

const Homepage = () => {
  return (
    <Wrapper>
      <div className="relative w-full h-screen ">
        <div className="main-content h-screen flex items-center justify-center flex-col gap-8 -mt-20">
        <div>
            <h1 className="text-5xl text-center leading-normal font-extrabold mb-10">Let's Do Self Mock</h1>
          </div>
        <Button
            theme={theme}
            color="nilu"
            variant="contained"
            size="large"
            className="text-2xl w-96 text-center py-3 px-5 rounded-lg font-bold "
            href="/java"
          >
            Java
          </Button>
        <Button
            theme={theme}
            color="nilu"
            variant="contained"
            size="large"
            className="text-2xl w-96 text-center py-3 px-5 rounded-lg font-bold "
            href="/web"
          >
            Web
          </Button>
        <Button
            theme={theme}
            color="nilu"
            variant="contained"
            size="large"
            className="text-2xl w-96 text-center py-3 px-5 rounded-lg font-bold "
            href="/sql"
          >
            SQL
          </Button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Homepage;
