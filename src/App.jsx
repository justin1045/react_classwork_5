import React, { useState } from "react";
import Form from "./Form";
import List from "./List";

function Gmain() {
  const [data, setData] = useState([]);
  const [subject, setSubject] = useState("");
  const [hours, setHours] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const newInfo = {
      subject: subject,
      hours: hours,
      id: Date.now(),
    };
    setData([...data, newInfo]);
    setSubject("");
    setHours("");
  }

  function handleEdit(listID, sign) {
    let copy = [...data];
    setData(
      copy.map((obj) => {
        if (obj.id === listID) {
          return {
            ...obj,
            hours:
              sign == "+" ? Number(obj.hours) + 1 : Number(obj.hours) - 1,
          };
        }
        return obj;
      })
    );
  }

  return (
    <>
      <Form
        subject={subject}
        setSubject={setSubject}
        hours={hours}
        setHours={setHours}
        handleSubmit={handleSubmit}
      />
      <List arr={data} handleEdit={handleEdit} />
    </>
  );
}

export default Gmain;
