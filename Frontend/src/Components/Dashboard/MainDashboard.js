import React, { useState } from 'react';
import DashboardNav from './DashboardNav';
import styles from './main-dashboard.module.css';
import DashboardChats from './DashboardChats';
import Dashboard_MessageView from './Dashboard_MessageView';

const initialConversations = [
  {
    id: 1,
    sender: 'ChatBot',
    messages: [
      { id: 1, text: 'Hello! 👋 Welcome to our chatbot.', sender: 'bot' },
      { id: 2, text: 'How can I assist you today?', sender: 'bot' },
    ],
    date: new Date().toLocaleDateString(),
  },
  {
    id: 2,
    sender: 'ChatBot',
    messages: [
      { id: 1, text: 'Type your message', sender: 'bot' },
    ],
    date: new Date().toLocaleDateString(),
  },
];

const MainDashboard = () => {
  const [conversations, setConversations] = useState(initialConversations);
  const [selectedConversationId, setSelectedConversationId] = useState(null);

  const selectedConversation = conversations.find(c => c.id === selectedConversationId);

  const handleAddMessage = (text) => {
    if (!selectedConversation) return;

    const newMessage = {
      id: selectedConversation.messages.length + 1,
      text,
      sender: 'user',
    };


    const updatedConversations = conversations.map(conv => {
      if (conv.id === selectedConversationId) {
        return {
          ...conv,
          messages: [...conv.messages, newMessage],
        };
      }
      return conv;
    });

    setConversations(updatedConversations);
  };

  return (
    <div className={styles.mainDashboard}>
      <div className={styles.dashNav}>
        <DashboardNav />
      </div>
      <div className={styles.dashChat}>
        <DashboardChats 
          conversations={conversations} 
          onMessageClick={(conv) => setSelectedConversationId(conv.id)} 
        />
      </div>
      <div className={styles.dashMsgView}>
        <Dashboard_MessageView 
          message={selectedConversation} 
          onSendMessage={handleAddMessage} 
        />
      </div>
    </div>
  );
};

export default MainDashboard;
