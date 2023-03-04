type TChildren = JSX.Element | Array<JSX.Element> | string

interface IProps {
  condition: boolean
  wrapperTrue: (children: TChildren) => JSX.Element
  wrapperFalse: (children: TChildren) => JSX.Element
  children: TChildren
}

/**
 * Use to easily wrap content based on condition
 */
const ConditionalWrapper = ({
  condition,
  wrapperTrue,
  wrapperFalse,
  children,
}: IProps) => (condition ? wrapperTrue(children) : wrapperFalse(children))

export default ConditionalWrapper
