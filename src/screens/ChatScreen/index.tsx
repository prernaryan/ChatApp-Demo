import {StyleSheet, View} from 'react-native';
import React, {useCallback} from 'react';
import {GiftedChat, IMessage} from 'react-native-gifted-chat';
import {RouteProp, useRoute} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import {User} from '../auth/UsersScreen';

type RouteParams = {
  data: User;
  currentUser: User;
};
interface CustomMessage extends IMessage {
  sendBy: string;
  sendTo: string;
}
const ChatScreen = () => {
  const [messages, setMessages] = React.useState<CustomMessage[]>([]);
  const route = useRoute<RouteProp<{params: RouteParams}, 'params'>>();
  const {data, currentUser} = route.params ?? {};
  console.log(currentUser, 'currentUser');

  React.useEffect(() => {
    if (!currentUser?.userId || !data?.userId) {
      return;
    }
    const unsubscribe = firestore()
      .collection('Chats')
      .doc(`${currentUser?.userId}${data.userId}`)
      .collection('messages')
      .orderBy('createdAt', 'desc')
      .onSnapshot(querySnapshot => {
        const allMessages = querySnapshot.docs.map(doc => ({
          ...doc.data(),
          createdAt: doc.data().createdAt,
        }));
        console.log(allMessages, 'allMessages');

        setMessages(allMessages);
      });

    // Cleanup: call the unsubscribe function directly
    return unsubscribe;
  }, [currentUser?.userId, data?.userId]);

  const onSend = useCallback(
    (msgs: IMessage[]) => {
      if (!currentUser?.userId || !data?.userId) {
        return;
      }
      const msg = msgs[0];
      if (!msg) {
        return;
      }
      const myMsg: CustomMessage = {
        ...msg,
        sendBy: currentUser?.userId,
        sendTo: data.userId,
        createdAt:
          msg.createdAt instanceof Date ? msg.createdAt.getTime() : Date.now(),
      };
      console.log(myMsg, 'myMsg');

      // Update UI with the new message
      setMessages(prevMessages => GiftedChat.append(prevMessages, [myMsg]));
      // Save the message in Firestore for both users
      const userChatId = `${currentUser?.userId}${data.userId}`;
      const recipientChatId = `${data.userId}${currentUser?.userId}`;
      firestore()
        .collection('Chats')
        .doc(userChatId)
        .collection('messages')
        .add(myMsg);

      firestore()
        .collection('Chats')
        .doc(recipientChatId)
        .collection('messages')
        .add(myMsg);
    },
    [currentUser?.userId, data, setMessages],
  );

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#005959',
      }}>
      <GiftedChat
        messages={messages}
        onSend={msgs => onSend(msgs)}
        user={{
          _id: currentUser?.userId,
        }}
      />
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({});
