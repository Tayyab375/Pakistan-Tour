import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

// ----------------import style------------------
import { PrarentDialogDiv } from "./Dialog.styled";

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
        <h1 style={{ color: drakGreen }}>Welcome to Pakistan</h1>
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            Tourism in Pakistan is a growing industry. In 2010, Lonely Planet
            termed Pakistan "tourism's 'next big thing' for more years than we
            care to remember". The country is geographically and ethnically
            diverse, and has a number of historical and cultural heritage sites.
            Pakistan was ranked The Best Holiday Destination for 2020 and was
            also declared the third-highest potential adventure destination in
            the world for 2020. As security in the country improves, tourism
            increases; in two years, it has increased by more than 300%. The
            Pakistani government had launched online visa services for 175
            countries and 50 countries were offered visa on arrival, making a
            visit to Pakistan easier. The country received an influx of travel
            vloggers, who promoted the characteristics of the country, such as
            the Northern Areas like Hunza and Skardu.
            <br />
            <br />
            In 2018, the British Backpacker Society ranked Pakistan the world's
            top adventure travel destination, describing the country as "one of
            the friendliest countries on earth, with mountain scenery that is
            beyond anyone's wildest imagination". Forbes ranked Pakistan as one
            of the 'coolest places' to visit in 2019. The World Economic Forum's
            Travel and Tourism Competitiveness Report placed Pakistan in the top
            25 per cent of global destinations for its World Heritage sites,
            which range from the mangroves in the Indus delta to the Indus
            Valley civilization sites including Mohenjo-daro and Harappa. <br />
            <br />
            According to the World Economic Forum's Travel and Tourism
            Competitiveness Report 2017, the direct contribution of travel and
            tourism to Pakistan's GDP in 2015 was US$328.3 million, constituting
            2.8% of the total GDP. According to the World Travel and Tourism
            Council, the direct contribution of travel and tourism to Pakistan's
            GDP in 2016 was Rs. 793 billion (equivalent to Rs. 4.0 trillion or
            US$18 billion in 2021), constituting 2.7% of the total GDP. By 2025,
            the government predicts tourism will contribute Rs. 1 trillion
            (US$4.4 billion) to the Pakistani economy. <br />
            <br />
            In October 2006, one year after the 2005 Kashmir earthquake, The
            Guardian released a list of "the top five tourist sites in Pakistan"
            to help the country's tourism industry. The sites included Lahore,
            the Karakoram Highway, Karimabad and Lake Saiful Muluk. To promote
            the country's cultural heritage, in 2007, Pakistan launched the
            "Visit Pakistan" marketing campaign that involved events including
            fairs, religious festivals, regional sporting events, arts and craft
            shows, folk festivals and openings of historical museums. <br />
            <br />
            In 2013, over half a million tourists visited Pakistan, contributing
            $298 million; these figures have since risen to over 6.6 million
            tourists in 2018. By comparison, Pakistan's domestic tourism
            industry is estimated at 50 million tourists who travel to the
            country on short trips usually between May to August. The largest
            inflow of tourists are from the United Kingdom, followed by United
            States, India and China. <br />
            <br />
            From the mighty stretches of the Karakorum's in the North to the
            vast alluvial delta of the Indus River in the South, Pakistan
            remains a land of high adventure and nature. Trekking,
            mountaineering, {"white"} water rafting, wild boar hunting, mountain
            and desert jeep safaris, camel and yak safaris, trout fishing and
            bird watching, are a few activities, which entice the adventure and
            nature lovers to Pakistan. <br />
            <br />
            Pakistan is endowed with a rich and varied flora and fauna. High
            Himalayas, Karakoram and the Hindukush ranges with their alpine
            meadows and permanent snow line, coniferous forests down the
            sub-mountain scrub, the vast Indus plain merging into the great
            desert, the coast line and wetlands, all offer a remarkably rich
            variety of vegetation and associated wildlife including avifauna,
            both endemic and migratory. Ten of 18 mammalian orders are
            represented in Pakistan with species ranging from the world's
            smallest surviving mammals, the Mediterranean Pigmy Shrew, to the
            largest mammal ever known; the blue whale. <br />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </PrarentDialogDiv>
  );
}
