import "./styles.css";
function addPerson(
  name,
  pronouns,
  school,
  year,
  color,
  platform,
  animal,
  nickname
) {
  return (
    <div class="row">
      <div class="name">{name}</div>
      <div class="pronouns">{pronouns}</div>
      <div class="school">{school}</div>
      <div class="year">{year}</div>
      <div class="color">{color}</div>
      <div class="platform">{platform}</div>
      <div class="animal">{animal}</div>
      <div class="nickname">{nickname}</div>
    </div>
  );
}

export default function App() {
  let Eric = addPerson(
    "Eric Salazar",
    "He/Him",
    "Williamsburg Charter High School",
    "2022",
    "Blue",
    "Tiktok",
    "Cat ",
    "None"
  );
  let Mikkail = addPerson(
    "Mikkail Allen",
    "He/Him",
    "Williamsburg Charter High School",
    "2022",
    "Red",
    "Instagram",
    "Dogs ",
    "Cool Guy"
  );

  let People = [];
  People.push(Eric);
  People.push(Mikkail);

  return (
    <div className="App">
      <h1>11/1 Assigment</h1>

      <div class="people">{People}</div>

      {}
      <div class="row"></div>
    </div>
  );
}
