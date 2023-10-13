import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import Logo from './robot.png';
import './ChatBot.css';

const steps = [
    {
      id: '0',
      message: 'Hey User!',
      trigger: '1',
    },
    {
      id: '1',
      message: 'Please enter your Name',
      trigger: '2',
    },
    {
      id: '2',
      user: true,
      trigger: '5',
    },
    {
      id: '5',
      message: "Hi {previousValue}, how can I help you today?",
      trigger: '6',
    },
    {
        id: '6',
        options: [
          {
            value: 1,
            label: 'Know about Termination Service',
            trigger: 'TerminationServiceExplanation',
          },
          {
            value: 2,
            label: 'Know about Status',
            trigger: 'StatusExplanation',
          },
          {
            value: 3,
            label: 'End Conversation',
            trigger: 'EndConversation',
          },
        ],
      },
      {
        id: 'TerminationServiceExplanation',
        component: (
            <div style={{background: "#5a287d", color:"#fff", padding: "5px"}}>
              <p>Here is some information about Termination Service:</p>
              <ul>
                <li>You need to first initiate the request</li>
                <li>Fill up the resignation form</li>
                <li>Submit it</li>
                <li>It will be verified and approved by HR</li>
              </ul>
            </div>
          ),
        trigger: '6', 
      },
      {
        id: 'StatusExplanation',
        component: (
            <div style={{background: "#5a287d", color:"#fff", padding: "5px"}}>
              <p>Here is some information about Termination Status:</p>
              <p><a href="/userdashboard/userstatus" style={{color: "#fff"}}>Status Page</a> for updates.</p>
              
            </div>
          ),
        trigger: '6', 
      },
      {
        id: 'EndConversation',
        message: 'Thank you for using ExitFlow🎉',
        end: true
      },
    
  ];
  
  
  
  
  
const theme = {
    background: '#fff',
    headerBgColor: '#5a287d',
    headerFontSize: '20px',
    botBubbleColor: '#5a287d',
    headerFontColor: 'white',
    botFontColor: 'white',
    userBubbleColor: '#5a287d',
    userFontColor: 'white',
};

const config = {
	botAvatar: Logo,
	floating: true,
};

const ChatBotApp = () => {
	return (
		<div className="chatbot">
            <ThemeProvider theme={theme}>
				<ChatBot
					headerTitle="ExitFlow"
					steps={steps}
					{...config}

				/>
                </ThemeProvider>
		</div>
	);
}

export default ChatBotApp;
