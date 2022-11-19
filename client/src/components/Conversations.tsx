import { useConversations } from "../context/ConversationsProvider"

const MAX_RECIPIENTS_BEFORE_TRIM = 2
const MAX_NAME_LENGTH_BEFORE_TRIM = 14

const trimLongAssNames = (name: string) => {
  if (name.length > MAX_NAME_LENGTH_BEFORE_TRIM)
    return name.substring(0, MAX_NAME_LENGTH_BEFORE_TRIM) + "..."
  return name
}

const recipientList = (conversation: any, recipient: any, index: number) => {
  const activeRecipients = conversation.recipients.length

  if (activeRecipients > MAX_RECIPIENTS_BEFORE_TRIM)
    return index === 0
      ? `${recipient.name} and ${
          activeRecipients - MAX_RECIPIENTS_BEFORE_TRIM + 1
        } others`
      : null
  return index === activeRecipients - 2
    ? trimLongAssNames(recipient.name) + ", "
    : trimLongAssNames(recipient.name)
}

const Conversations = () => {
  const { conversations } = useConversations()

  return (
    <ul className="list-group">
      {conversations.map((conversation: any, index: number) => (
        <li
          key={index}
          title={conversation.recipients.map(
            (recipient: any) => " " + recipient.name
          )}
        >
          {conversation.recipients.map((recipient: any, index: number) =>
            recipientList(conversation, recipient, index)
          )}
        </li>
      ))}
    </ul>
  )
}

export default Conversations
