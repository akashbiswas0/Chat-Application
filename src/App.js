import { ChatEngine } from "react-chat-engine";

import ChatFeed from './components/ChatFeed';

import './App.css';
import LoginForm from "./components/LoginForm";
//main app.js
const App = () => {
  if(!localStorage.getItem('username')) return <LoginForm />
  return (
    <ChatEngine 
        height="100vh"
        projectID="5d902034-9f18-478e-a962-bc91f10338e4" 
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
}

export default App