import React, { useEffect, useState } from 'react';
import { TamilLogo } from './TamilLogo';
import { Mail, Check, Copy, AlertTriangle, HelpCircle } from 'lucide-react';

const useMeta = (title: string, description: string, canonicalPath: string) => {
    useEffect(() => {
        document.title = title;

        const updateMeta = (selector: string, content: string) => {
            let tag = document.querySelector(selector);
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

        let canonical = document.querySelector('link[rel="canonical"]');
        if (canonical) {
            canonical.setAttribute('href', `https://tamilchat.online${canonicalPath}`);
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
            Open TamilChat Website →
        </a>
    </div>
);

const Section = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div style={{ marginBottom: '1.5rem' }}>
        <h3 style={{ color: '#fff', marginBottom: '0.5rem', fontSize: '1.2rem' }}>{title}</h3>
        <div style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{children}</div>
    </div>
);

export const PrivacyPage = () => {
    useMeta(
        'Privacy Policy - Tamil Chat',
        'Learn about Tamil Chat privacy policy, peer-to-peer WebRTC security, and zero data storage principles.',
        '/privacy'
    );

    return (
        <div style={containerStyle} className="glass">
            <Header title="Privacy Policy" />

            {/* Website Opening Section */}
            <div style={{
                background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(127, 29, 29, 0.2) 100%)',
                padding: '2rem',
                borderRadius: '16px',
                marginBottom: '2rem',
                textAlign: 'center',
                border: '1px solid rgba(239, 68, 68, 0.2)'
            }}>
                <div style={{ marginBottom: '1rem' }}><TamilLogo size={60} /></div>
                <h2 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>Experience TamilChat Online</h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>Join the fastest growing anonymous chat platform. No registration, no logs, just pure communication.</p>
                <a href="/" style={{
                    background: 'var(--primary)',
                    color: '#000',
                    padding: '0.8rem 2rem',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    display: 'inline-block'
                }}>Join the Chat Now</a>
            </div>

            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}><em>Effective Date: February 2026</em></p>

            <p style={{ marginBottom: '1.5rem', color: 'var(--text-muted)' }}>TamilChat.online operates a privacy-first, peer-to-peer communication model. This policy outlines our technical architecture and strict adherence to data minimization principles.</p>

            <Section title="1. No Personal Data Collection">
                <p>Our platform strictly operates without user accounts. We DO NOT collect, request, or store:</p>
                <ul style={{ marginLeft: '1.5rem', marginBottom: '1rem' }}>
                    <li>Email addresses, phone numbers, or real names.</li>
                    <li>Account registration data or passwords.</li>
                    <li>Chat histories or logs of whom you connected with.</li>
                </ul>
            </Section>

            <Section title="2. Peer-to-Peer Architecture (Private Rooms)">
                <p>Private communications on TamilChat utilize WebRTC technology. This establishes a direct, peer-to-peer (P2P) connection between users. We act as a neutral signaling bridge to initiate the connection. We do not intercept, monitor, or store any text chat messages, audio data, or video streams transmitted through these direct links.</p>
            </Section>

            <Section title="3. Ephemeral Public Chat">
                <p>Messages broadcasted into the "World Chat" are transmitted in real-time. We maintain no permanent centralized database of these chat logs. Public chat data is transient and ceases to exist on our immediate systems once the active session terminates.</p>
            </Section>

            <Section title="4. Essential Technical Data">
                <p>To facilitate connections, we and our trusted third-party infrastructure temporarily process essential routing data (such as IP addresses and ephemeral session tokens). This metadata is required strictly for service functionality, is highly volatile, and is not permanently logged by us.</p>
            </Section>

            <Section title="5. Security & Data Protection">
                <p>We do not sell, rent, or trade user data. While we implement standard web encryption protocols, users must acknowledge that no internet transmission is entirely impervious to security breaches. We retain zero session-based data once a browser instance is closed.</p>
            </Section>

            <Section title="6. Age Restriction">
                <p>The platform is strictly restricted to users aged 18 and older. We do not knowingly permit access to minors or collect data concerning children.</p>
            </Section>
        </div>
    );
};

export const TermsPage = () => {
    useMeta(
        'Terms & Conditions - Tamil Chat',
        'Read Tamil Chat terms and conditions, legal intermediary classification, user responsibilities, and platform rules.',
        '/terms'
    );

    return (
        <div style={containerStyle} className="glass">
            <Header title="Terms and Conditions" />

            {/* Website Opening Section */}
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
                <h2 style={{ color: 'var(--primary)', marginBottom: '0.8rem', fontSize: '2.2rem', fontWeight: '800' }}>Welcome to TamilChat</h2>
                <p style={{ color: 'var(--text-main)', fontSize: '1.1rem', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>The safest place for private Tamil conversations. Click below to enter the platform directly.</p>
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
                }}>Enter Chat Room →</a>
            </div>

            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}><em>Effective Date: February 2026</em></p>

            <p style={{ marginBottom: '1.5rem', color: 'var(--text-muted)' }}>By accessing TamilChat.online, you expressly agree to these Terms and Conditions.</p>

            <Section title="1. Legal Classification & Intermediary Status">
                <p>TamilChat is strictly classified as an <strong>&quot;Intermediary&quot;</strong> under Section 2(w) of the Information Technology Act, 2000 (India). We claim comprehensive Safe Harbour protection under Section 79 of the IT Act. We provide a neutral technological framework allowing users to transmit information.</p>
                <p style={{ marginTop: '0.5rem' }}>Specifically, TamilChat DOES NOT:<br />
                    (a) Initiate the transmission of communications.<br />
                    (b) Select the receiver of the transmission.<br />
                    (c) Select or modify the information contained in the transmission.<br />
                    Neither do we exercise editorial control or actively monitor private peer-to-peer communications.
                </p>
            </Section>

            <Section title="2. User Responsibility & Age Restriction">
                <p>You must be exactly 18 years of age or older to access this platform. You are solely and entirely responsible for any content you transmit, share, or generate.</p>
            </Section>

            <Section title="3. Limitation of Liability">
                <p style={{ textTransform: 'uppercase', fontSize: '0.85rem' }}>To the maximum extent permitted by applicable law, under no circumstances shall TamilChat, its founders, operators, developers, or affiliates be held liable for any direct, indirect, incidental, punitive, special, or consequential damages resulting from (i) your access to or inability to access the platform; (ii) any conduct or content generated by any third party; (iii) any unauthorized access, use, or alteration of transmissions; or (iv) any misuse of the peer-to-peer private rooms.</p>
            </Section>

            <Section title="4. Indemnification">
                <p>You agree to indemnify, defend, and hold harmless TamilChat and its operators from any claims, liabilities, damages, and expenses (including legal fees) arising from your use of the platform, your violation of these terms, or your infringement of any third-party rights.</p>
            </Section>

            <Section title="5. Enforcement & Government Cooperation">
                <p>We reserve the absolute right to suspend, block, or permanently restrict access to any user without prior notice at our sole discretion. We fully cooperate with lawful, binding government and court orders relating to cyber activity investigations under Indian law.</p>
            </Section>

            <Section title="6. Governing Law & Jurisdiction">
                <p>These terms are governed exclusively by the laws of the Republic of India. Any disputes arising out of these terms or platform usage shall be subject to the exclusive jurisdiction of the competent courts located in India.</p>
            </Section>

            <Section title="7. Force Majeure & Disclaimer of Warranty">
                <p>The platform is provided &quot;AS-IS&quot; and &quot;AS-AVAILABLE&quot;. We offer no warranties that the service will be uninterrupted, secure, or error-free. We shall not be liable for any service interruptions caused by acts of God, infrastructure failures, or external events beyond our control. We disclaim all responsibility for any misuse of the peer-to-peer private rooms.</p>
            </Section>
        </div>
    );
};

