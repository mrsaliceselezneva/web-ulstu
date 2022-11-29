import PropTypes from 'prop-types'
import classNames from 'classnames'
import './status.scss'


const Status = ({ online }) => (
    <span className={classNames('status', { 'status--online': online })}>
        {online ? 'в сети' : 'не в сети'}
    </span>
)

Status.propTypes = {
    online: PropTypes.bool
}

export default Status