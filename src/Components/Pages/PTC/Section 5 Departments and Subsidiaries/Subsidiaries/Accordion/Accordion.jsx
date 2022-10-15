import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgb(244 244 244)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography style={{ fontSize: "1.15rem", fontWeight: "600" }}>
            PTDC Motels North (Pvt.) Ltd.
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={"span"} variant={"body2"}>
            <p style={{ fontSize: "15px" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur molestiae atque et at? Repudiandae quidem culpa
              libero nesciunt modi obcaecati harum atque sit dolorem! Quis,
              maiores incidunt! Ipsam, tempore at. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Reprehenderit, saepe.
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography style={{ fontSize: "1.15rem", fontWeight: "600" }}>
            PTDC Motels South (Pvt.) Ltd.
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={"span"} variant={"body2"}>
            <p style={{ fontSize: "15px" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur molestiae atque et at? Repudiandae quidem culpa
              libero nesciunt modi obcaecati harum atque sit dolorem! Quis,
              maiores incidunt! Ipsam, tempore at. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Reprehenderit, saepe.
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography style={{ fontSize: "1.15rem", fontWeight: "600" }}>
            Associated Hotels of Pakistan (AHP)
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={"span"} variant={"body2"}>
            <p style={{ fontSize: "15px" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur molestiae atque et at? Repudiandae quidem culpa
              libero nesciunt modi obcaecati harum atque sit dolorem! Quis,
              maiores incidunt! Ipsam, tempore at. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Reprehenderit, saepe.
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography style={{ fontSize: "1.15rem", fontWeight: "600" }}>
            Pakistan Tours (Pvt.) Ltd (PTL)
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={"span"} variant={"body2"}>
            <p style={{ fontSize: "15px" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur molestiae atque et at? Repudiandae quidem culpa
              libero nesciunt modi obcaecati harum atque sit dolorem! Quis,
              maiores incidunt! Ipsam, tempore at. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Reprehenderit, saepe.
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