export const AUPPage = () => {
    useMeta(
        'Acceptable Use Policy - Tamil Chat',
        'Review acceptable use policies and community rules for Tamil Chat online chat platform.',
        '/aup'
    );

    return (
        <div style={containerStyle} className="glass">
            <Header title="Acceptable Use Policy" />
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}><em>Effective Date: February 2026</em></p>

            <p style={{ marginBottom: '1.5rem', color: 'var(--text-muted)' }}>To ensure compliance with the Information Technology Act, 2000, and standard global regulations, use of the platform for the following activities is strictly prohibited.</p>

            <Section title="Strictly Prohibited Material & Conduct">
                <ul style={{ marginLeft: '1.5rem', marginBottom: '1rem', color: 'var(--text-muted)' }}>
                    <li><strong>Child Sexual Abuse Material (CSAM):</strong> Depicting or linking to the exploitation of minors is a severe criminal offense resulting in immediate reporting to authorities.</li>
                    <li><strong>Terrorism & Violence:</strong> Promoting terror activities, inciting violence, or instructing others in the creation of weapons.</li>
                    <li><strong>Obscene & Explicit Content:</strong> Transmitting non-consensual sexual content, explicit pornography, or deeply offensive/defamatory material.</li>
                    <li><strong>Hate Speech:</strong> Promoting violence or discrimination against groups based on religion, race, caste, gender, or sexual orientation.</li>
                    <li><strong>Harassment & Threats:</strong> Stalking, cyberbullying, doxxing, or issuing direct threats.</li>
                    <li><strong>Illegal Acts (IPC/IT Act violations):</strong> Initiating financial fraud, distributing narcotics, planning illegal activities, or pirating copyrighted assets.</li>
                    <li><strong>System Abuse:</strong> Distributing malware, executing unauthorized bot scripts, or attempting to compromise platform infrastructure.</li>
                    <li><strong>Impersonation:</strong> Deceiving users by falsely attributing an identity with malicious intent.</li>
                </ul>
            </Section>

            <Section title="Enforcement Actions">
                <p>TamilChat reserves the right to immediately terminate the session, restrict IP access, or implement technical blocks against users found violating these policies without prior warning. Suspected severe illegal activities will prompt cooperation with relevant law enforcement structures.</p>
            </Section>
        </div>
    );
};

