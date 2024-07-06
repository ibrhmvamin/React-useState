import React, { useState } from "react";
import "./Form.css";

export default function Form() {
  const [students, setStudents] = useState({});
  const [notification, setNotification] = useState("");

  function handleNameChange(e) {
    setStudents({
      ...students,
      name: e.target.value,
    });
  }

  function handleSurnameChange(e) {
    setStudents({
      ...students,
      surname: e.target.value,
    });
  }

  function handleBirthDateChange(e) {
    setStudents({
      ...students,
      birthDate: e.target.value,
    });
  }

  function handleScoreChange(e) {
    setStudents({
      ...students,
      score: e.target.value,
    });
  }

  function handleImageChange(e) {
    setStudents({
      ...students,
      image: e.target.value,
    });
  }

  function handleSave(e) {
    e.preventDefault();
    setNotification("Student registered");
    setTimeout(() => {
      setNotification("");
      setStudents({});
    }, 2000);
  }

  return (
    <div className="form-container">
      <form>
        <label>
          Name :{" "}
          <input value={students.name || ""} onChange={handleNameChange} />
        </label>
        <br />
        <label>
          Surname :{" "}
          <input
            value={students.surname || ""}
            onChange={handleSurnameChange}
          />
        </label>
        <br />
        <label>
          BirthDate :{" "}
          <input
            type="date"
            value={students.birthDate || ""}
            onChange={handleBirthDateChange}
          />
        </label>
        <br />
        <label>
          Score :{" "}
          <input
            type="number"
            value={students.score || ""}
            onChange={handleScoreChange}
          />
        </label>
        <br />
        <label>
          Image :{" "}
          <input value={students.image || ""} onChange={handleImageChange} />
        </label>
        <br />
        <button onClick={handleSave}>Save</button>
      </form>
      {notification && <p className="notification">{notification}</p>}
      <section className="students-section">
        <h1>Students</h1>
        <p>Name: {students.name}</p>
        <p>Surname: {students.surname}</p>
        <p>BirthDate: {students.birthDate}</p>
        <p>Score: {students.score}</p>
        {students.image && (
          <img src={students.image} alt="Student" className="student-image" />
        )}
      </section>
    </div>
  );
}
