import React from "react";
import { DepartmentParentDiv, ContentDiv } from "./Departments.styled";

const Departments = () => {
  return (
    <DepartmentParentDiv>
      <h1>Departments</h1>

      <ContentDiv>
        <h3>1. Tourist Information Centres</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nostrum
          quisquam at, sunt in aliquam dolor totam ipsa, illum est dignissimos
          facilis quae doloribus consequuntur, a fuga temporibus consectetur
          dolores?
        </p>
        <h3>2. Marketing / Publicity {"&"} Promotion</h3>
        <ul>
          <li>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic,
            nobis.
          </li>
          <li>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non minus
            autem voluptas!
          </li>
          <li>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem
            laboriosam facilis illum eius voluptas, architecto nulla esse
            doloribus deleniti aut?
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum cum
            aut cumque architecto dolorem molestias!
          </li>
          <li>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque?
          </li>
        </ul>
        <h3>3. Planning, Development {"&"} Engineering</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quaerat
          rem fugiat, nobis vero vitae, quos corporis temporibus nulla quae esse
          dolore, labore tenetur praesentium voluptatibus tempore odit eveniet
          doloremque?
        </p>
        <h3>4. Personnel {"&"} Administration</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
          deserunt ad impedit eius harum doloribus.
        </p>
        <h3>5. Finance {"&"} Account</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
          temporibus ducimus! Tenetur, quis distinctio?
        </p>
      </ContentDiv>
    </DepartmentParentDiv>
  );
};

export default Departments;
