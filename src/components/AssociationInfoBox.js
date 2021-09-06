import { Icon } from '@iconify/react'
import phoneIcon from '@iconify/icons-mdi/phone'

const AssociationInfoBox = ({ info }) => {
    return (
        <div className="association-info">
            <h2>Association Info</h2>
            <ul>
        <li>NAME: <strong>{ info.name }</strong></li>        
        <li>NAME: <strong>{ info.name }</strong></li>
        <li><Icon icon={phoneIcon} className="phone-icon" /> <strong>{ info.tel }</strong></li>
            </ul>
            
        </div>
    )
}

export default AssociationInfoBox
