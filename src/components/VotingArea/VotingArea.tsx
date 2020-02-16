import React, { FC, useState } from "react";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { Flex } from "rebass";
import { Arrow, ArrowContainer } from "./styles";
import { colors } from "../../shared/colors";
import axios from "axios";
import { Question } from "../ListDisplay/types";

interface Props {
  entry: Question;
}

const VotingArea: FC<Props> = ({ entry: { _id, votes, answer }, entry }) => {
  const [numVotes, setNumVotes] = useState(votes);

  const vote = (direction: number) => {
    console.log({
      ...entry,
      votes: direction
    });

    setNumVotes(numVotes => numVotes + direction);

    axios
      .post(`https://warm-crag-35873.herokuapp.com/api/items/${_id}`, {
        ...entry,
        votes: direction
      })
      .then(data => console.log(data));
  };

  return answer ? (
    <Flex
      flexDirection="column"
      style={{
        width: 30,
        minWidth: 30,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.white
      }}
    >
      <ArrowContainer onClick={vote.bind(null, 1)}>
        <Arrow icon={faCaretUp} />
      </ArrowContainer>
      {numVotes}
      <ArrowContainer onClick={vote.bind(null, -1)}>
        <Arrow icon={faCaretDown} />
      </ArrowContainer>
    </Flex>
  ) : null;
};

export default VotingArea;
