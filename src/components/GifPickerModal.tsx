import React, { useState, useEffect, useCallback } from 'react';
import { Search, X, Upload, Link as LinkIcon, Loader2, Sparkles, Image as ImageIcon } from 'lucide-react';
import { uploadOrCompressImage } from '../utils/image-uploader';

interface GifPickerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectGif: (gifUrl: string, title?: string) => void;
}

// Authentic Verified Tamil Cinema Movie & Character GIFs
const CURATED_GIFS: Record<string, { id: string; url: string; title: string; tags?: string[] }[]> = {
  tamil: [
    { id: 't1', url: 'https://media.tenor.com/g0HKqQ11kvsAAAAM/tcr-pokkiri-vadivelu.gif', title: 'Vadivelu Pokkiri Swag', tags: ['vadivelu', 'comedy', 'tamil', 'funny', 'வடிவேலு', 'பொக்கிரி'] },
    { id: 't2', url: 'https://media.tenor.com/RNpAXqj4Ap0AAAAM/chumma-adhirthille-rajinikanth.gif', title: 'Rajinikanth Chumma Adhirudhillai', tags: ['rajinikanth', 'rajini', 'thalaivar', 'sivaji', 'tamil', 'ரஜினி'] },
    { id: 't3', url: 'https://media.tenor.com/olPBYDV_kdsAAAAM/master-vijay.gif', title: 'Thalapathy Vijay Master Swag', tags: ['vijay', 'thalapathy', 'master', 'tamil', 'விஜய்', 'தளபதி'] },
    { id: 't4', url: 'https://media.tenor.com/Tk6N8ftUFTUAAAAM/ajith-gifs-thala-ajith.gif', title: 'Thala Ajith Mankatha Laugh', tags: ['ajith', 'thala', 'mankatha', 'tamil', 'அஜித்', 'தல'] },
    { id: 't5', url: 'https://media.tenor.com/xSBgnLQOO7oAAAAM/santhanam-dialogue-dialogue.gif', title: 'Santhanam Legendary Punch Counter', tags: ['santhanam', 'comedy', 'tamil', 'சந்தானம்', 'கவுண்டர்'] },
    { id: 't6', url: 'https://media.tenor.com/7k-PWk1_qd0AAAAM/soorarai-pottru-kaatu-payale.gif', title: 'Suriya Soorarai Pottru Romance', tags: ['suriya', 'sooraraipottru', 'love', 'tamil', 'சூர்யா', 'காதல்'] },
    { id: 't7', url: 'https://media.tenor.com/bDXihdnBFG8AAAAM/leo-thalapathy-vijay.gif', title: 'Vijay Leo Bloody Sweet', tags: ['vijay', 'leo', 'mass', 'tamil', 'விஜய்', 'லியோ'] },
    { id: 't8', url: 'https://media.tenor.com/69_4HsLFbVgAAAAM/ajith-thala.gif', title: 'Thala Ajith Billa Sunglasses', tags: ['ajith', 'thala', 'billa', 'tamil', 'அஜித்', 'பில்லா'] },
    { id: 't9', url: 'https://media.tenor.com/nzBDLgtW4WYAAAAM/comedy-vadivelu-laughing.gif', title: 'Vadivelu Comedy Laugh', tags: ['vadivelu', 'comedy', 'tamil', 'வடிவேலு', 'சிரிப்பு'] },
    { id: 't10', url: 'https://media.tenor.com/j9T8usftqBUAAAAM/flying-kiss-yogi-babu.gif', title: 'Yogi Babu Flying Kiss', tags: ['yogibabu', 'comedy', 'tamil', 'யோகிபாபு'] }
  ],
  vadivelu: [
    { id: 'vad1', url: 'https://media.tenor.com/g0HKqQ11kvsAAAAM/tcr-pokkiri-vadivelu.gif', title: 'Vadivelu "Aaha Enna Oru Anbu"', tags: ['vadivelu', 'comedy', 'vaigaipuyal', 'வடிவேலு', 'வைகைப்புயல்', 'ஆஹா'] },
    { id: 'vad2', url: 'https://media.tenor.com/i0CiT2GM-WkAAAAM/vadivelu-marudhamalai-funny-expression-vadivelu-marudhamalai-smile.gif', title: 'Vadivelu Marudhamalai Smile', tags: ['vadivelu', 'marudhamalai', 'வடிவேலு', 'மருதமலை'] },
    { id: 'vad3', url: 'https://media.tenor.com/FjfqQxIKoXAAAAAM/aayutham-aruva.gif', title: 'Vadivelu "Aayutham Aruva" Shock', tags: ['vadivelu', 'reaction', 'வடிவேலு', 'ஆயுதம்'] },
    { id: 'vad4', url: 'https://media.tenor.com/nzBDLgtW4WYAAAAM/comedy-vadivelu-laughing.gif', title: 'Vadivelu Non-stop Laugh', tags: ['vadivelu', 'comedy', 'வடிவேலு', 'சிரிப்பு'] },
    { id: 'vad5', url: 'https://media.tenor.com/SY4QbY3hkkwAAAAM/vadivelu-vadivelu-comedy.gif', title: 'Vadivelu "Naanum Rowdy Dhaan"', tags: ['vadivelu', 'rowdy', 'வடிவேலு'] },
    { id: 'vad6', url: 'https://media.tenor.com/sw_n99tiy_wAAAAM/smile-vadivelu-reaction.gif', title: 'Vadivelu Wink Expression', tags: ['vadivelu', 'wink', 'வடிவேலு'] }
  ],
  rajini: [
    { id: 'raj1', url: 'https://media.tenor.com/RNpAXqj4Ap0AAAAM/chumma-adhirthille-rajinikanth.gif', title: 'Rajini Sivaji "Chumma Adhirudhillai"', tags: ['rajinikanth', 'sivaji', 'thalaivar', 'ரஜினி', 'தலைவர்', 'சிவாஜி'] },
    { id: 'raj2', url: 'https://media.tenor.com/lHfG03rVFWAAAAAM/vanakkam-rajinikanth.gif', title: 'Superstar Vanakkam Swag', tags: ['rajinikanth', 'vanakkam', 'thalaivar', 'வணக்கம்'] },
    { id: 'raj3', url: 'https://media.tenor.com/UFqWBlGnEsoAAAAM/coolie-rajinikanth.gif', title: 'Coolie Rajini Mass Look', tags: ['rajinikanth', 'coolie', 'mass', 'கூலி'] },
    { id: 'raj4', url: 'https://media.tenor.com/PGLMkx7oy1IAAAAM/style-rajini.gif', title: 'Rajinikanth Sunglasses Flip Style', tags: ['rajini', 'style', 'flip', 'ஸ்டைல்'] },
    { id: 'raj5', url: 'https://media.tenor.com/l0AKkRWZSvYAAAAM/chitti-evil-laugh.gif', title: 'Enthiran Chitti Evil Laugh', tags: ['rajini', 'chitti', 'enthiran', 'எந்திரன்', 'சிட்டி'] },
    { id: 'raj6', url: 'https://media.tenor.com/21-FdcBvqjsAAAAM/rajinikanth-angry.gif', title: 'Superstar Intense Anger Mass', tags: ['rajini', 'anger', 'mass', 'ரஜினி'] }
  ],
  thalapathy: [
    { id: 'vj1', url: 'https://media.tenor.com/olPBYDV_kdsAAAAM/master-vijay.gif', title: 'Thalapathy Vijay Master Swag', tags: ['vijay', 'thalapathy', 'master', 'விஜய்', 'தளபதி', 'மாஸ்டர்'] },
    { id: 'vj2', url: 'https://media.tenor.com/bDXihdnBFG8AAAAM/leo-thalapathy-vijay.gif', title: 'Vijay Leo Bloody Sweet', tags: ['vijay', 'leo', 'mass', 'லியோ', 'தளபதி'] },
    { id: 'vj3', url: 'https://media.tenor.com/gpt_2-8SMkUAAAAM/vijay-vijay-varisu.gif', title: 'Thalapathy Varisu Charming Smile', tags: ['vijay', 'varisu', 'smile', 'வாரிசு'] },
    { id: 'vj4', url: 'https://media.tenor.com/RE3Wa-pWbcsAAAAM/beast-vijay-vijay.gif', title: 'Vijay Beast Mode Walk', tags: ['vijay', 'beast', 'mass', 'பீஸ்ட்'] },
    { id: 'vj5', url: 'https://media.tenor.com/csOG2HrueCsAAAAM/vijay-amaithi-vijay-gif.gif', title: 'Vijay "Amaithi" Calm Down Gesture', tags: ['vijay', 'amaithi', 'peace', 'அமைதி'] },
    { id: 'vj6', url: 'https://media.tenor.com/XB_m0VpYCL8AAAAM/master-tamil-thalapathy-vijay-master-vijay.gif', title: 'Vijay Master Dance Step', tags: ['vijay', 'dance', 'master'] }
  ],
  thala: [
    { id: 'aj1', url: 'https://media.tenor.com/Tk6N8ftUFTUAAAAM/ajith-gifs-thala-ajith.gif', title: 'Thala Ajith Mankatha Laugh', tags: ['ajith', 'thala', 'mankatha', 'அஜித்', 'தல', 'மங்காத்தா'] },
    { id: 'aj2', url: 'https://media.tenor.com/--spAOYsDaYAAAAM/ajith-hi-hello-tamil-hi-hello.gif', title: 'Ajith "Hi Hello" Friendly Wave', tags: ['ajith', 'hello', 'wave', 'ஹலோ'] },
    { id: 'aj3', url: 'https://media.tenor.com/69_4HsLFbVgAAAAM/ajith-thala.gif', title: 'Ajith Billa Sunglasses Walk', tags: ['ajith', 'billa', 'swag', 'பில்லா', 'தல'] },
    { id: 'aj4', url: 'https://media.tenor.com/EdL0TT_b_K0AAAAM/ganesh-vedhalam.gif', title: 'Thala Vedalam "Therikka Vidalama"', tags: ['ajith', 'vedalam', 'mass', 'வேதாளம்'] },
    { id: 'aj5', url: 'https://media.tenor.com/bCe_HkNjUegAAAAM/thunivu-ajith-trailer-ajith-kumar-smiling.gif', title: 'Ajith Thunivu Dark Smile', tags: ['ajith', 'thunivu', 'smile', 'துணிவு'] },
    { id: 'aj6', url: 'https://media.tenor.com/kAVe8pZZBrMAAAAM/ajith-kumar-ajith.gif', title: 'Ajith Kumar Classic Grin', tags: ['ajith', 'smile', 'அஜித்'] }
  ],
  santhanam: [
    { id: 'san1', url: 'https://media.tenor.com/xSBgnLQOO7oAAAAM/santhanam-dialogue-dialogue.gif', title: 'Santhanam Punch Counter', tags: ['santhanam', 'comedy', 'funny', 'tamil', 'சந்தானம்', 'காமெடி'] },
    { id: 'san2', url: 'https://media.tenor.com/yCaG4rrSbtgAAAAM/kalakalappu-santhanam.gif', title: 'Santhanam Kalakalappu Funny Look', tags: ['santhanam', 'kalakalappu', 'கலகலப்பு'] },
    { id: 'san3', url: 'https://media.tenor.com/MAc5WiOwGrQAAAAM/startamilchatin-poda.gif', title: 'Santhanam "Poda Venna" Roast', tags: ['santhanam', 'roast', 'போடா'] },
    { id: 'san4', url: 'https://media.tenor.com/j9T8usftqBUAAAAM/flying-kiss-yogi-babu.gif', title: 'Yogi Babu Flying Kiss Comedy', tags: ['yogibabu', 'comedy', 'tamil', 'யோகி பாபு'] },
    { id: 'san5', url: 'https://media.tenor.com/_NMtr1OLwTEAAAAM/senthil-goundamani.gif', title: 'Goundamani & Senthil Banana Comedy', tags: ['goundamani', 'senthil', 'comedy', 'கவுண்டமணி', 'செந்தில்'] },
    { id: 'san6', url: 'https://media.tenor.com/xILfaAHFCNMAAAAM/tamil-comedy-fight-meme.gif', title: 'Vivek Sarcastic Reaction', tags: ['vivek', 'comedy', 'tamil', 'விவேக்'] }
  ],
  tamillove: [
    { id: 'tl1', url: 'https://media.tenor.com/7k-PWk1_qd0AAAAM/soorarai-pottru-kaatu-payale.gif', title: 'Soorarai Pottru Kaattu Payale', tags: ['suriya', 'soorarai', 'love', 'காதல்', 'சூர்யா'] },
    { id: 'tl2', url: 'https://media.tenor.com/alLIlMs9x3YAAAAM/romance-nithya.gif', title: 'Thiruchitrambalam Cute Romance', tags: ['dhanush', 'nithyamenen', 'love', 'திருச்சிற்றம்பலம்'] },
    { id: 'tl3', url: 'https://media.tenor.com/p2NW3rJ8axoAAAAM/vijay-vijay-sethupathi.gif', title: 'Vijay Sethupathi Sweet Smile', tags: ['vjs', 'vijaysethupathi', 'smile', 'விஜய் சேதுபதி'] },
    { id: 'tl4', url: 'https://media.tenor.com/A3-GwLyA6foAAAAM/romance-suriya.gif', title: 'Suriya Vaaranam Aayiram Stare', tags: ['suriya', 'romance', 'வாரணம் ஆயிரம்'] },
    { id: 'tl5', url: 'https://media.tenor.com/qP4Seaalb3gAAAAM/suriya-tamil.gif', title: 'Suriya Loving Smile', tags: ['suriya', 'smile', 'காதல்'] }
  ],
  trending: [
    { id: 'tr1', url: 'https://media.tenor.com/RNpAXqj4Ap0AAAAM/chumma-adhirthille-rajinikanth.gif', title: 'Superstar Rajini Sivaji Chumma Adhirudhillai', tags: ['trending', 'rajini', 'ரஜினி'] },
    { id: 'tr2', url: 'https://media.tenor.com/g0HKqQ11kvsAAAAM/tcr-pokkiri-vadivelu.gif', title: 'Vadivelu Pokkiri Swag', tags: ['trending', 'vadivelu', 'வடிவேலு'] },
    { id: 'tr3', url: 'https://media.tenor.com/bDXihdnBFG8AAAAM/leo-thalapathy-vijay.gif', title: 'Thalapathy Vijay Leo Bloody Sweet', tags: ['trending', 'vijay', 'விஜய்'] },
    { id: 'tr4', url: 'https://media.tenor.com/Tk6N8ftUFTUAAAAM/ajith-gifs-thala-ajith.gif', title: 'Thala Ajith Mankatha Laugh', tags: ['trending', 'ajith', 'அஜித்'] },
    { id: 'tr5', url: 'https://media.tenor.com/xSBgnLQOO7oAAAAM/santhanam-dialogue-dialogue.gif', title: 'Santhanam Punch Counter', tags: ['trending', 'santhanam', 'சந்தானம்'] },
    { id: 'tr6', url: 'https://media.tenor.com/7k-PWk1_qd0AAAAM/soorarai-pottru-kaatu-payale.gif', title: 'Suriya Romance Vibe', tags: ['trending', 'suriya', 'சூர்யா'] },
    { id: 'tr7', url: 'https://media.tenor.com/j9T8usftqBUAAAAM/flying-kiss-yogi-babu.gif', title: 'Yogi Babu Flying Kiss', tags: ['trending', 'yogibabu', 'யோகிபாபு'] },
    { id: 'tr8', url: 'https://media.tenor.com/olPBYDV_kdsAAAAM/master-vijay.gif', title: 'Master JD Vijay Swag', tags: ['trending', 'vijay', 'விஜய்'] }
  ]
};

