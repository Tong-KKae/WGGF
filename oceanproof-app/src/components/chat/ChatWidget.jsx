import { useRef, useState } from 'react';
import { chatAnswers } from '../../data/mockData';
import { useT } from '../../i18n';
import './ChatWidget.css';

const userTypes = [
  { key: 'citizen', label: '시민 참여자' },
  { key: 'biz', label: '기업 ESG 담당자' },
  { key: 'gov', label: '공공기관 담당자' },
];

export function ChatWidget() {
  const t = useT();
  const [open, setOpen] = useState(false);
  const [userType, setUserType] = useState('citizen');
  const [messages, setMessages] = useState([{ from: 'bot', text: '안녕하세요! 어떤 사용자이신가요?' }]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const bodyRef = useRef(null);

  const scrollDown = () => {
    requestAnimationFrame(() => {
      if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    });
  };

  const pushBotReply = (text) => {
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages((m) => [...m, { from: 'bot', text }]);
      scrollDown();
    }, 550);
  };

  const askSuggested = (q, a) => {
    setMessages((m) => [...m, { from: 'user', text: q }]);
    scrollDown();
    pushBotReply(a);
  };

  const send = () => {
    const text = input.trim();
    if (!text) return;
    setMessages((m) => [...m, { from: 'user', text }]);
    setInput('');
    scrollDown();
    pushBotReply('문의 주신 내용은 담당자 확인 후 빠르게 안내드릴게요. 아래 추천 질문도 참고해보세요!');
  };

  return (
    <>
      <button type="button" className="chat-fab" onClick={() => setOpen((o) => !o)}>
        💬 OceanProof Assistant
      </button>
      <div className={`chat-window ${open ? 'open' : ''}`}>
        <div className="chat-header">
          <div>OceanProof Assistant</div>
          <button type="button" className="chat-close" onClick={() => setOpen(false)}>
            ✕
          </button>
        </div>
        <div className="chat-body" ref={bodyRef}>
          {messages.map((m, i) => (
            <div key={i} className={`chat-bubble ${m.from === 'user' ? 'user' : ''}`}>
              {t(m.text)}
            </div>
          ))}
          {typing && <div className="chat-typing">{t('답변 작성중…')}</div>}

          <div className="chat-userselect">
            {userTypes.map((ut) => (
              <button
                type="button"
                key={ut.key}
                className={`chat-pill ${userType === ut.key ? 'active' : ''}`}
                onClick={() => setUserType(ut.key)}
              >
                {t(ut.label)}
              </button>
            ))}
          </div>
          <div className="chat-suggest">
            {chatAnswers[userType].map((item) => (
              <button
                type="button"
                key={item.q}
                className="chat-suggest-btn"
                onClick={() => askSuggested(item.q, item.a)}
              >
                {t(item.q)}
              </button>
            ))}
          </div>
        </div>
        <div className="chat-input-row">
          <input
            className="chat-input"
            placeholder={t('메시지를 입력하세요')}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && send()}
          />
          <button type="button" className="chat-send" onClick={send}>
            {t('전송')}
          </button>
        </div>
      </div>
    </>
  );
}
