import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { PrivacyPage, TermsPage, AUPPage, DisclaimerPage, PaymentHelpPage } from './LegalPages.tsx'
import { 
  TamilChattingAppPage, 
  TamilTelegramChattingPage, 
  TelegramAlternativeGroupChatPage, 
  TamilChatOnlinePage, 
  TamilFreeVideoCallPage, 
  TamilStrangerChatPage, 
  TamilChattingWebsitePage, 
  TamilRandomChattingWebsitePage,
  TamilRandomVideoCallPage, 
  TamilChatLivePage, 
  TamilChatRoomsPage,
  TamilVideoCallPage,
  TamilOpenChatPage
} from './SeoPages.tsx'

const path = window.location.pathname;
const isBaseRoute = path === '/' || path.endsWith('/tamilchat/') || path.endsWith('/tamilchat');
let ComponentToRender = App;

if (path.includes('/privacy')) ComponentToRender = PrivacyPage;
if (path.includes('/terms')) ComponentToRender = TermsPage;
if (path.includes('/aup')) ComponentToRender = AUPPage;
if (path.includes('/disclaimer')) ComponentToRender = DisclaimerPage;
if (path.includes('/payment-help')) ComponentToRender = PaymentHelpPage;
if (path.includes('/tamil-chat-rooms') || path.includes('/tamil-chat-room') || path.includes('/tamil-chatroom')) ComponentToRender = TamilChatRoomsPage;
if ((path.includes('/tamil-video-call') || path.includes('/tamil-video-chat')) && !path.includes('/tamil-free-video-call') && !path.includes('/tamil-random-video-call')) ComponentToRender = TamilVideoCallPage;
if (path.includes('/tamil-open-chat') || path.includes('/open-chat-tamil') || path.includes('/tamil-openchat')) ComponentToRender = TamilOpenChatPage;
if (path.includes('/tamil-chatting-app')) ComponentToRender = TamilChattingAppPage;
if (path.includes('/tamil-telegram-chatting')) ComponentToRender = TamilTelegramChattingPage;
if (path.includes('/telegram-alternative-group-chat')) ComponentToRender = TelegramAlternativeGroupChatPage;
if (path.includes('/tamil-chat-online')) ComponentToRender = TamilChatOnlinePage;
if (path.includes('/tamil-free-video-call')) ComponentToRender = TamilFreeVideoCallPage;
if (path.includes('/tamil-stranger-chat-website') || path.includes('/tamil-strangers-chatting-website') || path.includes('/tamil-strangers-chat') || path.includes('/strangers-tamil-chat') || path.includes('/tamil-stranger-chat')) ComponentToRender = TamilStrangerChatPage;
if (path.includes('/tamil-random-chatting-website') || path.includes('/tamil-random-chat')) ComponentToRender = TamilRandomChattingWebsitePage;
if (path.includes('/tamil-chatting-website') || path.includes('/tamil-chat-website')) ComponentToRender = TamilChattingWebsitePage;
if (path.includes('/tamil-random-video-call') || path.includes('/tamil-random-call')) ComponentToRender = TamilRandomVideoCallPage;
if (path.includes('/tamil-chat-live') || path.includes('/live-tamil-chat')) ComponentToRender = TamilChatLivePage;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {!isBaseRoute ? (
      <div style={{ padding: '20px', height: '100%', overflowY: 'auto', display: 'flex', flexDirection: 'column', boxSizing: 'border-box' }}>
        <ComponentToRender />
      </div>
    ) : (
      <ComponentToRender />
    )}
  </StrictMode>,
)
