import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SCREEN_WIDTH} from '../../../utils/responsive';
import {asyncStorageKey, images, RouteName} from '../../../constants';
import {navigate} from '../../../services/navigationService';
import {getStoredItem} from '../../../services/asyncStorage';

export type User = {
  id: string;
  name: string;
  email: string;
  userId: string;
};

const UserScreen: React.FC = () => {
  const {top} = useSafeAreaInsets();
  const [users, setUsers] = React.useState<User[]>([]);
  const [currentUser, setCurrentUser] = React.useState<User | null>(null);

  React.useEffect(() => {
    fetchCurrentUser();
  }, []);

  const fetchCurrentUser = async () => {
    try {
      const user = await getStoredItem(asyncStorageKey.User);
      console.log(user, 'user ');

      if (user) {
        console.log('hhiiii');

        setCurrentUser({
          id: user?.userID,
          name: '',
          email: user?.email,
          userId: user?.userId,
        }); // Assuming name is not required here
        fetchUsers(user?.email);
      }
    } catch (error) {
      console.error('Error fetching current user:', error);
    }
  };

  const fetchUsers = async (currentUserEmail: string) => {
    console.log(currentUserEmail, 'currentUserEmail');

    try {
      const querySnapshot = await firestore()
        .collection('Users')
        .where('email', '!=', currentUserEmail)
        .get();

      const userList: User[] = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...(doc.data() as Omit<User, 'id'>),
      }));
      console.log(userList, 'userList');

      setUsers(userList);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const renderItem = ({item}: {item: User}) => (
    <TouchableOpacity
      style={styles.userContainer}
      onPress={() =>
        navigate(RouteName.CHAT_SCREEN, {
          data: item,
          currentUser: currentUser,
        })
      }>
      <Image source={images.USERICON} style={styles.userIcon} />
      <Text style={styles.userName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={[styles.header, {marginTop: top + 30}]}>
        <Text style={styles.title}>You can Chat with these People!</Text>
        <FlatList
          data={users}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default UserScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#005959',
  },
  header: {
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 30,
  },
  userContainer: {
    alignSelf: 'center',
    marginVertical: 20,
    width: SCREEN_WIDTH - 40,
    padding: 10,
    borderWidth: 1,
    borderColor: '#8e7cc3',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  userIcon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  userName: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
  },
});