const CATEGORIES = [
  { id: 'tamil', label: '🛕 Tamil Memes • தமிழ்' },
  { id: 'vadivelu', label: '😂 Vaigai Puyal Vadivelu' },
  { id: 'rajini', label: '👑 Superstar Rajini' },
  { id: 'thalapathy', label: '⚡ Thalapathy Vijay' },
  { id: 'thala', label: '🔥 Thala Ajith' },
  { id: 'santhanam', label: '🤣 Santhanam & Comedy' },
  { id: 'tamillove', label: '😍 Kollywood Romance' },
  { id: 'trending', label: '🚀 Trending Tamil' }
];

export const GifPickerModal: React.FC<GifPickerModalProps> = ({ isOpen, onClose, onSelectGif }) => {
  const [activeTab, setActiveTab] = useState<'search' | 'upload'>('search');
  const [selectedCategory, setSelectedCategory] = useState<string>('tamil');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [gifs, setGifs] = useState<{ id: string; url: string; title: string }[]>(CURATED_GIFS.tamil);
  const [loading, setLoading] = useState<boolean>(false);

  // Upload/Custom URL state
  const [customUrl, setCustomUrl] = useState<string>('');
  const [isUploading, setIsUploading] = useState<boolean>(false);

  // Search logic: matches local Tamil tags and title
  const performSearch = useCallback((query: string) => {
    const q = query.toLowerCase().trim();
    if (!q) {
      setGifs(CURATED_GIFS[selectedCategory] || CURATED_GIFS.tamil);
      return;
    }

    setLoading(true);

    // Filter local curated list matching search query
    const allLocalGifs = Object.values(CURATED_GIFS).flat();
    const matchedLocal = allLocalGifs.filter(gif =>
      gif.title.toLowerCase().includes(q) ||
      gif.tags?.some(t => t.toLowerCase().includes(q))
    );

    // Deduplicate local matches
    const localMap = new Map<string, { id: string; url: string; title: string }>();
    matchedLocal.forEach(item => localMap.set(item.id, item));

    const results = Array.from(localMap.values());
    if (results.length > 0) {
      setGifs(results);
    } else {
      setGifs(CURATED_GIFS[selectedCategory] || CURATED_GIFS.tamil);
    }
    setLoading(false);
  }, [selectedCategory]);

  // Handle Search Input Change with Debounce
  useEffect(() => {
    if (!searchQuery.trim()) {
      setGifs(CURATED_GIFS[selectedCategory] || CURATED_GIFS.tamil);
      return;
    }

    const timer = setTimeout(() => {
      performSearch(searchQuery);
    }, 200);

    return () => clearTimeout(timer);
  }, [searchQuery, selectedCategory, performSearch]);

  const handleCategoryClick = (catId: string) => {
    setSelectedCategory(catId);
    setSearchQuery('');
    setGifs(CURATED_GIFS[catId] || CURATED_GIFS.tamil);
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.includes('gif') && !file.type.includes('image')) {
      alert('Please select a valid GIF or image file.');
      return;
    }

    setIsUploading(true);
    try {
      const directUrl = await uploadOrCompressImage(file);
      onSelectGif(directUrl, file.name);
      onClose();
    } catch (err) {
      alert('Failed to upload GIF file. Please check internet connection or try pasting direct URL.');
    } finally {
      setIsUploading(false);
    }
  };

  const handleCustomUrlSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customUrl.trim()) return;
    onSelectGif(customUrl.trim(), 'Custom GIF');
    setCustomUrl('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 3000,
        background: 'rgba(0,0,0,0.7)',
        backdropFilter: 'blur(12px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem'
      }}
      onClick={onClose}
    >
      <div
        className="glass"
        style={{
          width: '100%',
          maxWidth: '540px',
          maxHeight: '85vh',
          borderRadius: '20px',
          border: '1px solid var(--panel-border)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
          background: 'var(--panel-bg)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          style={{
            padding: '1rem 1.25rem',
            borderBottom: '1px solid var(--panel-border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: 'rgba(255,255,255,0.03)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Sparkles size={20} style={{ color: 'var(--primary)' }} />
            <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-main)' }}>
              Send Tamil & Kollywood GIFs • தமிழ் ஜிஃப்ஸ்
            </h3>
          </div>

          <button
            onClick={onClose}
            className="icon-btn"
            style={{ padding: '6px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', cursor: 'pointer' }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div
          style={{
            display: 'flex',
            borderBottom: '1px solid var(--panel-border)',
            background: 'rgba(0,0,0,0.2)'
          }}
        >
          <button
            style={{
              flex: 1,
              padding: '0.75rem',
              border: 'none',
              background: activeTab === 'search' ? 'rgba(255,255,255,0.08)' : 'transparent',
              color: activeTab === 'search' ? 'var(--primary)' : 'var(--text-muted)',
              fontWeight: 600,
              fontSize: '0.9rem',
              cursor: 'pointer',
              borderBottom: activeTab === 'search' ? '2px solid var(--primary)' : '2px solid transparent',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px'
            }}
            onClick={() => setActiveTab('search')}
          >
            <Search size={16} /> Tamil GIF Collection
          </button>

          <button
            style={{
              flex: 1,
              padding: '0.75rem',
              border: 'none',
              background: activeTab === 'upload' ? 'rgba(255,255,255,0.08)' : 'transparent',
              color: activeTab === 'upload' ? 'var(--primary)' : 'var(--text-muted)',
              fontWeight: 600,
              fontSize: '0.9rem',
              cursor: 'pointer',
              borderBottom: activeTab === 'upload' ? '2px solid var(--primary)' : '2px solid transparent',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px'
            }}
            onClick={() => setActiveTab('upload')}
          >
            <Upload size={16} /> Upload / URL
          </button>
        </div>

        {/* Content Body */}
        {activeTab === 'search' ? (
          <div style={{ display: 'flex', flexDirection: 'column', flex: 1, overflow: 'hidden' }}>
            {/* Search Bar */}
            <div style={{ padding: '0.75rem 1rem 0.5rem 1rem' }}>
              <div
                style={{
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  background: 'rgba(255,255,255,0.06)',
                  borderRadius: '12px',
                  border: '1px solid var(--panel-border)'
                }}
              >
                <Search size={18} style={{ position: 'absolute', left: '12px', color: 'var(--text-muted)' }} />
                <input
                  type="text"
                  enterKeyHint="search"
                  placeholder="Search Tamil GIFs (e.g. Vadivelu, Rajini, Vijay, Ajith, Santhanam, வடிவேலு)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      (e.target as HTMLElement)?.blur();
                    }
                  }}
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.75rem 0.65rem 2.5rem',
                    background: 'transparent',
                    border: 'none',
                    color: 'var(--text-main)',
                    fontSize: '0.9rem',
                    outline: 'none'
                  }}
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', padding: '0 10px' }}
                  >
                    <X size={16} />
                  </button>
                )}
              </div>
            </div>

            {/* Category Pills */}
            <div
              style={{
                display: 'flex',
                gap: '8px',
                padding: '0 1rem 0.75rem 1rem',
                overflowX: 'auto',
                scrollbarWidth: 'none'
              }}
            >
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryClick(cat.id)}
                  style={{
                    whiteSpace: 'nowrap',
                    padding: '0.35rem 0.85rem',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    fontWeight: selectedCategory === cat.id && !searchQuery ? 700 : 500,
                    background: selectedCategory === cat.id && !searchQuery ? 'var(--primary)' : 'rgba(255,255,255,0.08)',
                    color: selectedCategory === cat.id && !searchQuery ? '#fff' : 'var(--text-main)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* GIF Grid Area */}
            <div
              style={{
                flex: 1,
                overflowY: 'auto',
                padding: '0.5rem 1rem 1rem 1rem',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(135px, 1fr))',
                gap: '10px'
              }}
            >
              {loading ? (
                <div style={{ gridColumn: '1 / -1', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '3rem 0', color: 'var(--text-muted)' }}>
                  <Loader2 size={32} className="spin" style={{ marginBottom: '10px', color: 'var(--primary)' }} />
                  <span>Loading GIFs...</span>
                </div>
              ) : (
                gifs.map((gif) => (
                  <div
                    key={gif.id}
                    onClick={() => {
                      if (typeof document !== 'undefined') {
                        (document.activeElement as HTMLElement)?.blur();
                      }
                      onSelectGif(gif.url, gif.title);
                      onClose();
                    }}
                    style={{
                      position: 'relative',
                      aspectRatio: '4 / 3',
                      borderRadius: '12px',
                      overflow: 'hidden',
                      cursor: 'pointer',
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.04)';
                      e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <img
                      src={gif.url}
                      alt={gif.title}
                      loading="lazy"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block'
                      }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        zIndex: 1,
                        width: '100%',
                        background: 'linear-gradient(to top, rgba(0,0,0,0.85), transparent)',
                        padding: '6px 6px 4px 6px',
                        fontSize: '0.7rem',
                        fontWeight: 600,
                        color: '#fff',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                      }}
                    >
                      {gif.title}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        ) : (
          /* Upload / Custom URL Tab */
          <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', overflowY: 'auto' }}>
            {/* File Upload Option */}
            <div
              style={{
                border: '2px dashed var(--panel-border)',
                borderRadius: '16px',
                padding: '1.5rem',
                textAlign: 'center',
                background: 'rgba(255,255,255,0.02)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '12px'
              }}
            >
              <div style={{ padding: '12px', borderRadius: '50%', background: 'rgba(255,255,255,0.08)' }}>
                <ImageIcon size={32} style={{ color: 'var(--primary)' }} />
              </div>
              <div>
                <h4 style={{ margin: '0 0 4px 0', color: 'var(--text-main)' }}>Upload Custom GIF</h4>
                <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                  Upload any Tamil or animated GIF file from your device
                </p>
              </div>

              <label
                className="btn btn-primary"
                style={{
                  cursor: isUploading ? 'not-allowed' : 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '0.6rem 1.2rem',
                  fontSize: '0.9rem'
                }}
              >
                {isUploading ? <Loader2 size={18} className="spin" /> : <Upload size={18} />}
                {isUploading ? 'Uploading...' : 'Choose GIF File'}
                <input
                  type="file"
                  accept="image/gif"
                  onChange={handleFileUpload}
                  disabled={isUploading}
                  style={{ display: 'none' }}
                />
              </label>
            </div>

            {/* Direct GIF Link Option */}
            <form onSubmit={handleCustomUrlSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                Or Paste Direct GIF Image URL
              </label>
              <div style={{ display: 'flex', gap: '8px' }}>
                <div
                  style={{
                    flex: 1,
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    background: 'rgba(255,255,255,0.06)',
                    borderRadius: '12px',
                    border: '1px solid var(--panel-border)'
                  }}
                >
                  <LinkIcon size={16} style={{ position: 'absolute', left: '12px', color: 'var(--text-muted)' }} />
                  <input
                    type="url"
                    placeholder="https://media.giphy.com/.../giphy.gif"
                    value={customUrl}
                    onChange={(e) => setCustomUrl(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.6rem 0.75rem 0.6rem 2.4rem',
                      background: 'transparent',
                      border: 'none',
                      color: 'var(--text-main)',
                      fontSize: '0.88rem',
                      outline: 'none'
                    }}
                  />
                </div>
                <button
                  type="submit"
                  disabled={!customUrl.trim()}
                  className="btn btn-primary"
                  style={{ padding: '0.6rem 1rem', width: 'auto', whiteSpace: 'nowrap', opacity: customUrl.trim() ? 1 : 0.5 }}
                >
                  Send GIF
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
