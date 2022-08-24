const LiveClass = (props) => {
  console.log(props)
  return (
    <div>
      <p>{props.liveClasses.title}</p>
      <p>{props.liveClasses.date}</p>
      <p>{props.liveClasses.time}</p>
    </div>
  )
}

export default LiveClass

// let Aug25 = {
//   title: 'Breath + Sound w/ Lihi Benisty',
//   date: 'Thu, Aug 25',
//   time: '6:00 - 7:00pm PDT',
//   image:
//     'https://open-together.imgix.net/classes/breathe/highRes/5_landscape.jpg?auto=format&ar=16:9&w=768&fit=crop&dpr=2'
// }
// let Aug29 = {
//   title: 'Move w/ Ally Maz',
//   date: 'Mon, Aug 29',
//   time: '6:00 - 7:00pm PDT',
//   image:
//     'https://open-together.imgix.net/classes/move/highRes/5_landscape.jpg?auto=format&ar=16:9&w=768&fit=crop&dpr=2'
// }
// let Aug30 = {
//   title: 'Breath + Sound',
//   date: 'Tue, Aug 30',
//   time: '6:00 - 7:00pm PDT',
//   image:
//     'https://open-together.imgix.net/classes/breathe/highRes/2_landscape.jpg?auto=format&ar=16:9&w=768&fit=crop&dpr=2'
// }
// let Sep11 = {
//   title: 'Breathwork + Beach Cleanup w/ George Ramsay',
//   date: 'Sunday, Sep 11',
//   time: '10:00 - 12:00pm PDT',
//   image:
//     'https://open-together.imgix.net/classes/specialImagery/DSC04473.jpg?auto=format&ar=16:9&w=768&fit=crop&dpr=2'
// }
