import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

// ----------------import style------------------
import { PrarentDialogDiv, Ptag } from "./Dialog.styled";

// --------------------import color----------------------------
import { drakGreen } from "../../../../Reusable/Colors";

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
        <h1 style={{ color: drakGreen }}>About Pakistan</h1>
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
            component={"span"}
            variant={"body2"}
          >
            <Ptag>
              Pakistan, officially the Islamic Republic of Pakistan, is a
              country in South Asia. It is the world's fifth-most populous
              country, with a population of almost 242 million, and has the
              world's second-largest Muslim population. Pakistan is the
              33rd-largest country by area, spanning 881,913 square kilometers
              (340,509 square miles). It has a 1,046-kilometre (650-mile)
              coastline along the Arabian Sea and Gulf of Oman in the south and
              is bordered by India to the east, Afghanistan to the west, Iran to
              the southwest, and China to the northeast. It is separated
              narrowly from Tajikistan by Afghanistan's Wakhan Corridor in the
              north, and also shares a maritime border with Oman. <br />
              <br />
              Pakistan is the site of several ancient cultures, including the
              8,500-year-old Neolithic site of Mehrgarh in Balochistan, and the
              Indus Valley civilisation of the Bronze Age, the most extensive of
              the civilisations of the Afro-Eurasia. The region that comprises
              the modern state of Pakistan was the realm of multiple empires and
              dynasties, including the Achaemenid; briefly that of Alexander the
              Great; the Seleucid, the Maurya, the Kushan, the Gupta; the
              Umayyad Caliphate in its southern regions, the Hindu Shahis, the
              Ghaznavids, the Delhi Sultanate, the Mughals, the Durranis, the
              Sikh Empire, British East India Company rule, and most recently,
              the British Indian Empire from 1858 to 1947. <br />
              <br />
              Spurred by the Pakistan Movement, which sought a homeland for the
              Muslims of British India, and election victories in 1946 by the
              All-India Muslim League, Pakistan gained independence in 1947
              after the Partition of the British Indian Empire, which awarded
              separate statehood to its Muslim-majority regions and was
              accompanied by an unparalleled mass migration and loss of life.
              Initially a Dominion of the British Commonwealth, Pakistan
              officially drafted its constitution in 1956, and emerged as a
              declared Islamic republic. In 1971, the exclave of East Pakistan
              seceded as the new country of Bangladesh after a nine-month-long
              civil war. In the following four decades, Pakistan has been ruled
              by governments whose descriptions, although complex, commonly
              alternated between civilian and military, democratic and
              authoritarian, relatively secular and Islamist. Pakistan elected a
              civilian government in 2008, and in 2010 adopted a parliamentary
              system with periodic elections. <br />
              <br />
              Pakistan is a regional and middle power nation, and has the
              world's sixth-largest standing armed forces. It is a declared
              nuclear-weapons state, and is ranked amongst the emerging and
              growth-leading economies, with a large and rapidly-growing middle
              class. Pakistan's political history since independence has been
              characterised by periods of significant economic and military
              growth as well as those of political and economic instability. It
              is an ethnically and linguistically diverse country, with
              similarly diverse geography and wildlife. The country continues to
              face challenges, including poverty, illiteracy, corruption and
              terrorism. Pakistan is a member of the United Nations, the
              Shanghai Cooperation Organisation, the Organisation of Islamic
              Cooperation, the Commonwealth of Nations, the South Asian
              Association for Regional Cooperation, and the Islamic Military
              Counter-Terrorism Coalition, and is designated as a major non-NATO
              ally by the United States.
              <br />
            </Ptag>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </PrarentDialogDiv>
  );
}
