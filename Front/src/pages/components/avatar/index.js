import { Fragment, useEffect } from 'react'
import Prism from 'prismjs'
import { Row, Col, CardText } from 'reactstrap'
import AvatarInitials from './AvatarInitials'
import AvatarSizes from './AvatarSizes'
import AvatarColors from './AvatarColors'
import AvatarLightColors from './AvatarLightColors'
import AvatarIcons from './AvatarIcons'
import AvatarStatus from './AvatarStatus'
import AvatarGroup from './AvatarGroup'
import AvatarGroupTooltip from './AvatarGroupTooltip'
import {
  avatarColors,
  avatarLightColors,
  avatarInitials,
  avatarIcons,
  avatarSizes,
  avatarGroup,
  avatarGroupTooltip,
  avatarStatus,
} from './AvatarSourceCode'

const Avatar = () => {
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <Fragment>
    
      <Row className='match-height'>
      </Row>
    </Fragment>
  )
}
export default Avatar