export const DisclaimerPage = () => {
    useMeta(
        'Legal Disclaimer & Grievance Protocol - Tamil Chat',
        'Legal disclaimer, intermediary status, and Grievance Officer details for Tamil Chat under IT Act 2000.',
        '/disclaimer'
    );

    return (
        <div style={containerStyle} className="glass">
            <Header title="Legal Disclaimer & Grievance Protocol" />
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}><em>Effective Date: February 2026</em></p>

            <Section title="Neutral Technological Intermediary">
                <p>TamilChat operates strictly as a neutral technology provider allowing decentralized user communication. We do not initiate, select, or modify any user transmissions. We do not monitor private peer-to-peer communications. Public chat is transient and not archived. Use of the platform is at the user&apos;s own risk.</p>
            </Section>

            <Section title="Grievance Officer (India Compliance)">
                <p>In accordance with the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021, the name and contact details of the Grievance Officer are published below:</p>

                <div style={{ background: 'rgba(0,0,0,0.2)', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--primary)', marginTop: '1rem', marginBottom: '1rem' }}>
                    <h4 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.1rem' }}>Grievance Officer Contact Details</h4>
                    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(120px, auto) 1fr', gap: '0.5rem', fontSize: '0.95rem' }}>
                        <strong style={{ color: '#fff' }}>Name:</strong>
                        <span>[Grievance Officer Name]</span>

                        <strong style={{ color: '#fff' }}>Designation:</strong>
                        <span>Chief Grievance Officer</span>

                        <strong style={{ color: '#fff' }}>Email:</strong>
                        <a href="mailto:grievance@tamilchat.online" style={{ color: 'var(--primary)', textDecoration: 'none' }}>grievance@tamilchat.online</a>

                        <strong style={{ color: '#fff' }}>Jurisdiction:</strong>
                        <span>Republic of India</span>
                    </div>
                </div>

                <p style={{ marginTop: '1rem' }}><strong>Complaint Submission Requirements:</strong><br />
                    When submitting a complaint, the complainant must provide a clear description of the alleged violation, exact timestamps, context, and an electronic signature.</p>

                <p style={{ marginTop: '0.5rem' }}><strong>Resolution Timeline:</strong><br />
                    We shall acknowledge the complaint within twenty-four (24) hours of receipt and endeavor to resolve concerns within seventy-two (72) hours, or escalate them in cooperation with lawful governmental requests as required under applicable law.</p>
            </Section>
        </div>
    );
};

