import React from 'react';
import { GiftedChat } from 'react-native-gifted-chat'; // 0.3.0

import FirebaseService from '../services/FirebaseService';

type Props = {
  name?: string,
  email?: string,
  avatar?: string,
};

class Chat extends React.Component<Props> {

  constructor(props) {
    super(props);
  }
  static navigationOptions = ({ navigation }) => ({
    title: (navigation.state.params || {}).name || 'Chat!',
  });

  state = {
    messages: [],
  };

  get user() {
    return {
      name: this.props.navigation.state.params.name,
      email: this.props.navigation.state.params.email,
      avatar: this.props.navigation.state.params.avatar,
      id: FirebaseService.uid,
      _id: FirebaseService.uid, // need for gifted-chat
    };
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={FirebaseService.send}
        user={this.user}
      />
    );
  }

  componentDidMount() {
    FirebaseService.refOn(message =>
      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, message),
      }))
    );
  }
  componentWillUnmount() {
    FirebaseService.refOff();
  }
}

export default Chat;
