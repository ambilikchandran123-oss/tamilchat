import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define metadata for all sub-routes to optimize SEO and prevent duplicate canonical penalties
const routeMetadata = {
  // --- Tamil Primary Routes ---
  'tamil-chatting-website': {
    title: 'Tamil Chatting Website - #1 Free Tamil Nadu Online Chat & Video Call | TamilChat',
    description: 'Tamil Nadu\'s #1 Tamil chatting website for free anonymous chat rooms, stranger video calling, & 1-on-1 Tamil chat with zero registration.',
    h1: 'Tamil Chatting Website - #1 Free Tamil Nadu Online Chat Rooms',
    intro: 'Discover the #1 <strong>Tamil chatting website</strong> (<a href="https://tamilchat.online/">TamilChat.online</a>) for Tamilians worldwide. Chat anonymously, make new friends across Chennai, Kovai, and Madurai, and start free 1-on-1 video calls.'
  },
  'tamil-video-call': {
    title: 'Tamil Video Call - Free 1-on-1 Tamil Video Chat Online | TamilChat',
    description: 'Best Tamil video call platform online. Connect with Tamil strangers for free live video calls, random video matching, and audio chats without registration.',
    h1: 'Tamil Video Call Online - Free 1-on-1 Tamil Video Chat',
    intro: 'Join <strong>Tamil Video Call</strong> on TamilChat.online. Connect 1-on-1 with Tamil speakers across Chennai, Coimbatore, Madurai, Trichy, Salem, and global Tamils with zero paywalls and end-to-end encryption.'
  },
  'tamil-chat-online': {
    title: 'Tamil Chat Online - Meet Tamil Nadu Strangers & Chat Rooms | TamilChat',
    description: 'Join Tamil Chat Online to connect with Tamilians in Chennai, Kovai, Madurai, and global Tamils. 100% free text & video chat without registration.',
    h1: 'Tamil Chat Online - Meet Tamil Nadu Strangers & Friends',
    intro: 'Connect on <strong>Tamil Chat Online</strong>. Talk with Tamilians across Tamil Nadu and abroad in safe, moderated Tamil text and video lobbies with zero registration.'
  },
  'tamil-stranger-chat-website': {
    title: 'Tamil Stranger Chat Website - #1 Free Tamil Strangers Chat & Video | TamilChat',
    description: 'Join the #1 Tamil stranger chat website on TamilChat.online. Instant anonymous Tamil strangers chatting, live Tamil Nadu chat rooms, & 1-on-1 random video calls with zero registration.',
    h1: 'Tamil Stranger Chat Website - Anonymous Tamil Chat with Strangers',
    intro: 'Welcome to TamilChat.online, Tamil Nadu\'s leading <strong>Tamil stranger chat website</strong>. Connect with friendly Tamilians across Chennai, Kovai, Madurai, Trichy, Salem, and global Tamils in seconds with zero registration.'
  },
  'tamil-strangers-chat': {
    title: 'Tamil Strangers Chat - Chat with Strangers in Tamil Online | TamilChat',
    description: 'Join Tamil Strangers Chat on TamilChat.online. Talk and video call with random strangers in Tamil Nadu and worldwide. 100% free anonymous chat, zero registration.',
    h1: 'Tamil Strangers Chat - Chat with Strangers in Tamil Online',
    intro: 'Connect with thousands of active Tamil speakers on <strong>Tamil Strangers Chat</strong>. Enjoy anonymous 1-on-1 chats and high-definition WebRTC video calls with zero registration.'
  },
  'tamil-random-chatting-website': {
    title: 'Tamil Random Chatting Website - Instant Tamil Stranger Match | TamilChat',
    description: 'Top-ranked Tamil random chatting website for instant Tamil stranger chat, live Tamil Nadu random matching, & 1-on-1 WebRTC video calls without signup.',
    h1: 'Tamil Random Chatting Website - Instant Tamil Stranger Match',
    intro: 'Welcome to the premier <strong>Tamil random chatting website</strong> (<a href="https://tamilchat.online/">TamilChat.online</a>). Connect with online Tamil strangers in one tap with zero registration.'
  },
  'tamil-chat-rooms': {
    title: 'Tamil Chat Rooms - #1 Tamil Chat Rooms & Tamil Nadu Live Chat | TamilChat',
    description: 'Join the #1 Tamil Chat Room on TamilChat.online. Real-time Tamil chat rooms, Tamil Nadu chatroom discussions, stranger video calls, & zero registration.',
    h1: 'Tamil Chat Rooms - Free Tamil Chat Rooms Online',
    intro: 'Welcome to active <strong>Tamil Chat Rooms</strong>! Join ongoing Tamil discussions, meet friends from Chennai, Coimbatore, Madurai, Trichy, Salem, and global Tamils.'
  },
  'tamil-chat-live': {
    title: 'Tamil Chat Live - Real-Time Live Tamil Chat & Video Calls | TamilChat',
    description: 'Join Live Tamil Chat on TamilChat.online! Enjoy real-time live Tamil chat rooms, instant 1-on-1 stranger video calls, and zero registration.',
    h1: 'Tamil Chat Live - Real-Time Live Tamil Chat & Video Calls',
    intro: 'Welcome to <strong>Tamil Chat Live</strong>. Experience instant live Tamil messaging, Tamil Nadu public lobbies, and stranger video matching in real time.'
  },
  'tamil-free-video-call': {
    title: 'Tamil Video Call Free - Tamil Free Video Calling Website | TamilChat',
    description: 'Start a Tamil video call free on TamilChat. High-definition 1-on-1 random Tamil video calls with zero coins, downloads, or registration.',
    h1: 'Tamil Video Call Free - Free Tamil Video Calling Website',
    intro: 'Enjoy unlimited <strong>Tamil video call free</strong>! Connect 1-on-1 with Tamil-speaking strangers with crystal-clear audio and video without paying coins.'
  },
  'tamil-random-video-call': {
    title: 'Tamil Random Video Call Online - Tamil Nadu Stranger Match | TamilChat',
    description: 'Instant Tamil random video calling. Connect 1-on-1 with Tamil strangers for live video calls and encrypted chat.',
    h1: 'Tamil Random Video Call Online - Tamil Nadu Stranger Match',
    intro: 'Single-click <strong>Tamil random video call</strong> matching! Connect with live Tamil strangers across Tamil Nadu and worldwide in seconds.'
  },
  'tamil-chatting-app': {
    title: 'Tamil Chat App - Tamil Stranger Video Call Online | TamilChat',
    description: 'Use Tamil Chat App online for instant stranger video calling, anonymous group chat rooms, and web P2P calls on mobile and desktop.',
    h1: 'Tamil Chat App - Tamil Stranger Chat & Video Call',
    intro: 'Use the <strong>Tamil Chat App</strong> directly in your mobile or desktop browser for fast stranger chat and WebRTC video calling.'
  },
  'tamil-telegram-chatting': {
    title: 'Tamil Telegram Chat Alternative - Tamil Stranger Chat | TamilChat',
    description: 'Looking for Tamil Telegram chat groups? Join TamilChat for instant live Tamil stranger chat rooms, P2P video calls, and voice chat.',
    h1: 'Tamil Telegram Chat Alternative - Live Stranger Chat Rooms',
    intro: 'The ultimate <strong>Tamil Telegram chat</strong> alternative with instant live chat rooms, zero phone number sharing, and direct WebRTC video calls.'
  },
  'tamil-open-chat': {
    title: 'Tamil Open Chat - Free Tamil Live Chat Online | TamilChat',
    description: 'Experience Tamil Open Chat on TamilChat.online. Fast, open Tamil chat rooms, stranger connections, and instant video calling with zero signups.',
    h1: 'Tamil Open Chat - Free Tamil Live Chat Online',
    intro: 'Join <strong>Tamil Open Chat</strong> for completely open, free-access Tamil conversations. No registration or passwords required.'
  },

  // --- Policy & Info Routes ---
  'privacy': {
    title: 'Privacy Policy | TamilChat Online',
    description: 'Privacy Policy for TamilChat online strangers chat and free video calling website.',
    h1: 'Privacy Policy - TamilChat',
    intro: 'Learn how TamilChat protects your privacy with zero data tracking, anonymous handles, and encrypted peer-to-peer communication.'
  },
  'terms': {
    title: 'Terms of Service | TamilChat Online',
    description: 'Terms of Service for using TamilChat online live video chat and Tamil chat rooms.',
    h1: 'Terms of Service - TamilChat',
    intro: 'Please review the Terms of Service for using TamilChat.online Tamil chat rooms and video calling services.'
  },
  'aup': {
    title: 'Acceptable Use Policy | TamilChat Online',
    description: 'Acceptable Use Policy for TamilChat online strangers video calling and group chat.',
    h1: 'Acceptable Use Policy - TamilChat',
    intro: 'Guidelines and acceptable conduct for maintaining a safe, respectful, and friendly Tamil chat community.'
  },
  'disclaimer': {
    title: 'Disclaimer | TamilChat Online',
    description: 'Disclaimer for TamilChat free online video call and strangers chat platform.',
    h1: 'Disclaimer - TamilChat',
    intro: 'Service disclaimer regarding user-generated content and third-party interactions on TamilChat.online.'
  },
  'payment-help': {
    title: 'Payment Support & Refund Policy | TamilChat Online',
    description: 'Payment support, billing assistance, and non-refundable policy details for TamilChat. Contact teamtwingle@gmail.com.',
    h1: 'Payment Support & Refund Policy - TamilChat',
    intro: 'Official billing and payment support center for TamilChat.online. Learn about our non-refundable policy and contact support.'
  },

  'telegram-alternative-group-chat': {
    title: 'Telegram Alternative Group Chat | TamilChat',
    description: 'Best Telegram alternative for anonymous group chats and video calls.',
    h1: 'Telegram Alternative Group Chat',
    intro: 'Join the best Telegram alternative group chat.'
  }
};

