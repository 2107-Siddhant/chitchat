import React, { useState, useEffect } from 'react';
import DashboardNav from './DashboardNav';
import styles from './main-dashboard.module.css';
import DashboardChats from './DashboardChats';
import Dashboard_MessageView from './Dashboard_MessageView';

const MainDashboard = ({ userId }) => {
  const [conversations, setConversations] = useState([]);
  const [selectedConversationId, setSelectedConversationId] = useState(null);

  // Fetch messages from backend
  useEffect(() => {
    const fetchChat = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/chat/${userId}`);
        const data = await res.json();

        if (data && data.messages) {
          const chatConversation = {
            id: 1,
            sender: 'ChatBot',
            messages: data.messages.map((msg, index) => ({
              id: index + 1,
              text: msg.text,
              sender: msg.Sender,
              timestamp: msg.timestamp,
            })),
            date: new Date().toLocaleDateString(),
          };

          setConversations([chatConversation]);
        }
      } catch (err) {
        console.error('Error fetching messages:', err);
      }
    };

    fetchChat();
  }, [userId]);

  const selectedConversation = conversations.find(c => c.id === selectedConversationId);

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
          onSendMessage={() => {}}
        />
      </div>
    </div>
  );
};

export default MainDashboard;
