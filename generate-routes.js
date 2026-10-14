import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { SEO_PAGES } from './seo-dataset.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.join(__dirname, 'dist');
const indexHtmlPath = path.join(distDir, 'index.html');

if (!fs.existsSync(indexHtmlPath)) {
  console.error('Error: dist/index.html does not exist. Please run vite build first.');
  process.exit(1);
}

const baseIndexContent = fs.readFileSync(indexHtmlPath, 'utf8');

// Policy & supplementary route metadata
const extraRoutes = {
  'tamil-strangers-chat': {
    title: 'Tamil Strangers Chat - Chat with Strangers in Tamil Online | TamilChat',
    description: 'Join Tamil Strangers Chat on TamilChats.online. Talk and video call with random strangers in Tamil Nadu and worldwide. 100% free anonymous chat, zero registration.',
    h1: 'Tamil Strangers Chat - Chat with Strangers in Tamil Online',
    tamilSub: 'தமிழ் ஸ்ட்ரேஞ்சர்ஸ் சாட் - அநாமதேய தமிழ் அரட்டை',
    intro: 'Connect with thousands of active Tamil speakers on <strong>Tamil Strangers Chat</strong>. Enjoy anonymous 1-on-1 chats and high-definition WebRTC video calls with zero registration.',
    faqs: [
      { question: 'Is Tamil Strangers Chat free?', answer: 'Yes, completely free with zero coin requirements or hidden fees.' },
      { question: 'Do I need to sign up?', answer: 'No sign up required. Just pick a nickname and start chatting.' }
    ]
  },
  'tamil-random-chatting-website': {
    title: 'Tamil Random Chatting Website - Instant Tamil Stranger Match | TamilChat',
    description: 'Top-ranked Tamil random chatting website for instant Tamil stranger chat, live Tamil Nadu random matching, & 1-on-1 WebRTC video calls without signup.',
    h1: 'Tamil Random Chatting Website - Instant Tamil Stranger Match',
    tamilSub: 'தமிழ் ரேண்டம் சாட்டிங் - உடனடி புதிய நபர்கள் தொடர்பு',
    intro: 'Welcome to the premier <strong>Tamil random chatting website</strong> (<a href="https://tamilchats.online/">TamilChats.online</a>). Connect with online Tamil strangers in one tap with zero registration.',
    faqs: [
      { question: 'How does random matching work?', answer: 'Our real-time engine pairs you with an active online Tamil speaker immediately.' },
      { question: 'Can I skip to the next person?', answer: 'Yes, with one tap you can disconnect and match with a new stranger.' }
    ]
  },
  'tamil-chat-live': {
    title: 'Tamil Chat Live - Real-Time Live Tamil Chat & Video Calls | TamilChat',
    description: 'Join Live Tamil Chat on TamilChats.online! Enjoy real-time live Tamil chat rooms, instant 1-on-1 stranger video calls, and zero registration.',
    h1: 'Tamil Chat Live - Real-Time Live Tamil Chat & Video Calls',
    tamilSub: 'தமிழ் சாட் லைவ் - நேரலை தமிழ் அரட்டை & வீடியோ காளிங்',
    intro: 'Welcome to <strong>Tamil Chat Live</strong>. Experience instant live Tamil messaging, Tamil Nadu public lobbies, and stranger video matching in real time.',
    faqs: [
      { question: 'Are conversations live?', answer: 'Yes, all chat messages and calls happen in real-time over WebSockets and WebRTC.' }
    ]
  },
  'tamil-free-video-call': {
    title: 'Tamil Video Call Free - Tamil Free Video Calling Website | TamilChat',
    description: 'Start a Tamil video call free on TamilChat. High-definition 1-on-1 random Tamil video calls with zero coins, downloads, or registration.',
    h1: 'Tamil Video Call Free - Free Tamil Video Calling Website',
    tamilSub: 'தமிழ் வீடியோ கால் இலவசம் - கட்டணமில்லா வீடியோ அரட்டை',
    intro: 'Enjoy unlimited <strong>Tamil video call free</strong>! Connect 1-on-1 with Tamil-speaking strangers with crystal-clear audio and video without paying coins.',
    faqs: [
      { question: 'Is it completely free?', answer: 'Yes, zero coins, subscriptions, or credit card requirements.' }
    ]
  },
  'tamil-telegram-chatting': {
    title: 'Tamil Telegram Chat Alternative - Tamil Stranger Chat | TamilChat',
    description: 'Looking for Tamil Telegram chat groups? Join TamilChat for instant live Tamil stranger chat rooms, P2P video calls, and voice chat without phone numbers.',
    h1: 'Tamil Telegram Chat Alternative - Live Stranger Chat Rooms',
    tamilSub: 'தமிழ் டெலிகிராம் சாட் மாற்று - போன் நம்பர் தேவையில்லாத நேரலை சாட்',
    intro: 'The ultimate <strong>Tamil Telegram chat</strong> alternative with instant live chat rooms, zero phone number sharing, and direct WebRTC video calls.',
    faqs: [
      { question: 'Why choose TamilChat over Telegram groups?', answer: 'TamilChat requires no mobile phone number, no app installation, and provides direct browser-based peer-to-peer video calling.' }
    ]
  },
  'telegram-alternative-group-chat': {
    title: 'Telegram Alternative Group Chat | TamilChat',
    description: 'Best Telegram alternative for anonymous group chats and video calls without phone numbers.',
    h1: 'Telegram Alternative Group Chat',
    tamilSub: 'டெலிகிராம் மாற்று குழு அரட்டை',
    intro: 'Join the best Telegram alternative for anonymous group chat and direct video calling with zero phone registration.',
    faqs: [
      { question: 'Is my phone number hidden?', answer: 'Yes, we never request or store phone numbers.' }
    ]
  },
  'privacy': {
    title: 'Privacy Policy | TamilChat Online',
    description: 'Privacy Policy for TamilChat online strangers chat and free video calling website.',
    h1: 'Privacy Policy - TamilChat',
    tamilSub: 'தனியுரிமைக் கொள்கை',
    intro: 'Learn how TamilChat protects your privacy with zero data tracking, anonymous handles, and encrypted peer-to-peer communication.'
  },
  'terms': {
    title: 'Terms of Service | TamilChat Online',
    description: 'Terms of Service for using TamilChat online live video chat and Tamil chat rooms.',
    h1: 'Terms of Service - TamilChat',
    tamilSub: 'பயன்பாட்டு விதிமுறைகள்',
    intro: 'Please review the Terms of Service for using TamilChats.online Tamil chat rooms and video calling services.'
  },
  'aup': {
    title: 'Acceptable Use Policy | TamilChat Online',
    description: 'Acceptable Use Policy for TamilChat online strangers video calling and group chat.',
    h1: 'Acceptable Use Policy - TamilChat',
    tamilSub: 'ஏற்றுக்கொள்ளக்கூடிய பயன்பாட்டுக் கொள்கை',
    intro: 'Guidelines and acceptable conduct for maintaining a safe, respectful, and friendly Tamil chat community.'
  },
  'disclaimer': {
    title: 'Disclaimer | TamilChat Online',
    description: 'Disclaimer for TamilChat free online video call and strangers chat platform.',
    h1: 'Disclaimer - TamilChat',
    tamilSub: 'பொறுப்புத் துறப்பு',
    intro: 'Service disclaimer regarding user-generated content and third-party interactions on TamilChats.online.'
  },
  'payment-help': {
    title: 'Payment Support & Refund Policy | TamilChat Online',
    description: 'Payment support, billing assistance, and non-refundable policy details for TamilChat. Contact teamtwingle@gmail.com.',
    h1: 'Payment Support & Refund Policy - TamilChat',
    tamilSub: 'கட்டண உதவி & பணத்தைத் திரும்பப்பெறும் கொள்கை',
    intro: 'Official billing and payment support center for TamilChats.online. Learn about our non-refundable policy and contact support.'
  }
};

