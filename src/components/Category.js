const Category = (props) => {
  let Color
  switch (props.name) {
    case 'Inspire':
      Color = '#BF7D42'
      break
    case 'Calm':
      Color = '#C38F91'
      break
    case 'Ground':
      Color = '#8E8D76'
      break
    case 'Energize':
      Color = '#F9D685'
      break
    default:
      Color = 'gray'
  }
  return (
    <div style={{ backgroundColor: Color, color: 'black' }}>{props.name}</div>
  )
}

export default Category
