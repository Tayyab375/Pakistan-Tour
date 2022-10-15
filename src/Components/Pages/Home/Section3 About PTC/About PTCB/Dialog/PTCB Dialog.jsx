import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

// ----------------import style------------------
import { PrarentDialogDiv } from "./PTCB Dialog.styled";

// --------------------import color----------------------------
import { drakGreen } from "../../../../../Reusable/Colors";

export default function ScrollDialog() {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <PrarentDialogDiv>
      <Button onClick={handleClickOpen("paper")}>Read More</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <h1 style={{ color: drakGreen }}>Pakistan Tourism Corporation Board</h1>
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum
              dolore obcaecati, deleniti quibusdam doloribus, ipsum consequuntur
              eius modi esse, placeat expedita fuga. Cum veniam aut esse? Ullam,
              porro! Placeat, praesentium? Itaque non reiciendis similique?
              Adipisci beatae soluta saepe possimus eligendi sunt quia cum?
              Aperiam suscipit rem dolorem facere officia autem in ratione
              voluptatibus, commodi necessitatibus numquam maiores qui, natus
              sunt. Optio tempore ullam numquam tenetur delectus qui quibusdam
              iusto atque assumenda nihil consequatur exercitationem soluta
              laboriosam, quasi architecto animi vero voluptatum, asperiores
              quidem veniam. Minus veritatis sapiente corporis incidunt autem!
              Ea expedita vel ipsa, dolorum modi voluptatibus minus debitis
              numquam beatae, sed accusantium sit facere vitae magnam eum libero
              quasi adipisci! Ex nesciunt fugit omnis. Qui sed magni fugit
              minima? Consequatur voluptate voluptatum fugiat animi error
              consequuntur et repudiandae molestias. Nobis quas libero assumenda
              maiores odit non repellendus sunt hic incidunt. Excepturi illo
              perferendis nemo, similique temporibus veritatis qui aperiam.
              <br />
              <br />
              <ul>
                <li>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Dolorum dolore obcaecati.
                </li>
                <li>
                  Itaque non reiciendis similique? Adipisci beatae soluta saepe
                  possimus eligendi sunt quia cum? Aperiam.
                </li>
                <li>
                  Numquam tenetur delectus qui quibusdam iusto atque assumenda
                  nihil consequatur
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Suscipit maxime et officiis ullam laborum ipsum! Ut asperiores
                  praesentium consequatur.{" "}
                </li>
                <li>
                  Officiis iure deleniti, distinctio, minima corporis, dolorum
                  dolore illo! Dolorem, impedit.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Iusto, fugiat!
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
                  cum.
                </li>
                <li>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Recusandae.
                </li>
                <li>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Suscipit aspernatur impedit sint, nam eveniet quaerat!
                </li>
              </ul>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
              quae deserunt aliquam obcaecati provident. Dolorum nesciunt
              recusandae cum ullam assumenda optio dolore aperiam inventore ex
              temporibus, quisquam eligendi fugiat laboriosam, pariatur debitis
              perferendis voluptates. Iure harum eius quo voluptas tenetur
              delectus. Cupiditate velit earum quo dignissimos? Soluta maiores
              esse ex.
              <ul>
                <br />
                <li>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Culpa, aut pariatur! Quam, qui aliquam.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Incidunt quasi distinctio beatae commodi?
                </li>
                <li>Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae doloribus saepe voluptas corrupti. Adipisci unde
                  facere nesciunt non!
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Consequatur reiciendis necessitatibus libero quibusdam.
                </li>
              </ul>
            </p>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </PrarentDialogDiv>
  );
}