// Helper to generate the static HTML crawler article
function buildCrawlerArticle(slug, meta) {
  const isPolicy = ['privacy', 'terms', 'aup', 'disclaimer', 'payment-help'].includes(slug);
  const routeUrl = `https://tamilchats.online/${slug}`;

  // Breadcrumbs
  const breadcrumbHtml = `
    <nav aria-label="breadcrumb" style="margin-bottom: 1rem; font-size: 0.85rem; color: #94a3b8;">
      <a href="https://tamilchats.online/" style="color: #ef4444; text-decoration: none;">Home</a> &gt; 
      <span style="color: #cbd5e1;">${meta.h1 || meta.title}</span>
    </nav>
  `;

  // Context sections
  let contextHtml = '';
  if (meta.localContext) {
    contextHtml += `<h2 style="color: #fff; font-size: 1.35rem; margin-top: 1.5rem; margin-bottom: 0.8rem;">${meta.localContext.heading}</h2>`;
    meta.localContext.paragraphs.forEach(p => {
      contextHtml += `<p style="margin-bottom: 1.2rem; line-height: 1.7;">${p}</p>`;
    });
  }

  // Features list
  let featuresHtml = '';
  if (meta.features && meta.features.length > 0) {
    featuresHtml += `<h2 style="color: #fff; font-size: 1.35rem; margin-top: 1.5rem; margin-bottom: 0.8rem;">Key Highlights &amp; Features</h2><ul style="line-height: 1.8; margin-bottom: 1.5rem;">`;
    meta.features.forEach(f => {
      featuresHtml += `<li><strong>${f.title}:</strong> ${f.desc}</li>`;
    });
    featuresHtml += `</ul>`;
  }

  // FAQs
  let faqHtml = '';
  if (meta.faqs && meta.faqs.length > 0) {
    faqHtml += `<h2 style="color: #fff; font-size: 1.4rem; margin-top: 2rem; margin-bottom: 0.8rem;">Frequently Asked Questions (FAQ)</h2><section style="margin-bottom: 2rem;">`;
    meta.faqs.forEach(faq => {
      faqHtml += `
        <div style="margin-bottom: 1.2rem; padding: 1rem; background: rgba(255,255,255,0.03); border-radius: 8px; border-left: 3px solid #ef4444;">
          <h3 style="color: #f1f5f9; font-size: 1.1rem; margin-top: 0; margin-bottom: 0.5rem;">${faq.question}</h3>
          <p style="color: #94a3b8; margin: 0; line-height: 1.6;">${faq.answer}</p>
        </div>
      `;
    });
    faqHtml += `</section>`;
  }

  // Programmatic Interlinking Navigation
  const interlinksHtml = `
    <h2 style="color: #fff; font-size: 1.25rem; margin-top: 2.5rem; margin-bottom: 1rem; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 1.5rem;">Explore Other Tamil Chat Communities</h2>
    <div style="display: flex; flex-wrap: wrap; gap: 8px; font-size: 0.85rem;">
      <a href="https://tamilchats.online/chennai-tamil-chat" style="color: #ef4444; background: rgba(239,68,68,0.1); padding: 5px 10px; border-radius: 6px; text-decoration: none;">Chennai Tamil Chat</a>
      <a href="https://tamilchats.online/coimbatore-tamil-chat" style="color: #ef4444; background: rgba(239,68,68,0.1); padding: 5px 10px; border-radius: 6px; text-decoration: none;">Coimbatore Tamil Chat</a>
      <a href="https://tamilchats.online/madurai-tamil-chat" style="color: #ef4444; background: rgba(239,68,68,0.1); padding: 5px 10px; border-radius: 6px; text-decoration: none;">Madurai Tamil Chat</a>
      <a href="https://tamilchats.online/trichy-tamil-chat" style="color: #ef4444; background: rgba(239,68,68,0.1); padding: 5px 10px; border-radius: 6px; text-decoration: none;">Trichy Tamil Chat</a>
      <a href="https://tamilchats.online/salem-tamil-chat" style="color: #ef4444; background: rgba(239,68,68,0.1); padding: 5px 10px; border-radius: 6px; text-decoration: none;">Salem Tamil Chat</a>
      <a href="https://tamilchats.online/tirunelveli-tamil-chat" style="color: #ef4444; background: rgba(239,68,68,0.1); padding: 5px 10px; border-radius: 6px; text-decoration: none;">Tirunelveli Tamil Chat</a>
      <a href="https://tamilchats.online/singapore-tamil-chat" style="color: #ef4444; background: rgba(239,68,68,0.1); padding: 5px 10px; border-radius: 6px; text-decoration: none;">Singapore Tamil Chat</a>
      <a href="https://tamilchats.online/malaysia-tamil-chat" style="color: #ef4444; background: rgba(239,68,68,0.1); padding: 5px 10px; border-radius: 6px; text-decoration: none;">Malaysia Tamil Chat</a>
      <a href="https://tamilchats.online/sri-lanka-tamil-chat" style="color: #ef4444; background: rgba(239,68,68,0.1); padding: 5px 10px; border-radius: 6px; text-decoration: none;">Sri Lanka Tamil Chat</a>
      <a href="https://tamilchats.online/gulf-nri-tamil-chat" style="color: #ef4444; background: rgba(239,68,68,0.1); padding: 5px 10px; border-radius: 6px; text-decoration: none;">Gulf NRI Tamil Chat</a>
      <a href="https://tamilchats.online/tamil-cinema-chat" style="color: #ef4444; background: rgba(239,68,68,0.1); padding: 5px 10px; border-radius: 6px; text-decoration: none;">Tamil Cinema Chat</a>
      <a href="https://tamilchats.online/tamil-voice-chat" style="color: #ef4444; background: rgba(239,68,68,0.1); padding: 5px 10px; border-radius: 6px; text-decoration: none;">Tamil Voice Chat</a>
      <a href="https://tamilchats.online/tamil-video-call" style="color: #ef4444; background: rgba(239,68,68,0.1); padding: 5px 10px; border-radius: 6px; text-decoration: none;">Tamil Video Call</a>
      <a href="https://tamilchats.online/tamil-chat-rooms" style="color: #ef4444; background: rgba(239,68,68,0.1); padding: 5px 10px; border-radius: 6px; text-decoration: none;">Tamil Chat Rooms</a>
      <a href="https://tamilchats.online/tamil-chatting-website" style="color: #ef4444; background: rgba(239,68,68,0.1); padding: 5px 10px; border-radius: 6px; text-decoration: none;">Tamil Chatting Website</a>
    </div>
  `;

  // Schema.org FAQPage & BreadcrumbList
  const schemaBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://tamilchats.online/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": meta.h1 || meta.title,
        "item": routeUrl
      }
    ]
  };

  let schemaFaq = null;
  if (meta.faqs && meta.faqs.length > 0) {
    schemaFaq = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": meta.faqs.map(f => ({
        "@type": "Question",
        "name": f.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": f.answer
        }
      }))
    };
  }

  const jsonLdBlock = `
    <script type="application/ld+json">
      ${JSON.stringify(schemaBreadcrumb)}
    </script>
    ${schemaFaq ? `
    <script type="application/ld+json">
      ${JSON.stringify(schemaFaq)}
    </script>` : ''}
  `;

  return `
    <article id="seo-crawler-content" style="max-width: 900px; margin: 0 auto; padding: 2rem 1.5rem; color: #94a3b8; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6;">
      ${breadcrumbHtml}
      <header>
        <h1 style="color: #ef4444; font-size: 1.85rem; margin-bottom: 0.3rem;">${meta.h1 || meta.title}</h1>
        ${meta.tamilSub ? `<p style="color: #f87171; font-size: 1.15rem; font-weight: 700; margin-top: 0; margin-bottom: 1.2rem;" lang="ta">${meta.tamilSub}</p>` : ''}
      </header>

      <p style="font-size: 1.15rem; line-height: 1.6; margin-bottom: 1.5rem; color: #f1f5f9;">
        ${meta.intro}
      </p>

      ${contextHtml}
      ${featuresHtml}
      ${faqHtml}
      ${!isPolicy ? interlinksHtml : ''}
      ${jsonLdBlock}
    </article>
  `;
}

