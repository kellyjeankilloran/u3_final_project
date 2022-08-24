import Category from './Category'

let Meditation = (props) => {
  return (
    <div>
      <div key={props.meditation.id}>
        <img
          src={props.meditation.cover_image}
          alt="logo for each recorded meditation"
        />
        <h2>{props.meditation.title}</h2>
        <ul className="info">{props.meditation.teacher}</ul>
        <ul className="info">{props.meditation.length}</ul>
      </div>
      {props.meditation.category.map((category) => (
        <Category
          className="cat_block"
          key={category.id}
          name={category.name}
        />
      ))}
    </div>
  )
}
export default Meditation
