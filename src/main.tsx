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
  TamilOpenChatPage,
  ProgrammaticSeoPage
} from './SeoPages.tsx'

const path = window.location.pathname.replace(/\/+$/, '') || '/';
const isBaseRoute = path === '/' || path.endsWith('/tamilchat/') || path.endsWith('/tamilchat');
let ComponentToRender: any = App;

// Programmatic SEO routes
const programmaticSlugs = [
  'chennai-tamil-chat',
  'coimbatore-tamil-chat',
  'madurai-tamil-chat',
  'trichy-tamil-chat',
  'salem-tamil-chat',
  'tirunelveli-tamil-chat',
  'singapore-tamil-chat',
  'malaysia-tamil-chat',
  'sri-lanka-tamil-chat',
  'gulf-nri-tamil-chat',
  'tamil-cinema-chat',
  'tamil-voice-chat',
  'tamil-friends-chat',
  'tamil-anonymous-chat'
];

const matchedProgrammaticSlug = programmaticSlugs.find(slug => path.includes(`/${slug}`));

if (matchedProgrammaticSlug) {
  ComponentToRender = () => <ProgrammaticSeoPage slug={matchedProgrammaticSlug} />;
} else if (path.includes('/privacy')) {
  ComponentToRender = PrivacyPage;
} else if (path.includes('/terms')) {
  ComponentToRender = TermsPage;
} else if (path.includes('/aup')) {
  ComponentToRender = AUPPage;
} else if (path.includes('/disclaimer')) {
  ComponentToRender = DisclaimerPage;
} else if (path.includes('/payment-help')) {
  ComponentToRender = PaymentHelpPage;
} else if (path.includes('/tamil-chat-rooms') || path.includes('/tamil-chat-room') || path.includes('/tamil-chatroom')) {
  ComponentToRender = TamilChatRoomsPage;
} else if ((path.includes('/tamil-video-call') || path.includes('/tamil-video-chat')) && !path.includes('/tamil-free-video-call') && !path.includes('/tamil-random-video-call')) {
  ComponentToRender = TamilVideoCallPage;
} else if (path.includes('/tamil-open-chat') || path.includes('/open-chat-tamil') || path.includes('/tamil-openchat')) {
  ComponentToRender = TamilOpenChatPage;
} else if (path.includes('/tamil-chatting-app')) {
  ComponentToRender = TamilChattingAppPage;
} else if (path.includes('/tamil-telegram-chatting')) {
  ComponentToRender = TamilTelegramChattingPage;
} else if (path.includes('/telegram-alternative-group-chat')) {
  ComponentToRender = TelegramAlternativeGroupChatPage;
} else if (path.includes('/tamil-chat-online')) {
  ComponentToRender = TamilChatOnlinePage;
} else if (path.includes('/tamil-free-video-call')) {
  ComponentToRender = TamilFreeVideoCallPage;
} else if (path.includes('/tamil-stranger-chat-website') || path.includes('/tamil-strangers-chatting-website') || path.includes('/tamil-strangers-chat') || path.includes('/strangers-tamil-chat') || path.includes('/tamil-stranger-chat')) {
  ComponentToRender = TamilStrangerChatPage;
} else if (path.includes('/tamil-random-chatting-website') || path.includes('/tamil-random-chat')) {
  ComponentToRender = TamilRandomChattingWebsitePage;
} else if (path.includes('/tamil-chatting-website') || path.includes('/tamil-chat-website')) {
  ComponentToRender = TamilChattingWebsitePage;
} else if (path.includes('/tamil-random-video-call') || path.includes('/tamil-random-call')) {
  ComponentToRender = TamilRandomVideoCallPage;
} else if (path.includes('/tamil-chat-live') || path.includes('/live-tamil-chat')) {
  ComponentToRender = TamilChatLivePage;
}

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
