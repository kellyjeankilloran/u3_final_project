const LiveClass = (props) => {
  console.log(props)
  return (
    <div className="liveClassList">
      <div>
        <p>{props.liveclasses[0].title}</p>
        <p>{props.liveclasses[0].date}</p>
        <p>{props.liveclasses[0].time}</p>
      </div>
      <div>
        <p>{props.liveclasses[1].title}</p>
        <p>{props.liveclasses[1].date}</p>
        <p>{props.liveclasses[1].time}</p>
      </div>
      <div>
        <p>{props.liveclasses[2].title}</p>
        <p>{props.liveclasses[2].date}</p>
        <p>{props.liveclasses[2].time}</p>
      </div>
      <div>
        <p>{props.liveclasses[3].title}</p>
        <p>{props.liveclasses[3].date}</p>
        <p>{props.liveclasses[3].time}</p>
      </div>
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
