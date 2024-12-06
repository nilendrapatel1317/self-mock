import Homepage from "@/components/Homepage";
import Java from "@/components/Homepage";
import Wrapper from "@/components/Wrapper";
import React from "react";

const page = () => {
  return (
    <Wrapper>
      <div className="w-full h-full">
        <Homepage />
      </div>
    </Wrapper>
  );
};

export default page;
