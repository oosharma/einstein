import React, { FC, useState } from "react";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { Flex } from "rebass";
import { colors } from "../../shared/colors";
import axios from "axios";
import { Question } from "../ListDisplay/types";
import { TextField, Button } from "@material-ui/core";

interface Props {
  entry?: Question;
}

const OrganizePage: FC<Props> = () => {
  const [body, setBody] = useState("");

  return (
    <div
      style={{
        backgroundColor: colors.white,
        border: `1px ${colors.blueShade} solid`,
        padding: 20,
        margin: 40,
        borderRadius: 10,
        boxShadow: "0 0 23px inset #00FAF8",
        overflow: "scroll",
        height: "575px"
      }}
    >
      <TextField
        id="outlined-multiline-static"
        label="Generative Text"
        multiline
        onChange={e => setBody(e.target.value)}
        fullWidth
        style={{ flex: "1", justifyContent: "flex-start" }}
        placeholder="Paste your body of text that will be used to generate question/answer pairs here."
        variant="outlined"
        value={body}
      />
      <Button
        variant="contained"
        color="secondary"
        disabled={!body}
        style={{ marginTop: 20 }}
        onClick={() => console.log("iii")}
      >
        Submit
      </Button>
    </div>
  );
};

export default OrganizePage;
