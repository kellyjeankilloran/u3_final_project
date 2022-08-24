import Category from './Category'

let Meditation = (props) => {
  return (
    <div className="meditationContainer">
      <div key={props.meditation.id}>
        <img
          src={props.meditation.cover_image}
          alt="logo for each recorded meditation"
        />
        <h2 className="medTitle">{props.meditation.title}</h2>
        <ul className="info">{props.meditation.teacher}</ul>
        <ul className="info">{props.meditation.length}</ul>
      </div>
      <div className="cat_block">
        {props.meditation.category.map((category) => (
          <Category key={category.id} name={category.name} />
        ))}
      </div>
    </div>
  )
}
export default Meditation
