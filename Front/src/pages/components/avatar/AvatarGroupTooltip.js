import AvatarGroup from './AvatarGroup'

const data = [
  {
    title: 'Vinnie Mostowy',
    img: require('../../../assets/images/portrait/small/avatar-s-5.jpg').default
  },
  {
    title: 'Elicia Rieske',
    img: require('../../../assets/images/portrait/small/avatar-s-7.jpg').default
  },
  {
    title: 'Julee Rossignol',
    img: require('../../../assets/images/portrait/small/avatar-s-10.jpg').default
  },
  {
    title: 'Darcey Nooner',
    img: require('../../../assets/images/portrait/small/avatar-s-11.jpg').default
  },
  {
    title: 'Jenny Looper',
    img: require('../../../assets/images/portrait/small/avatar-s-20.jpg').default
  }
]

const AvatarGroupComponent = () => {
  return <AvatarGroup data={data} />
}

export default AvatarGroupComponent
