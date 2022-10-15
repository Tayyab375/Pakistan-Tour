import React from "react";

// ------------------import style-----------------------
import { ContainerDiv } from "./Content.styled";

// -----------------import components--------------------
import ScrollDialog from "./Dialog/Dialog";

const TourismInPakistan = () => {
  return (
    <ContainerDiv>
      <h1>Tourism in Pakistan</h1>
      <h4>The Land Of Adventure And Nature</h4>
      <p>
        Tourism in Pakistan is a growing industry. In 2010, Lonely Planet termed
        Pakistan "tourism's 'next big thing' for more years than we care to
        remember". The country is geographically and ethnically diverse, and has
        a number of historical and cultural heritage sites. Pakistan was ranked
        The Best Holiday Destination for 2020 and was also declared the
        third-highest potential adventure destination in the world for 2020. As
        security in the country improves, tourism increases; in two years, it
        has increased by more than 300%. The Pakistani government had launched
        online visa services for 175 countries and 50 countries were offered
        visa on arrival, making a visit to Pakistan easier. The country received
        an influx of travel vloggers, who promoted the characteristics of the
        country, such as the Northern Areas like Hunza and Skardu.
      </p>
      <ScrollDialog dialogData={`<p>vishsgh</p>`} />
    </ContainerDiv>
  );
};

export default TourismInPakistan;