export const PaymentHelpPage = () => {
    useMeta(
        'Payment Support & Refund Policy - TamilChat',
        'Official Payment Support, Billing Assistance, and Policy details for TamilChat. Contact teamtwingle@gmail.com for payment help.',
        '/payment-help'
    );

    const [issueCategory, setIssueCategory] = useState('Payment deducted, tokens not unlocked');
    const [senderUsername, setSenderUsername] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('tamilchat_username') || '';
        }
        return '';
    });
    const [upiTxnId, setUpiTxnId] = useState('');
    const [amountPaid, setAmountPaid] = useState('100');
    const [customNotes, setCustomNotes] = useState('');
    const [copied, setCopied] = useState(false);

    const prefilledOptions = [
        'Payment deducted, tokens not unlocked',
        'UPI QR code scanned but transaction pending',
        'Double deduction on UPI app',
        'Screenshot verification inquiry',
        'Other billing issue'
    ];

    const generateEmailBody = () => {
        return `Hello TamilChat Support Team,

I am writing regarding a payment issue on TamilChat.online.

--- Issue Summary ---
Category: ${issueCategory}
Username: ${senderUsername || '[Not provided]'}
Amount Paid: ₹${amountPaid}
UPI / UTR Transaction ID: ${upiTxnId || '[Please enter your 12-digit UPI UTR number]'}
Date & Time: ${new Date().toLocaleDateString()}

--- Details & Custom Notes ---
${customNotes || 'Attached is my payment screenshot for verification.'}

Please review my transaction and help resolve this issue. I have attached the screenshot of my payment confirmation from my UPI app.

Thank you!`;
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(generateEmailBody());
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
    };

    const mailtoUrl = `mailto:teamtwingle@gmail.com?subject=${encodeURIComponent(`TamilChat Payment Support: ${issueCategory} (Txn: ${upiTxnId || 'Pending'})`)}&body=${encodeURIComponent(generateEmailBody())}`;

    return (
        <div style={containerStyle} className="glass">
            <Header title="Payment Support & Policy" />

            {/* Policy Notice Box */}
            <div style={{
                background: 'rgba(239, 68, 68, 0.08)',
                border: '1px solid rgba(239, 68, 68, 0.3)',
                borderRadius: '16px',
                padding: '1.25rem 1.5rem',
                marginBottom: '2rem',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px'
            }}>
                <AlertTriangle size={24} style={{ color: '#ef4444', flexShrink: 0, marginTop: '2px' }} />
                <div>
                    <h3 style={{ color: '#ef4444', fontSize: '1.1rem', margin: '0 0 0.4rem 0' }}>Strict Non-Refundable Policy</h3>
                    <p style={{ color: 'var(--text-main)', fontSize: '0.92rem', margin: 0, lineHeight: '1.5' }}>
                        All payments and contributions made on <strong>TamilChat</strong> are strictly non-refundable and are dedicated directly toward calling tokens, peer-to-peer WebRTC server maintenance, and premium account access privileges.
                    </p>
                </div>
            </div>

            {/* Turnaround Time Notice */}
            <div style={{
                background: 'rgba(239, 68, 68, 0.08)',
                border: '1px solid rgba(239, 68, 68, 0.25)',
                borderRadius: '16px',
                padding: '1.25rem 1.5rem',
                marginBottom: '2rem',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px'
            }}>
                <HelpCircle size={24} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '2px' }} />
                <div>
                    <h3 style={{ color: 'var(--primary)', fontSize: '1.1rem', margin: '0 0 0.4rem 0' }}>Support Turnaround Time</h3>
                    <p style={{ color: 'var(--text-main)', fontSize: '0.92rem', margin: 0, lineHeight: '1.5' }}>
                        Our support team reviews screenshots sent to <a href="mailto:teamtwingle@gmail.com" style={{ color: 'var(--primary)', fontWeight: 600 }}>teamtwingle@gmail.com</a> promptly and usually responds within 1 to 365 days.
                    </p>
                </div>
            </div>

            {/* Interactive Support Flow Section */}
            <Section title="Direct Email Support Contact Flow">
                <p style={{ marginBottom: '1.2rem' }}>
                    If you experienced an issue with your UPI payment or need manual transaction verification, customize the details below and email <strong style={{ color: 'var(--primary)' }}>teamtwingle@gmail.com</strong> with your transaction screenshot.
                </p>

                <div style={{
                    background: 'rgba(0, 0, 0, 0.35)',
                    border: '1px solid var(--panel-border)',
                    borderRadius: '16px',
                    padding: '1.5rem',
                    marginBottom: '1.5rem'
                }}>
                    {/* Category Selection */}
                    <div style={{ marginBottom: '1rem' }}>
                        <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                            Issue Category:
                        </label>
                        <select
                            value={issueCategory}
                            onChange={(e) => setIssueCategory(e.target.value)}
                            style={{
                                width: '100%',
                                background: 'rgba(255, 255, 255, 0.05)',
                                border: '1px solid var(--panel-border)',
                                borderRadius: '10px',
                                padding: '0.75rem 1rem',
                                color: 'var(--text-main)',
                                fontSize: '0.95rem',
                                outline: 'none'
                            }}
                        >
                            {prefilledOptions.map((opt, i) => (
                                <option key={i} value={opt} style={{ background: '#111827', color: '#fff' }}>
                                    {opt}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Username & Amount Row */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
                        <div>
                            <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                                Your TamilChat Username:
                            </label>
                            <input
                                type="text"
                                value={senderUsername}
                                onChange={(e) => setSenderUsername(e.target.value)}
                                placeholder="e.g. Chennai_Macha"
                                style={{
                                    width: '100%',
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    border: '1px solid var(--panel-border)',
                                    borderRadius: '10px',
                                    padding: '0.75rem 1rem',
                                    color: 'var(--text-main)',
                                    fontSize: '0.95rem',
                                    outline: 'none',
                                    boxSizing: 'border-box'
                                }}
                            />
                        </div>
                        <div>
                            <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                                Amount Paid (₹):
                            </label>
                            <input
                                type="text"
                                value={amountPaid}
                                onChange={(e) => setAmountPaid(e.target.value)}
                                placeholder="e.g. 60, 100, 150"
                                style={{
                                    width: '100%',
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    border: '1px solid var(--panel-border)',
                                    borderRadius: '10px',
                                    padding: '0.75rem 1rem',
                                    color: 'var(--text-main)',
                                    fontSize: '0.95rem',
                                    outline: 'none',
                                    boxSizing: 'border-box'
                                }}
                            />
                        </div>
                    </div>

                    {/* UTR / Transaction ID */}
                    <div style={{ marginBottom: '1rem' }}>
                        <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                            UPI UTR / Reference ID (12 Digits):
                        </label>
                        <input
                            type="text"
                            value={upiTxnId}
                            onChange={(e) => setUpiTxnId(e.target.value)}
                            placeholder="e.g. 425619384729"
                            style={{
                                width: '100%',
                                background: 'rgba(255, 255, 255, 0.05)',
                                border: '1px solid var(--panel-border)',
                                borderRadius: '10px',
                                padding: '0.75rem 1rem',
                                color: 'var(--text-main)',
                                fontSize: '0.95rem',
                                outline: 'none',
                                boxSizing: 'border-box'
                            }}
                        />
                    </div>

                    {/* Custom Notes / Description */}
                    <div style={{ marginBottom: '1.25rem' }}>
                        <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                            Describe Your Issue or Question:
                        </label>
                        <textarea
                            value={customNotes}
                            onChange={(e) => setCustomNotes(e.target.value)}
                            placeholder="Add details about which UPI app was used (GPay, PhonePe, Paytm), time of payment, or error message received..."
                            rows={4}
                            style={{
                                width: '100%',
                                background: 'rgba(255, 255, 255, 0.05)',
                                border: '1px solid var(--panel-border)',
                                borderRadius: '10px',
                                padding: '0.75rem 1rem',
                                color: 'var(--text-main)',
                                fontSize: '0.95rem',
                                outline: 'none',
                                boxSizing: 'border-box',
                                resize: 'vertical'
                            }}
                        />
                    </div>

                    {/* Instructions for Attaching Screenshots */}
                    <div style={{
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px dashed rgba(255, 255, 255, 0.15)',
                        borderRadius: '12px',
                        padding: '1rem',
                        marginBottom: '1.5rem',
                        fontSize: '0.85rem',
                        color: 'var(--text-muted)'
                    }}>
                        <strong style={{ color: 'var(--text-main)' }}>📸 Important: Attach Screenshot to Your Email</strong><br />
                        Please attach the original screenshot of your successful transaction from Google Pay, PhonePe, Paytm, or your banking app. Ensure the 12-digit UTR number and date are clearly readable.
                    </div>

                    {/* Action Buttons */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                        <a
                            href={mailtoUrl}
                            style={{
                                flex: 1,
                                minWidth: '220px',
                                background: 'var(--primary)',
                                color: '#fff',
                                padding: '0.85rem 1.25rem',
                                borderRadius: '12px',
                                fontWeight: 700,
                                textDecoration: 'none',
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '8px',
                                boxShadow: '0 4px 15px rgba(239, 68, 68, 0.35)',
                                fontSize: '0.95rem'
                            }}
                        >
                            <Mail size={18} />
                            Send Email to teamtwingle@gmail.com
                        </a>
                        <button
                            type="button"
                            onClick={handleCopy}
                            style={{
                                background: copied ? 'rgba(239, 68, 68, 0.2)' : 'rgba(255, 255, 255, 0.08)',
                                border: '1px solid var(--panel-border)',
                                color: copied ? 'var(--primary)' : 'var(--text-main)',
                                padding: '0.85rem 1.25rem',
                                borderRadius: '12px',
                                fontWeight: 600,
                                cursor: 'pointer',
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '8px',
                                fontSize: '0.95rem',
                                transition: 'all 0.2s'
                            }}
                        >
                            {copied ? <Check size={18} /> : <Copy size={18} />}
                            {copied ? 'Copied Template!' : 'Copy Support Template'}
                        </button>
                    </div>
                </div>
            </Section>

            <Section title="Frequently Asked Questions">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '10px' }}>
                        <strong style={{ color: '#fff', display: 'block', marginBottom: '0.3rem' }}>Why are payments non-refundable?</strong>
                        <span>Payments go directly into instant compute credits, WebRTC peer signaling resources, and calling tokens allocated for real-time video and audio connections.</span>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '10px' }}>
                        <strong style={{ color: '#fff', display: 'block', marginBottom: '0.3rem' }}>How long does manual screenshot verification take?</strong>
                        <span>Our support team reviews screenshots sent to teamtwingle@gmail.com promptly and usually responds within 1 to 365 days.</span>
                    </div>
                </div>
            </Section>
        </div>
    );
};

