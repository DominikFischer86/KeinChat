import { useConversations } from "../context/ConversationsProvider"

type ListItemProps = {
  conversation: { recipients: [] | any; selected: boolean }
  selectConversationIndex: any
  index: number
}

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

const ListItem = ({
  conversation,
  selectConversationIndex,
  index,
}: ListItemProps) => (
  <li
    onClick={() => selectConversationIndex(index)}
    className={conversation.selected ? "active" : ""}
    title={conversation.recipients.map(
      (recipient: { name: string }) => " " + recipient.name
    )}
  >
    {conversation.recipients.map((recipient: any, index: number) =>
      recipientList(conversation, recipient, index)
    )}
  </li>
)

const Conversations = () => {
  const { conversations, selectConversationIndex } = useConversations()

  return (
    <ul className="list-group">
      {conversations.map(
        (
          conversation: { recipients: [] | any; selected: boolean },
          index: number
        ) => (
          <ListItem
            key={index}
            conversation={conversation}
            selectConversationIndex={selectConversationIndex}
            index={index}
          />
        )
      )}
    </ul>
  )
}

export default Conversations
