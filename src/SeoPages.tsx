import React, { useEffect } from 'react';
import { TamilLogo } from './TamilLogo';

const useMeta = (title: string, description: string, canonicalPath: string) => {
    useEffect(() => {
        document.title = title;

        const updateMeta = (selector: string, content: string) => {
            const tag = document.querySelector(selector);
            if (tag) {
                tag.setAttribute('content', content);
            }
        };

        updateMeta('meta[name="description"]', description);
        updateMeta('meta[name="title"]', title);
        updateMeta('meta[property="og:title"]', title);
        updateMeta('meta[property="og:description"]', description);
        updateMeta('meta[property="twitter:title"]', title);
        updateMeta('meta[property="twitter:description"]', description);

        const canonical = document.querySelector('link[rel="canonical"]');
        if (canonical) {
            canonical.setAttribute('href', `https://tamilchats.online${canonicalPath}`);
        }
    }, [title, description, canonicalPath]);
};

const containerStyle: React.CSSProperties = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '2rem',
    color: 'var(--text-main)',
    lineHeight: '1.6',
    fontFamily: 'var(--font-family, sans-serif)',
};

const Header = ({ title }: { title: string }) => (
    <div style={{ marginBottom: '2rem', borderBottom: '1px solid var(--panel-border)', paddingBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
            <h1 style={{ color: 'var(--primary)', marginBottom: '0.2rem', fontSize: '1.8rem' }}>{title}</h1>
            <a href="/" style={{ color: 'var(--text-muted)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
                ← Back to Home
            </a>
        </div>
        <a href="/" style={{
            background: 'var(--primary)',
            color: '#fff',
            padding: '0.8rem 1.5rem',
            borderRadius: '12px',
            textDecoration: 'none',
            fontWeight: 'bold',
            boxShadow: '0 4px 15px rgba(239, 68, 68, 0.35)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '1rem'
        }}>
            Start Chatting Now →
        </a>
    </div>
);

const Section = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div style={{ marginBottom: '1.5rem' }}>
        <h3 style={{ color: '#fff', marginBottom: '0.5rem', fontSize: '1.2rem' }}>{title}</h3>
        <div style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{children}</div>
    </div>
);

const CallToAction = () => (
    <div style={{
        background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(127, 29, 29, 0.2) 100%)',
        padding: '2.5rem 2rem',
        borderRadius: '24px',
        marginBottom: '3rem',
        textAlign: 'center',
        border: '1px solid rgba(239, 68, 68, 0.3)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.2)'
    }}>
        <div style={{ marginBottom: '1.5rem' }}><TamilLogo size={80} /></div>
        <h2 style={{ color: 'var(--primary)', marginBottom: '0.8rem', fontSize: '2.2rem', fontWeight: '800' }}>Enter TamilChat Online</h2>
        <p style={{ color: 'var(--text-main)', fontSize: '1.1rem', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
            No Registration. No Logins. 100% Anonymous &amp; Secure Tamil Chat &amp; Video Calling.
        </p>
        <a href="/" style={{
            background: 'var(--primary)',
            color: '#fff',
            padding: '1rem 3rem',
            borderRadius: '16px',
            textDecoration: 'none',
            fontWeight: '900',
            display: 'inline-block',
            fontSize: '1.2rem',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            boxShadow: '0 4px 20px rgba(239, 68, 68, 0.4)'
        }}>Start Chatting Now →</a>
    </div>
);

// 1. Tamil Chatting App Page
export const TamilChattingAppPage = () => {
    useMeta(
        'Tamil Chat App - Tamil Free Video Calling Website & Tamil Video Calling Website | TamilChat',
        'Looking for the best Tamil chat app? TamilChat is the top Tamil free video calling website and Tamil chatting website for anonymous Tamil video calling without registration.',
        '/tamil-chatting-app'
    );

    return (
        <div style={containerStyle} className="glass">
            <Header title="Tamil Chat App - Tamil Free Video Calling Website" />
            <CallToAction />
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
                Looking for a dedicated <strong>Tamil Chat</strong> app and <strong>Tamil Video Calling Website</strong> to connect with Tamil-speaking people worldwide? TamilChat is the ultimate <strong>Tamil Chatting Website</strong> designed specifically for Tamilians to converse, video call, and make friends with <strong>Tamil Free Chat</strong> and <strong>Tamil Free Calling</strong>.
            </p>

            <Section title="Why Choose TamilChat for Tamil Free Video Calling & Chat?">
                <p>Unlike standard chatting applications that require phone number verification or email registrations, TamilChat focuses entirely on your convenience and privacy. Here's what makes it unique:</p>
                <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem', marginBottom: '1rem' }}>
                    <li><strong>No Registration Required:</strong> Enjoy <strong>Tamil Free Chat</strong> and instant <strong>Tamil Free Calling</strong> without sharing personal details.</li>
                    <li><strong>Tamil Video Calling Website:</strong> Hop into public chat or connect via 1-on-1 <strong>Tamil Video Calling</strong>.</li>
                    <li><strong>Tamil Free Video Calling Website:</strong> Enjoy free voice and video calls using advanced WebRTC technology directly in your browser.</li>
                    <li><strong>Mobile Friendly:</strong> Access the top <strong>Tamil Free Calling Website</strong> on any mobile browser or Android device.</li>
                </ul>
            </Section>

            <Section title="Perfect for Tamil Chat Online & Tamilians Worldwide">
                <p>Whether you are in Chennai, Coimbatore, Madurai, Trichy, Singapore, Malaysia, Sri Lanka, Europe, or the Americas, TamilChat bridges the distance. Meet other people who share your language, talk about Kollywood movies, and enjoy <strong>Tamil Chat Online</strong> in a clean, modern interface.</p>
            </Section>
            <SeoNavFooter />
        </div>
    );
};

// 2. Tamil Telegram Chatting Page
export const TamilTelegramChattingPage = () => {
    useMeta(
        'Tamil Telegram Chatting Alternative - Tamil Stranger Chat Website | TamilChat',
        'Need a Tamil Telegram chatting alternative? Connect via TamilChat for anonymous Tamil free chat, stranger video calling, and open chatrooms.',
        '/tamil-telegram-chatting'
    );

    return (
        <div style={containerStyle} className="glass">
            <Header title="Tamil Telegram Chatting Alternative - Tamil Stranger Chat" />
            <CallToAction />
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
                Fed up with Telegram spam, phone-number leaks, and blocked channels? TamilChat is the modern <strong>Tamil Telegram chatting alternative</strong> and <strong>Tamil Stranger Chat Website</strong> that requires zero app installs, zero contact permissions, and absolutely no registration.
            </p>

            <Section title="Why TamilChat Beats Telegram for Tamil Chatting">
                <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem', marginBottom: '1rem' }}>
                    <li><strong>No Phone Numbers Required:</strong> Telegram exposes contacts; TamilChat protects your identity completely.</li>
                    <li><strong>Instant Tamil Stranger Chat:</strong> No channel invites needed. Connect with active Tamilians directly in one click.</li>
                    <li><strong>1-on-1 Tamil Free Video Calling:</strong> Integrated WebRTC video calls right from the browser.</li>
                    <li><strong>100% Browser-Based:</strong> Open on mobile or desktop without downloading bulky APKs or background trackers.</li>
                </ul>
            </Section>
            <SeoNavFooter />
        </div>
    );
};

// 3. Telegram Alternative Group Chat Page
export const TelegramAlternativeGroupChatPage = () => {
    useMeta(
        'Telegram Alternative Group Chat - Anonymous Tamil Chat Rooms | TamilChat',
        'Top Telegram alternative group chat for anonymous messaging, free Tamil chat online, and private peer-to-peer video calls.',
        '/telegram-alternative-group-chat'
    );

    return (
        <div style={containerStyle} className="glass">
            <Header title="Telegram Alternative Group Chat & Free Live Rooms" />
            <CallToAction />
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
                Join the cleanest, most private <strong>Telegram alternative group chat</strong> tailored for Tamil communities. Enjoy <strong>Tamil Free Chat</strong> and live room messaging with complete end-to-end anonymity.
            </p>

            <Section title="Key Advantages">
                <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem', marginBottom: '1rem' }}>
                    <li><strong>True Anonymity:</strong> Zero phone number storage.</li>
                    <li><strong>Peer-to-Peer Calls:</strong> Direct <strong>Tamil Video Calling Website</strong> capabilities built-in.</li>
                    <li><strong>No App Stores:</strong> Direct web access with zero tracking.</li>
                </ul>
            </Section>
            <SeoNavFooter />
        </div>
    );
};

// 4. Tamil Chat Online Page
export const TamilChatOnlinePage = () => {
    useMeta(
        'Tamil Chat Online - Tamil Chatting Website & Live Rooms | TamilChat',
        'Connect with Tamil communities via Tamil chat online. Top Tamil chatting website for free video calling and anonymous chat.',
        '/tamil-chat-online'
    );

    return (
        <div style={containerStyle} className="glass">
            <Header title="Tamil Chat Online & Tamil Chatting Website" />
            <CallToAction />
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
                Connect with your roots through <strong>Tamil chat online</strong>. Meet new friends on Tamil Nadu&apos;s leading <strong>Tamil Chatting Website</strong> for <strong>Tamil Free Chat</strong>, <strong>Tamil Free Calling</strong>, and <strong>Tamil Video Calling</strong>.
            </p>

            <Section title="Features of Our Tamil Chatting Website">
                <p>Our online <strong>Tamil Chat Online</strong> platform brings together Tamilians from Tamil Nadu and around the globe:</p>
                <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem', marginBottom: '1rem' }}>
                    <li><strong>Interactive Tamil Chat Online:</strong> Public lobbies for live Tamil discussions.</li>
                    <li><strong>Tamil Free Video Calling Website:</strong> P2P video chat with zero coin charges or subscriptions.</li>
                    <li><strong>Tamil Stranger Chat Website:</strong> Meet strangers safely with clean moderation and instant room links.</li>
                </ul>
            </Section>
            <SeoNavFooter />
        </div>
    );
};

// 5. Tamil Free Video Call Page
export const TamilFreeVideoCallPage = () => {
    useMeta(
        'Tamil Free Video Calling Website - Tamil Free Calling & Video Calling | TamilChat',
        'Enjoy 100% Tamil free video calling website features & Tamil free calling online. Connect instantly for Tamil free video calling & Tamil video calling.',
        '/tamil-free-video-call'
    );

    return (
        <div style={containerStyle} className="glass">
            <Header title="Tamil Free Video Calling Website & Tamil Free Calling" />
            <CallToAction />
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
                Looking for a 100% <strong>Tamil Free Video Calling Website</strong> to talk face-to-face with fellow Tamilians? TamilChat offers high-speed <strong>Tamil Free Video Calling</strong>, <strong>Tamil Free Calling</strong>, and <strong>Tamil Video Calling</strong> with HD video and clear audio—no credit card or login needed.
            </p>

            <Section title="Why Choose TamilChat for Tamil Free Calling & Video Chat?">
                <p>Unlike traditional dating platforms that charge coins, TamilChat provides completely free, unlimited <strong>Tamil Video Calling Website</strong> services:</p>
                <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem', marginBottom: '1rem' }}>
                    <li><strong>100% Tamil Free Video Calling:</strong> Enjoy unlimited HD <strong>Tamil Free Video Calling</strong> with zero paywalls.</li>
                    <li><strong>Tamil Free Calling Website:</strong> Connect via voice or video calls in seconds without registration.</li>
                    <li><strong>Direct P2P Encrypted Stream:</strong> Peer-to-peer WebRTC connections ensure your calls stay private.</li>
                    <li><strong>Tamil Stranger Chat Website Integration:</strong> Seamlessly switch between text chat and instant <strong>Tamil Video Calling</strong>.</li>
                </ul>
            </Section>

            <Section title="How to Start Tamil Free Video Calling Online">
                <ol style={{ marginLeft: '1.5rem', marginTop: '0.5rem', marginBottom: '1rem' }}>
                    <li>Click <strong>Start Chatting Now</strong> to enter the live chat room.</li>
                    <li>Enter any custom anonymous nickname to enter.</li>
                    <li>Initiate instant <strong>Tamil Free Video Calling</strong> or 1-on-1 random video calls directly.</li>
                </ol>
            </Section>
            <SeoNavFooter />
        </div>
    );
};

// 6. Strangers Tamil Chat Page
export const TamilStrangerChatPage = () => {
    let currentPath = '/tamil-stranger-chat-website';
    if (typeof window !== 'undefined') {
        const p = window.location.pathname;
        if (p.includes('/tamil-stranger-chat-website')) currentPath = '/tamil-stranger-chat-website';
        else if (p.includes('/tamil-strangers-chat')) currentPath = '/tamil-strangers-chat';
        else if (p.includes('/tamil-stranger-chat')) currentPath = '/tamil-stranger-chat';
    }

    useMeta(
        'Tamil Stranger Chat Website - #1 Free Tamil Strangers Chat & Video | TamilChat',
        'Join the #1 Tamil stranger chat website on TamilChats.online. Instant anonymous Tamil strangers chatting, live Tamil Nadu chat rooms, & 1-on-1 random video calls with zero registration.',
        currentPath
    );

    return (
        <div style={containerStyle} className="glass">
            <Header title="Tamil Stranger Chat Website & Free Tamil Chat Online" />
            <CallToAction />
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
                Welcome to <strong>TamilChats.online</strong> — Tamil Nadu&apos;s #1 <strong>Tamil stranger chat website</strong> and top destination for anonymous <strong>Tamil strangers chatting</strong>, live Tamil chat rooms, and 1-on-1 random stranger video calls. Connect with Tamil speakers across Chennai, Coimbatore, Madurai, Trichy, Salem, and global Tamils in seconds with zero registration or logins.
            </p>

            <Section title="Why TamilChat is the #1 Tamil Stranger Chat Website">
                <p>Chatting with strangers safely, privately, and for free is our top priority:</p>
                <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem', marginBottom: '1rem' }}>
                    <li><strong>100% Anonymous Tamil Stranger Chat:</strong> No phone numbers, emails, or personal identities required. Pick any nickname and start talking instantly.</li>
                    <li><strong>Best Tamil Strangers Chatting Website:</strong> Connect instantly with friendly Tamilians worldwide for meaningful chats, cinema talk, and friendship.</li>
                    <li><strong>Free 1-on-1 Stranger Video Calling:</strong> High-definition WebRTC peer-to-peer random video calls directly in your browser or Android app.</li>
                    <li><strong>Group Chat Rooms &amp; Nearby Users:</strong> Join active public community lobbies or discover users active in your city.</li>
                </ul>
            </Section>

            <Section title="How to Start Chatting with Strangers on TamilChat">
                <ol style={{ marginLeft: '1.5rem', marginTop: '0.5rem', marginBottom: '1rem' }}>
                    <li>Tap <strong>Start Chatting Now</strong> to enter the main lobby.</li>
                    <li>Type any anonymous display name (e.g. <em>Chennai_Macha</em>).</li>
                    <li>Select <strong>World Chat</strong> or browse active users to send instant private chat requests or start a 1-on-1 random video call!</li>
                </ol>
            </Section>
            <SeoNavFooter />
        </div>
    );
};

// 7. Tamil Chatting Website Page
export const TamilChattingWebsitePage = () => {
    let currentPath = '/tamil-chatting-website';

    useMeta(
        'Tamil Chat Website - #1 Tamil Chatting Website & Tamil Nadu Live Chat | TamilChat',
        'Looking for the top Tamil chat website? TamilChat is Tamil Nadu\'s #1 Tamil chatting website for anonymous live rooms, Tamil video calls, and stranger chat.',
        currentPath
    );

    return (
        <div style={containerStyle} className="glass">
            <Header title="Tamil Chat Website - Top Tamil Chatting Website" />
            <CallToAction />
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
                Searching for the best <strong>Tamil Chat Website</strong> and <strong>Tamil Chatting Website</strong>? TamilChats.online is Tamil Nadu&apos;s leading online chat portal offering real-time public rooms, <strong>Tamil Free Chat</strong>, <strong>Tamil Stranger Chat</strong>, and 1-on-1 <strong>Tamil Video Calling</strong> with zero registration.
            </p>

            <Section title="Features of Our Tamil Chat Website">
                <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem', marginBottom: '1rem' }}>
                    <li><strong>#1 Tamil Chatting Website:</strong> Connect with thousands of active Tamilians across Chennai, Coimbatore, Madurai, Salem, Singapore, and Malaysia.</li>
                    <li><strong>Tamil Stranger Chat Integration:</strong> Seamlessly switch between group discussions and private 1-on-1 stranger messaging.</li>
                    <li><strong>Tamil Video Calling Website:</strong> High quality P2P video streaming with zero coins or subscription fees.</li>
                    <li><strong>Tamil Free Calling Website:</strong> Crystal-clear audio calling directly inside mobile and desktop web browsers.</li>
                </ul>
            </Section>
            <SeoNavFooter />
        </div>
    );
};

// 8. Tamil Random Chatting Website Page
export const TamilRandomChattingWebsitePage = () => {
    let currentPath = '/tamil-random-chatting-website';

    useMeta(
        'Tamil Random Chatting Website - Anonymous Tamil Stranger Chat | TamilChat',
        'Top-ranked Tamil random chatting website for instant Tamil stranger chat, live Tamil Nadu random matching, and 1-on-1 WebRTC video calls without signup.',
        currentPath
    );

    return (
        <div style={containerStyle} className="glass">
            <Header title="Tamil Random Chatting Website - Tamil Stranger Match" />
            <CallToAction />
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
                Welcome to the leading <strong>Tamil Random Chatting Website</strong> (<a href="https://tamilchats.online/" style={{ color: 'var(--primary)' }}>TamilChats.online</a>)! If you are searching for a fast, anonymous <strong>Tamil random chat</strong> to meet Tamil strangers online, TamilChat connects you in a single tap with live users across Tamil Nadu and worldwide.
            </p>

            <Section title="Why TamilChat is the Best Tamil Random Chatting Website">
                <p>Enjoy effortless random pairing and authentic Tamil conversations:</p>
                <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem', marginBottom: '1rem' }}>
                    <li><strong>Instant 1-Click Random Pairing:</strong> Connect with a random Tamil speaker immediately without login credentials or email confirmation.</li>
                    <li><strong>Random Text &amp; Video Calling:</strong> Switch seamlessly between anonymous text chat and crystal-clear 1-on-1 random WebRTC video calls.</li>
                    <li><strong>100% Free Forever:</strong> Unlimited stranger matching with zero coins, credits, or hidden subscription costs.</li>
                    <li><strong>Privacy &amp; Anonymity:</strong> Your identity is never stored. Pick any anonymous handle and start chatting instantly.</li>
                </ul>
            </Section>

            <Section title="How to Use Tamil Random Chat">
                <ol style={{ marginLeft: '1.5rem', marginTop: '0.5rem', marginBottom: '1rem' }}>
                    <li>Click <strong>Start Chatting Now</strong> to launch TamilChat.</li>
                    <li>Choose your nickname or enter as a guest.</li>
                    <li>Start chatting in World Chat or pick any online user to start an instant private random chat or video call!</li>
                </ol>
            </Section>
            <SeoNavFooter />
        </div>
    );
};

// 9. Tamil Random Video Call Page
export const TamilRandomVideoCallPage = () => {
    useMeta(
        'Tamil Random Video Calling Website - Tamil Video Calling & Free Chat | TamilChat',
        'Experience the top Tamil random video calling website! Connect for instant Tamil video calling, Tamil free video calling, and random Tamil chat.',
        '/tamil-random-video-call'
    );

    return (
        <div style={containerStyle} className="glass">
            <Header title="Tamil Random Video Calling Website & Tamil Video Calling" />
            <CallToAction />
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
                Welcome to the #1 <strong>Tamil Random Video Calling Website</strong> for live <strong>Tamil Video Calling</strong> and <strong>Tamil Free Video Calling Website</strong> features! Connect face-to-face with random Tamil-speaking friends instantly.
            </p>

            <Section title="Best Tamil Random Video Calling Website Features">
                <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem', marginBottom: '1rem' }}>
                    <li><strong>One-Click Random Match:</strong> Instant pairing on our <strong>Tamil Random Video Calling Website</strong>.</li>
                    <li><strong>Tamil Free Video Calling:</strong> Unlimited WebRTC video calls with zero fees or coin paywalls.</li>
                    <li><strong>Tamil Stranger Chat &amp; Tamil Free Calling:</strong> High quality voice, video, and text matching for Tamil Nadu users.</li>
                </ul>
            </Section>
            <SeoNavFooter />
        </div>
    );
};

// 10. Tamil Chat Live Page
export const TamilChatLivePage = () => {
    let currentPath = '/tamil-chat-live';

    useMeta(
        'Tamil Chat Live - Live Tamil Chat & Instant Tamil Nadu Chat Rooms | TamilChat',
        'Join Live Tamil Chat on TamilChats.online! Enjoy real-time live Tamil chat rooms, instant 1-on-1 stranger video calls, and zero registration.',
        currentPath
    );

    return (
        <div style={containerStyle} className="glass">
            <Header title="Tamil Chat Live - Real-Time Live Tamil Chat & Video Call" />
            <CallToAction />
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
                Welcome to <strong>Tamil Chat Live</strong>, Tamil Nadu&apos;s fastest real-time <strong>Tamil Chat Online</strong> platform. Connect instantly with Tamil speakers in Chennai, Coimbatore, Madurai, Trichy, Salem, Singapore, Malaysia, and across the globe with zero sign-up required.
            </p>

            <Section title="Why Tamil Chat Live is Tamil Nadu's #1 Live Chatting Platform">
                <p>Tamil Chat Live offers real-time instant messaging and high-definition 1-on-1 video calls with complete privacy:</p>
                <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem', marginBottom: '1rem' }}>
                    <li><strong>Real-Time Live Lobbies:</strong> Chat instantly with active Tamilians worldwide on <strong>Live Tamil Chat</strong>.</li>
                    <li><strong>100% Free Video Calls:</strong> Direct peer-to-peer WebRTC random video matching without credit cards or coin fees.</li>
                    <li><strong>Zero Registration Anonymity:</strong> Choose any display nickname and jump into live Tamil conversations safely.</li>
                    <li><strong>Mobile &amp; Web Compatible:</strong> Works seamlessly on iOS, Android, and desktop browsers.</li>
                </ul>
            </Section>
            <SeoNavFooter />
        </div>
    );
};

// 11. Tamil Chat Rooms Page
export const TamilChatRoomsPage = () => {
    let currentPath = '/tamil-chat-rooms';

    useMeta(
        'Tamil Chat Room - #1 Tamil Chat Rooms & Tamil Nadu Live Chat | TamilChat',
        'Join the #1 Tamil Chat Room on TamilChats.online. Real-time Tamil chat rooms, Tamil Nadu chatroom discussions, stranger video calls, & zero registration.',
        currentPath
    );

    return (
        <div style={containerStyle} className="glass">
            <Header title="Tamil Chat Room - Free Tamil Chat Rooms & Tamil Nadu Live Chat" />
            <CallToAction />
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
                Welcome to the leading <strong>Tamil Chat Room</strong> and <strong>Tamil Chat Rooms</strong> network on TamilChats.online. Connect with thousands of Tamilians across Chennai, Coimbatore, Madurai, Trichy, Salem, Tirunelveli, Bangalore, Singapore, Malaysia, Dubai, and across the globe. Jump into public lobbies or start private 1-on-1 conversations with zero registration.
            </p>

            <Section title="Explore Active Tamil Chat Rooms">
                <p>Choose from our diverse live chat rooms designed for every Tamil interest:</p>
                <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem', marginBottom: '1rem' }}>
                    <li><strong>Tamil Nadu Regional Lobbies:</strong> Chat rooms for Chennai, Coimbatore, Madurai, Tiruchirappalli, Salem, and Tirunelveli.</li>
                    <li><strong>Global Tamil Chat Rooms:</strong> Meet Tamilians living in Singapore, Malaysia, Sri Lanka, Dubai, Abu Dhabi, London, and the USA.</li>
                    <li><strong>Friendship &amp; Fun:</strong> Respectful, safe rooms to make new friends and connect with like-minded individuals.</li>
                    <li><strong>Kollywood Cinema &amp; Trends:</strong> Discuss the latest Tamil movies, music, Thalapathy, Thala, Rajini memes, and current buzz.</li>
                </ul>
            </Section>

            <Section title="Why TamilChat Offers the Best Tamil Chat Room Experience">
                <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem', marginBottom: '1rem' }}>
                    <li><strong>No Signups or Logins:</strong> Simply enter a nickname and start chatting in any <strong>Tamil chat room</strong> immediately.</li>
                    <li><strong>100% Free Forever:</strong> No coins, subscription packages, or paywalled features.</li>
                    <li><strong>Integrated Tamil Video Call:</strong> Seamlessly switch from group chat rooms to private 1-on-1 HD video calling.</li>
                    <li><strong>Strict Anti-Spam &amp; Moderation:</strong> Enjoy a clean, safe, and respectful environment.</li>
                </ul>
            </Section>
            <SeoNavFooter />
        </div>
    );
};

// 12. Tamil Video Call Page
export const TamilVideoCallPage = () => {
    let currentPath = '/tamil-video-call';

    useMeta(
        'Tamil Video Call - Free 1-on-1 Tamil Video Call & Random Chat | TamilChat',
        'Connect instantly for Tamil Video Call on TamilChats.online. Free 1-on-1 Tamil video call online, Tamil random call matching, and live stranger chat with zero registration.',
        currentPath
    );

    return (
        <div style={containerStyle} className="glass">
            <Header title="Tamil Video Call - Free 1-on-1 Tamil Video Chat & Random Call" />
            <CallToAction />
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
                Looking for an instant <strong>Tamil Video Call</strong>? TamilChat connects you face-to-face with friendly Tamil speakers across Tamil Nadu and worldwide. Enjoy peer-to-peer 1-on-1 <strong>Tamil random call</strong> matching, voice calling, and encrypted text messaging with zero download or login requirements.
            </p>

            <Section title="Why TamilChat is the Top Tamil Video Call Platform">
                <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem', marginBottom: '1rem' }}>
                    <li><strong>Instant Video Pairing:</strong> One-tap connect for 1-on-1 <strong>Tamil video call</strong> and stranger matching.</li>
                    <li><strong>Direct WebRTC P2P Technology:</strong> Video streams are encrypted directly between devices for ultra-low latency and maximum privacy.</li>
                    <li><strong>100% Free with Zero Coins:</strong> No paywalls, daily call limits, or credit card requirements.</li>
                    <li><strong>Cross-Platform Compatibility:</strong> Works seamlessly on Chrome, Safari, Firefox, iOS, and Android.</li>
                </ul>
            </Section>

            <Section title="How to Start a Tamil Video Call">
                <ol style={{ marginLeft: '1.5rem', marginTop: '0.5rem', marginBottom: '1rem' }}>
                    <li>Click <strong>Start Chatting Now</strong> to enter the live platform.</li>
                    <li>Enter any custom anonymous handle.</li>
                    <li>Allow camera/microphone permissions and tap &quot;Start Video Call&quot; to match with fellow Tamilians!</li>
                </ol>
            </Section>
            <SeoNavFooter />
        </div>
    );
};

// 13. Tamil Open Chat Page
export const TamilOpenChatPage = () => {
    useMeta(
        'Tamil Open Chat - Free Tamil Live Chat Online | TamilChat',
        'Experience Tamil Open Chat on TamilChats.online. Fast, open Tamil chat rooms, stranger connections, and instant video calling with zero signups.',
        '/tamil-open-chat'
    );

    return (
        <div style={containerStyle} className="glass">
            <Header title="Tamil Open Chat - Free Tamil Live Chat Online" />
            <CallToAction />
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
                Welcome to <strong>Tamil Open Chat</strong> (<a href="https://tamilchats.online/" style={{ color: 'var(--primary)' }}>TamilChats.online</a>), the completely open, free-access Tamil live chat platform. Jump into ongoing open discussions, meet new Tamil friends, and share voice notes or video calls without registration hurdles.
            </p>

            <Section title="Highlights of Tamil Open Chat">
                <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem', marginBottom: '1rem' }}>
                    <li><strong>Open Access:</strong> No passwords, emails, or phone numbers required. Instant entry for everyone.</li>
                    <li><strong>Live Open Conversations:</strong> Meet Tamilians discussing daily topics, cinema, jobs, music, and friendship.</li>
                    <li><strong>Switch to Private Video:</strong> Request 1-on-1 video calls with any user in the open room.</li>
                </ul>
            </Section>
            <SeoNavFooter />
        </div>
    );
};

// Internal Linking Navigation Footer for SEO Pages
const SeoNavFooter = () => (
    <div style={{ marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid var(--panel-border)', textAlign: 'center' }}>
        <h4 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Explore Popular Tamil Chat Lobbies</h4>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', justifyContent: 'center', fontSize: '0.88rem' }}>
            <a href="/" style={{ color: 'var(--text-muted)', textDecoration: 'none', background: 'rgba(255,255,255,0.04)', padding: '6px 12px', borderRadius: '8px' }}>Tamil Chat Live</a>
            <a href="/tamil-chat-rooms" style={{ color: 'var(--text-muted)', textDecoration: 'none', background: 'rgba(255,255,255,0.04)', padding: '6px 12px', borderRadius: '8px' }}>Tamil Chat Room</a>
            <a href="/tamil-video-call" style={{ color: 'var(--text-muted)', textDecoration: 'none', background: 'rgba(255,255,255,0.04)', padding: '6px 12px', borderRadius: '8px' }}>Tamil Video Call</a>
            <a href="/tamil-chatting-website" style={{ color: 'var(--text-muted)', textDecoration: 'none', background: 'rgba(255,255,255,0.04)', padding: '6px 12px', borderRadius: '8px' }}>Tamil Chat Website</a>
            <a href="/tamil-stranger-chat-website" style={{ color: 'var(--text-muted)', textDecoration: 'none', background: 'rgba(255,255,255,0.04)', padding: '6px 12px', borderRadius: '8px' }}>Tamil Stranger Chat Website</a>
            <a href="/tamil-random-chatting-website" style={{ color: 'var(--text-muted)', textDecoration: 'none', background: 'rgba(255,255,255,0.04)', padding: '6px 12px', borderRadius: '8px' }}>Tamil Random Chatting Website</a>
            <a href="/tamil-open-chat" style={{ color: 'var(--text-muted)', textDecoration: 'none', background: 'rgba(255,255,255,0.04)', padding: '6px 12px', borderRadius: '8px' }}>Tamil Open Chat</a>
            <a href="/tamil-chat-live" style={{ color: 'var(--text-muted)', textDecoration: 'none', background: 'rgba(255,255,255,0.04)', padding: '6px 12px', borderRadius: '8px' }}>Live Tamil Chat</a>
            <a href="/tamil-chatting-website" style={{ color: 'var(--text-muted)', textDecoration: 'none', background: 'rgba(255,255,255,0.04)', padding: '6px 12px', borderRadius: '8px' }}>Tamil Chatting Website</a>
            <a href="/tamil-strangers-chat" style={{ color: 'var(--text-muted)', textDecoration: 'none', background: 'rgba(255,255,255,0.04)', padding: '6px 12px', borderRadius: '8px' }}>Tamil Strangers Chat</a>
            <a href="/tamil-free-video-call" style={{ color: 'var(--text-muted)', textDecoration: 'none', background: 'rgba(255,255,255,0.04)', padding: '6px 12px', borderRadius: '8px' }}>Tamil Free Video Call</a>
            <a href="/tamil-random-video-call" style={{ color: 'var(--text-muted)', textDecoration: 'none', background: 'rgba(255,255,255,0.04)', padding: '6px 12px', borderRadius: '8px' }}>Tamil Random Video Call</a>
            <a href="/tamil-chat-online" style={{ color: 'var(--text-muted)', textDecoration: 'none', background: 'rgba(255,255,255,0.04)', padding: '6px 12px', borderRadius: '8px' }}>Tamil Chat Online</a>
            <a href="/tamil-chatting-app" style={{ color: 'var(--text-muted)', textDecoration: 'none', background: 'rgba(255,255,255,0.04)', padding: '6px 12px', borderRadius: '8px' }}>Tamil Chat App</a>
        </div>
    </div>
);
