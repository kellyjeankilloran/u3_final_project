const Category = (props) => {
  let Color
  switch (props.name) {
    case 'Inspire':
      Color = '#AAAE8E'
      break
    case 'Calm':
      Color = '#FF0022'
      break
    case 'Ground':
      Color = '#41EAD4'
      break
    case 'Energize':
      Color = '#5C2751'
      break
    default:
      Color = 'gray'
  }
  return (
    <div style={{ backgroundColor: Color, color: 'black' }}>{props.name}</div>
  )
}

export default Category