console.log('Generating Google-compliant Programmatic SEO static HTML routes...');

// 1. Build routes from SEO_PAGES
SEO_PAGES.forEach(meta => {
  const route = meta.slug;
  const routeDir = path.join(distDir, route);
  const routeUrl = `https://tamilchats.online/${route}`;

  if (!fs.existsSync(routeDir)) {
    fs.mkdirSync(routeDir, { recursive: true });
  }

  const customArticle = buildCrawlerArticle(route, meta);

  let customizedHtml = baseIndexContent
    .replace('<link rel="canonical" href="https://tamilchats.online/" />', `<link rel="canonical" href="${routeUrl}" />`)
    .replace(/<title>.*?<\/title>/, `<title>${meta.title}</title>`)
    .replace(/<meta name="title" content=".*?" \/>/, `<meta name="title" content="${meta.title}" />`)
    .replace(/<meta name="description"\s+content=".*?" \/>/s, `<meta name="description" content="${meta.description}" />`)
    .replace(/<meta property="og:url" content=".*?" \/>/, `<meta property="og:url" content="${routeUrl}" />`)
    .replace(/<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="${meta.title}" />`)
    .replace(/<meta property="og:description"\s+content=".*?" \/>/s, `<meta property="og:description" content="${meta.description}" />`)
    .replace(/<meta property="twitter:url" content=".*?" \/>/, `<meta property="twitter:url" content="${routeUrl}" />`)
    .replace(/<meta property="twitter:title" content=".*?" \/>/, `<meta property="twitter:title" content="${meta.title}" />`)
    .replace(/<meta property="twitter:description"\s+content=".*?" \/>/s, `<meta property="twitter:description" content="${meta.description}" />`)
    .replace(/<article id="seo-crawler-content"[\s\S]*?<\/article>/, customArticle);

  fs.writeFileSync(path.join(routeDir, 'index.html'), customizedHtml, 'utf8');
  console.log(`✅ Generated: dist/${route}/index.html (${meta.category})`);
});

// 2. Build extra policy and supplementary routes
Object.entries(extraRoutes).forEach(([route, meta]) => {
  const routeDir = path.join(distDir, route);
  const routeUrl = `https://tamilchats.online/${route}`;

  if (!fs.existsSync(routeDir)) {
    fs.mkdirSync(routeDir, { recursive: true });
  }

  const customArticle = buildCrawlerArticle(route, meta);

  let customizedHtml = baseIndexContent
    .replace('<link rel="canonical" href="https://tamilchats.online/" />', `<link rel="canonical" href="${routeUrl}" />`)
    .replace(/<title>.*?<\/title>/, `<title>${meta.title}</title>`)
    .replace(/<meta name="title" content=".*?" \/>/, `<meta name="title" content="${meta.title}" />`)
    .replace(/<meta name="description"\s+content=".*?" \/>/s, `<meta name="description" content="${meta.description}" />`)
    .replace(/<meta property="og:url" content=".*?" \/>/, `<meta property="og:url" content="${routeUrl}" />`)
    .replace(/<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="${meta.title}" />`)
    .replace(/<meta property="og:description"\s+content=".*?" \/>/s, `<meta property="og:description" content="${meta.description}" />`)
    .replace(/<meta property="twitter:url" content=".*?" \/>/, `<meta property="twitter:url" content="${routeUrl}" />`)
    .replace(/<meta property="twitter:title" content=".*?" \/>/, `<meta property="twitter:title" content="${meta.title}" />`)
    .replace(/<meta property="twitter:description"\s+content=".*?" \/>/s, `<meta property="twitter:description" content="${meta.description}" />`)
    .replace(/<article id="seo-crawler-content"[\s\S]*?<\/article>/, customArticle);

  fs.writeFileSync(path.join(routeDir, 'index.html'), customizedHtml, 'utf8');
  console.log(`✅ Generated: dist/${route}/index.html (supplementary/policy)`);
});

console.log('🎉 Successfully generated all programmatic SEO static HTML pages with zero duplicate content!');
