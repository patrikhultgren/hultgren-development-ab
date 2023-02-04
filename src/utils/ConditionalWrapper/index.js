import PropTypes from 'prop-types'

const ConditionalWrapper = ({
  condition,
  wrapperTrue,
  wrapperFalse,
  children,
}) => (condition ? wrapperTrue(children) : wrapperFalse(children))

ConditionalWrapper.propTypes = {
  condition: PropTypes.bool.isRequired,
  wrapperTrue: PropTypes.func.isRequired,
  wrapperFalse: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}

export default ConditionalWrapper
