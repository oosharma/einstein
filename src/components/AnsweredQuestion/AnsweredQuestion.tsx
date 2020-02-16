import React, { FC, useState } from "react";
import VotingArea from "../VotingArea/VotingArea";
import { FlexContainer } from "../../shared/styles";
import { Question, StyledFlex } from "./styles";
import { Question as QuestionType } from "../ListDisplay/types";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import TextField from "@material-ui/core/TextField";
import { Button, Snackbar } from "@material-ui/core";
import axios from "axios";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: "absolute",
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3)
    }
  })
);

interface Props {
  clickable?: boolean;
  question: QuestionType;
}

const AnsweredQuestion: FC<Props> = ({
  clickable,
  question: { _id, answer, question },
  question: entry
}) => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [value, setValue] = useState("");

  return (
    <FlexContainer alignItems="stretch">
      <VotingArea entry={entry} />
      <StyledFlex
        flexDirection="column"
        clickable={clickable}
        onClick={() => clickable && setOpen(true)}
      >
        <Question hasAnswer={!!answer}>{question}</Question>
        {answer}
      </StyledFlex>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={close}
      >
        <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title">{question}</h2>
          <br />
          <TextField
            required
            id="standard-required"
            label="Required"
            value={value}
            onChange={e => setValue(e.target.value)}
            fullWidth
          />
          <Button
            variant="contained"
            color="secondary"
            disabled={!value}
            style={{ marginTop: 20 }}
            onClick={() => {
              axios
                .post(
                  `https://warm-crag-35873.herokuapp.com/api/items/${_id}`,
                  { ...entry, answer: value, votes: 0 }
                )
                .then(data => {
                  setOpen(false);
                  window.location.reload(false);
                  console.log(data);
                });
            }}
          >
            Submit
          </Button>
        </div>
      </Modal>
      {/* <Snackbar open={true} autoHideDuration={6000} onClose={() => {}}>
        <>This is a success message!</>
      </Snackbar> */}
    </FlexContainer>
  );
};

export default AnsweredQuestion;
