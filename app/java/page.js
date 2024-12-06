"use client";
import Wrapper from "@/components/Wrapper";
import { theme } from "@/utils/buttonColor";
import { Button } from "@mui/material";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const Page = () => {
  return (
    <Wrapper>
      <div className="relative w-full h-screen ">
        <div className="main-content h-screen flex items-center justify-center flex-col gap-6">
          <div>
            <h1 className="text-5xl font-extrabold mb-10">Java Topics</h1>
          </div>

          <Button
            theme={theme}
            color="nilu"
            variant="contained"
            size="large"
            className="text-2xl w-96 text-center py-3 px-5 rounded-lg font-bold "
            href="/java/oops"
          >
            OOPS
          </Button>
          <Button
            disabled
            theme={theme}
            color="nilu"
            variant="contained"
            size="large"
            className="text-2xl w-96 text-center py-3 px-5 rounded-lg font-bold "
            href="/java/string"
          >
            String
          </Button>
          <Button
            disabled
            theme={theme}
            color="nilu"
            variant="contained"
            size="large"
            className="text-2xl w-96 text-center py-3 px-5 rounded-lg font-bold "
            href="/java/array"
          >
            Array
          </Button>
          <Button
            // disabled
            theme={theme}
            color="nilu"
            variant="contained"
            size="large"
            className="text-2xl w-96 text-center py-3 px-5 rounded-lg font-bold "
            href="/java/ds"
          >
            Data Structure
          </Button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Page;
