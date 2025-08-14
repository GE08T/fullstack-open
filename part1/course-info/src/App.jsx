const Header = ({name}) => {
  return <h1>{name}</h1>
}

const Content = ({parts}) => {
  return (
    <div>
      <Part part={parts[0]} />
      <Part part={parts[1]} />
      <Part part={parts[2]} />
    </div>
  )
}

const Part = ({part}) => {
  return <p>{part.name} {part.exercise}</p>
}

const Total = ({parts}) => {
  const total = parts[0].exercise + parts[1].exercise + parts[2].exercise;
  return <p>Number of exercises {total}</p>
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {name: 'Fundamentals of React', exercise: 10},
      {name: 'Using props to pass data', exercise: 7},
      {name: 'State of a component', exercise: 14}
    ]
  }

  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App