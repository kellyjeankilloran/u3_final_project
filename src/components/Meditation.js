let Meditation = (props) => {
  return (
    <div>
      <div key={props.meditation.id}>
        <h2>{props.meditation.title}</h2>
        <ul>{props.meditation.teacher}</ul>
        <ul>{props.meditation.length}</ul>
      </div>
    </div>
  )
}
export default Meditation
