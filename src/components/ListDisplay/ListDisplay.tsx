import React, { FC, useEffect, useState } from "react";
// import { answeredQuestions } from "../../shared/mockData";
import AnsweredQuestion from "../AnsweredQuestion/AnsweredQuestion";
import { colors } from "../../shared/colors";
import { Question } from "./types";

interface Props {
  clickable?: boolean;
  items: Question[];
}

const ListDisplay: FC<Props> = ({ clickable, items }) => {
  return (
    <div
      style={{
        backgroundColor: colors.darkBlue,
        padding: 20,
        margin: 40,
        borderRadius: 10,
        boxShadow: "0 0 23px inset #00FAF8",
        overflow: "scroll",
        height: "575px"
      }}
    >
      {items.map(item => (
        <AnsweredQuestion
          clickable={clickable}
          key={item._id}
          question={item}
        />
      ))}
    </div>
  );
};

export default ListDisplay;
