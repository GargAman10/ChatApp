import { MultiChatSocket,MultiChatWindow,useMultiChatLogic } from "react-chat-engine-advanced";

const ChatsPage= (props) => {
  const chatProps = useMultiChatLogic('f493a13f-a06b-4457-adec-fe2c8b9954f6',
 
  props.user.username,
  props.user.secret
  );
  return (
  <div style={{ height: '100vh' }}>
  <MultiChatSocket {... chatProps} />
  <MultiChatWindow {...chatProps} style={{ height: '100%'}} />
  </div>
  );
}
  export default ChatsPage
