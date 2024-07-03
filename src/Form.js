import React, { useState } from "react";

export default function Form() {
  const [students, setStudents] = useState({});

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

  function handleSave() {
    alert("Student registered");
  }

  return (
    <div>
      <form>
        <label>
          Name : <input value={students.name} onChange={handleNameChange} />
        </label>
        <br />
        <label>
          Surname :{" "}
          <input value={students.surname} onChange={handleSurnameChange} />
        </label>
        <br />
        <label>
          BirthDate :{" "}
          <input value={students.birthDate} onChange={handleBirthDateChange} />
        </label>
        <br />
        <label>
          Score : <input value={students.score} onChange={handleScoreChange} />
        </label>
        <br />
        <label>
          Image : <input value={students.image} onChange={handleImageChange} />
        </label>
        <br />
        <button onClick={handleSave}>Save</button>
      </form>
      <section>
        <h1>Students</h1>
        <p>{students.name}</p>
        <p>{students.surname}</p>
        <p>{students.birthDate}</p>
        <p>{students.score}</p>
        <p>{students.image}</p>
      </section>
    </div>
  );
}
