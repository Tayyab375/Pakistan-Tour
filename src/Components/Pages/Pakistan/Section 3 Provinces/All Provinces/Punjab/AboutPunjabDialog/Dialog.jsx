import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

// ----------------import style------------------
import { PrarentDialogDiv, Ptag } from "./Dialog.styled";

// --------------------import color----------------------------
import { drakGreen } from "../../../../../../Reusable/Colors";

export default function ScrollDialog(props) {
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
        <h1 style={{ color: drakGreen }}>{props.heading}</h1>
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
            component={"span"}
            variant={"body2"}
          >
            <Ptag>
              {" "}
              Punjab (Punjabi and Urdu: پنجاب, Panjāb) is one of the four
              provinces of Pakistan. Punjab is the second-largest province of
              Pakistan by land area and the most populous Pakistani province.
              <br />
              <br />
              Forming the bulk of the transnational Punjab region between
              Pakistan and India, it is bounded locally by Sindh to the south,
              Balochistan to the west, Khyber Pakhtunkhwa to the northwest, the
              Islamabad Capital Territory to the north, and the
              Pakistani-administered territory of Azad Jammu and Kashmir to the
              northeast. On its eastern side, it is bounded by the
              India–Pakistan border, sharing an international boundary with the
              Indian states of Punjab and Rajasthan to the east and southeast,
              respectively, and a disputed boundary with the Indian-administered
              territory of Jammu and Kashmir to the northeast. The province's
              capital is Lahore—a cultural, modern, historical, economic, and
              cosmopolitan centre of Pakistan, where the country's cinema
              industry and much of its fashion industry are based. Other major
              cities include Faisalabad, Rawalpindi, Gujranwala, Multan, and
              Sialkot. Punjab is also the world's fifth-most populous
              subnational entity, and the most populous outside of China and
              India.
              <br />
              <br /> Modern-day Pakistani Punjab has been inhabited since
              ancient times; the Indus Valley civilization, dating to 3300 BCE,
              was first discovered at Harappa. It features heavily in the
              Sanskrit-language Indian epic known as the Mahabharata, and is
              also home to Taxila, the site of what is considered by many
              scholars to be the oldest university in the world.
              <br />
              <br /> Multan was the ancient capital and cultural centre of the
              region, it was conquered by Alexander the Great after a fierce
              battle. In 326 BCE, Alexander the Great defeated the ancient
              Indian king Porus in the Battle of the Hydaspes near Mong.
              Subsequently, Punjab formed part of the Maurya Empire, the Kushan
              Empire, and the Gupta Empire. In the 7th century, the region saw
              its first wave of Arab conquests, which introduced Islam; by the
              8th century, when Muhammad bin Qasim conquered the key city of
              Multan.
              <br />
              <br /> The Umayyad Caliphate had largely conquered Punjab. Arabs
              ruled the region for next 3 centuries with their capital in
              Multan. In the subsequent centuries, the region was conquered by
              various dynasties, including the Hindu Shahis, the Ghaznavids, the
              Ghurids, the Delhi Sultanate, the Mughal Empire, the Afghan
              Empire, and the Sikh Empire. During the 18th century, an Iranian
              invasion of Mughal-ruled India under Iranian ruler Nader Shah
              caused Mughal authority in Punjab to collapse. Later, the region
              was conquered by the Afghans under Ahmad Shah Durrani; the Afghan
              Empire eventually lost control of Punjab as a result of the
              Afghan–Sikh Wars. In 1799, the Sikh Empire was formally
              established under the rule of Ranjit Singh with its capital based
              in Lahore, and Punjab remained under Sikh rule until the arrival
              of the British Empire. The region was central to the independence
              movements of Pakistan and India, with Lahore being the site of
              both the Declaration of Indian Independence as well as the Lahore
              Resolution that called for the establishment of a separate state
              for Indian Muslims. The modern-day Pakistani province has its
              roots in the Punjab Province of British India, which was divided
              along religious boundaries by the Radcliffe Line during the
              partition of India in 1947.
              <br />
              <br /> Punjab is Pakistan's most industrialized province, with the
              industrial sector comprising 24 percent of the province's gross
              domestic product. It is known across Pakistan for its relative
              prosperity, and has the lowest rate of poverty among all Pakistani
              provinces. However, a clear divide is present between the northern
              and southern portions of the province; with poverty rates in
              northern Punjab being among the lowest in Pakistan, while some in
              southern Punjab are among the most impoverished. Punjab is also
              one of the most urbanized regions of South Asia, with
              approximately 40 percent of its population being concentrated in
              urban areas. <br />
              <br /> It has been strongly influenced by Sufism, with numerous
              Sufi shrines spread across the province, attracting millions of
              devotees annually. Guru Nanak, the founder of Sikhism, was born in
              the town of Nankana Sahib, near Lahore. Punjab is also the site of
              the Katas Raj Temples, which feature prominently in Hindu
              mythology. Several of the World Heritage Sites listed by UNESCO
              are located in Punjab, including the Shalimar Gardens, the Lahore
              Fort, the archaeological excavations at Taxila, and the Rohtas
              Fort, among others.
            </Ptag>
            <br />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </PrarentDialogDiv>
  );
}
