function JSXExamples() {
  const name = "Louis Tan";
  const isLearning = true;
  const skills = ['JavaScript', 'React', 'CSS']

  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>{isLearning ? "Currently learning React" : "React expert"}</p>
      <div className="skill-container">
        <h3>Skills:</h3>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>

      <img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/1280px-Vitejs-logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail" border="0" height="400" width="400" alt="Vite logo" />
      <br />
      <hr />
    </div>
  )
}

export default JSXExamples