const distDir = path.join(__dirname, 'dist');
const indexHtmlPath = path.join(distDir, 'index.html');

if (!fs.existsSync(indexHtmlPath)) {
  console.error('Error: dist/index.html does not exist. Please run vite build first.');
  process.exit(1);
}

const indexContent = fs.readFileSync(indexHtmlPath, 'utf8');

console.log('Generating static folders and index.html files with route-specific SEO tags and body content...');

Object.entries(routeMetadata).forEach(([route, meta]) => {
  const routeDir = path.join(distDir, route);
  const routeUrl = `https://tamilchat.online/${route}`;
  
  if (!fs.existsSync(routeDir)) {
    fs.mkdirSync(routeDir, { recursive: true });
  }
  
  let customizedHtml = indexContent
    .replace('<link rel="canonical" href="https://tamilchat.online/" />', `<link rel="canonical" href="${routeUrl}" />`)
    .replace(/<title>.*?<\/title>/, `<title>${meta.title}</title>`)
    .replace(/<meta name="title" content=".*?" \/>/, `<meta name="title" content="${meta.title}" />`)
    .replace(/<meta name="description"\s+content=".*?" \/>/s, `<meta name="description" content="${meta.description}" />`)
    .replace(/<meta property="og:url" content=".*?" \/>/, `<meta property="og:url" content="${routeUrl}" />`)
    .replace(/<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="${meta.title}" />`)
    .replace(/<meta property="og:description"\s+content=".*?" \/>/s, `<meta property="og:description" content="${meta.description}" />`)
    .replace(/<meta property="twitter:url" content=".*?" \/>/, `<meta property="twitter:url" content="${routeUrl}" />`)
    .replace(/<meta property="twitter:title" content=".*?" \/>/, `<meta property="twitter:title" content="${meta.title}" />`)
    .replace(/<meta property="twitter:description"\s+content=".*?" \/>/s, `<meta property="twitter:description" content="${meta.description}" />`);

  if (meta.h1) {
    customizedHtml = customizedHtml.replace(
      /<h1 style="[^"]*">.*?<\/h1>/,
      `<h1 style="color: #ef4444; font-size: 1.8rem; margin-bottom: 0.3rem;">${meta.h1}</h1>`
    );
  }

  if (meta.intro) {
    customizedHtml = customizedHtml.replace(
      /<p style="font-size: [^"]*margin-bottom: 1.5rem;[^"]*">.*?<\/p>/s,
      `<p style="font-size: 1.15rem; line-height: 1.6; margin-bottom: 1.5rem; color: #f1f5f9;">${meta.intro}</p>`
    );
  }

  fs.writeFileSync(path.join(routeDir, 'index.html'), customizedHtml, 'utf8');
  console.log(`✅ Generated: dist/${route}/index.html (H1: "${meta.h1 || meta.title}")`);
});

console.log('🎉 All static SEO routes generated successfully with unique metadata and body content!');
