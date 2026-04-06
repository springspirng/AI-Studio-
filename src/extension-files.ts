export const contentJs = `// 字典：將英文翻譯為正體中文
const dictionary = {
  // 導覽列與選單 (Sidebar & Menu)
  "Google AI Studio": "Google AI Studio",
  "Playground": "測試區 (Playground)",
  "Build": "建置 (Build)",
  "Dashboard": "儀表板",
  "Documentation": "說明文件",
  "Create new prompt": "建立新提示",
  "Chat prompt": "對話提示",
  "Freeform prompt": "自由形式提示",
  "Structured prompt": "結構化提示",
  "My Library": "我的媒體庫",
  "Prompts": "提示",
  "Tuning": "微調",
  "API key": "API 金鑰",
  "Get API key": "取得 API 金鑰",
  "Docs": "文件",
  "Help": "說明",
  "Settings": "設定",
  "Sign in": "登入",
  "Sign out": "登出",
  "Recent": "最近",
  "History": "歷史紀錄",
  "Billing": "帳單",
  "Terms of Service": "服務條款",
  "Terms of service": "服務條款",
  "Privacy Policy": "隱私權政策",
  "Privacy policy": "隱私權政策",
  "Theme": "主題",
  "Submit prompt key": "送出提示快捷鍵",
  "Applet notifications": "Applet 通知",
  "View status": "查看狀態",
  "Send feedback": "傳送意見回饋",
  "Billing Support": "帳單支援",
  
  // 動作與按鈕 (Actions & Buttons)
  "Get code": "取得程式碼",
  "Run": "執行",
  "Save": "儲存",
  "Share": "分享",
  "Publish": "發布",
  "Versions": "版本",
  "Secrets": "機密 (Secrets)",
  "Integrations": "整合",
  "Export": "匯出",
  "Delete": "刪除",
  "Cancel": "取消",
  "Confirm": "確認",
  "Close": "關閉",
  "Test": "測試",
  "Insert": "插入",
  "Rename": "重新命名",
  "Duplicate": "建立副本",
  "Copy": "複製",
  "Copy code": "複製程式碼",
  "Send": "傳送",
  "Stop": "停止",
  "Clear": "清除",
  "Clear all": "全部清除",
  "Clear chat": "清除對話",
  "Undo": "復原",
  "Redo": "重做",
  "Download": "下載",
  "Upload": "上傳",
  "Browse": "瀏覽",
  "Upload to Drive": "上傳至雲端硬碟",
  "Select from Drive": "從雲端硬碟選取",
  "View more actions": "查看更多動作",
  "No changes to save": "沒有需要儲存的變更",
  "Make a copy": "建立副本",
  "Raw Mode": "原始模式",
  "Start": "開始",
  "Gallery": "藝廊",
  "Your apps": "您的應用程式",
  "FAQ": "常見問題",
  
  // 執行設定 (Run Settings)
  "Run settings": "執行設定",
  "Model": "模型",
  "Temperature": "溫度",
  "Add stop sequence": "新增停止序列",
  "Stop sequence": "停止序列",
  "Advanced": "進階",
  "Advanced settings": "進階設定",
  "Safety settings": "安全設定",
  "Tokens": "權杖 (Tokens)",
  "Count tokens": "計算權杖數",
  "Max tokens": "最大權杖數",
  "Max output tokens": "最大輸出權杖數",
  "Output length": "輸出長度",
  "Top K": "Top K",
  "Top P": "Top P",
  "Edit safety settings": "編輯安全設定",
  "Harassment": "騷擾",
  "Hate speech": "仇恨言論",
  "Sexually explicit": "色情內容",
  "Dangerous content": "危險內容",
  "Block none": "不封鎖",
  "Block few": "封鎖少數",
  "Block some": "封鎖部分",
  "Block most": "封鎖多數",
  "Media resolution": "媒體解析度",
  "Default": "預設",
  "Thinking level": "思考等級",
  "High": "高",
  "Low": "低",
  "Tools": "工具",
  "Structured outputs": "結構化輸出",
  "Code execution": "程式碼執行",
  "Function calling": "函式呼叫",
  "Grounding with Google Search": "Google 搜尋基礎",
  "Grounding with Google Maps": "Google 地圖基礎",
  "URL context": "網址上下文",
  "No API Key": "無 API 金鑰",
  "Switch to a paid API key to unlock higher quota and more features.": "切換至付費 API 金鑰以解鎖更高配額與更多功能。",
  "Our most intelligent model built for speed, combining frontier intelligence with superior search and grounding.": "我們最聰明的模型，專為速度而打造，結合了前沿智慧與卓越的搜尋及基礎能力。",
  
  // 編輯器與提示區域 (Editor & Prompts)
  "System Instructions": "系統指令",
  "System instructions": "系統指令",
  "Optional tone and style instructions for the model": "模型的選用語氣與風格指令",
  "Add custom instructions for your project to control style, models used, add specific knowledge, and more.": "為您的專案新增自訂指令以控制風格、使用的模型、加入特定知識等。",
  "Type something": "輸入內容...",
  "Type a prompt here": "在此輸入提示...",
  "Insert text": "插入文字",
  "Insert image": "插入圖片",
  "Insert file": "插入檔案",
  "Insert: Text": "插入：文字",
  "Insert: Image": "插入：圖片",
  "Insert: File": "插入：檔案",
  "Add text": "新增文字",
  "Add image": "新增圖片",
  "Add file": "新增檔案",
  "User": "使用者",
  "Input": "輸入",
  "Output": "輸出",
  "Test your prompt": "測試您的提示",
  "Write your prompt here": "在此撰寫您的提示",
  "Run prompt": "執行提示",
  "Untitled prompt": "未命名提示",
  "System": "系統",
  "Context": "上下文",
  "Examples": "範例",
  "Add example": "新增範例",
  "Chat": "對話",
  "Chat settings": "對話設定",
  "Select model for chat": "選擇對話模型",
  "Default (Gemini 3 Flash Preview)": "預設 (Gemini 3 Flash Preview)",
  "Free requests": "免費請求",
  "You're currently using free tier requests.": "您目前正在使用免費層級請求。",
  "Microphone source": "麥克風來源",
  
  // API 金鑰頁面 (API Keys)
  "Create API key": "建立 API 金鑰",
  "Create API key in new project": "在新專案中建立 API 金鑰",
  "Create API key in existing project": "在現有專案中建立 API 金鑰",
  "Search projects": "搜尋專案",
  "Your API keys": "您的 API 金鑰",
  
  // 微調頁面 (Tuning)
  "Create tuned model": "建立微調模型",
  "Tuned models": "微調模型",
  "Training data": "訓練資料",
  "Epochs": "訓練週期 (Epochs)",
  "Batch size": "批次大小",
  "Learning rate": "學習率",
  
  // 其他常見文字 (Other)
  "Loading...": "載入中...",
  "Error": "錯誤",
  "Success": "成功",
  "Learn more": "了解更多",
  "Dismiss": "略過",
  "Try again": "重試",
  "Preview": "預覽",
  "Code": "程式碼",
  "JSON": "JSON",
  "Markdown": "Markdown",
  "Text": "文字"
};

let isChinese = true;

// 取得儲存的語言設定
chrome.storage.local.get(['isChinese'], function(result) {
  if (result.isChinese !== undefined) {
    isChinese = result.isChinese;
  }
  
  if (isChinese) {
    translateDOM(document.body);
    
    // 監聽動態載入的內容
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE || node.nodeType === Node.TEXT_NODE) {
            if (node.nodeName !== 'SCRIPT' && node.nodeName !== 'STYLE') {
              translateDOM(node);
            }
          }
        });
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });
  }
  
  createToggleButton();
});

function translateDOM(node) {
  if (node.nodeType === Node.TEXT_NODE) {
    const originalText = node.textContent;
    // 正規化空白字元，以利比對
    const trimmedText = originalText.trim().replace(/\\s+/g, ' ');
    if (trimmedText.length > 0 && dictionary[trimmedText]) {
      // 保留原本的前後空白
      node.textContent = originalText.replace(originalText.trim(), dictionary[trimmedText]);
    }
  } else if (node.nodeType === Node.ELEMENT_NODE) {
    // 翻譯 placeholder
    if (node.hasAttribute('placeholder')) {
      const placeholder = node.getAttribute('placeholder').trim().replace(/\\s+/g, ' ');
      if (dictionary[placeholder]) {
        node.setAttribute('placeholder', dictionary[placeholder]);
      }
    }
    // 翻譯 title (提示框)
    if (node.hasAttribute('title')) {
      const title = node.getAttribute('title').trim().replace(/\\s+/g, ' ');
      if (dictionary[title]) {
        node.setAttribute('title', dictionary[title]);
      }
    }
    // 翻譯 aria-label
    if (node.hasAttribute('aria-label')) {
      const ariaLabel = node.getAttribute('aria-label').trim().replace(/\\s+/g, ' ');
      if (dictionary[ariaLabel]) {
        node.setAttribute('aria-label', dictionary[ariaLabel]);
      }
    }
    
    for (let child of node.childNodes) {
      if (child.nodeName !== 'SCRIPT' && child.nodeName !== 'STYLE') {
        translateDOM(child);
      }
    }
  }
}

function createToggleButton() {
  const btn = document.createElement('button');
  btn.id = 'ai-studio-lang-toggle';
  btn.textContent = isChinese ? '切換至英文 (English)' : '切換至中文 (Chinese)';
  
  // 按鈕樣式
  Object.assign(btn.style, {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    zIndex: '999999',
    padding: '10px 16px',
    backgroundColor: '#1a73e8',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    fontSize: '14px',
    transition: 'background-color 0.2s'
  });

  btn.onmouseover = () => btn.style.backgroundColor = '#1557b0';
  btn.onmouseout = () => btn.style.backgroundColor = '#1a73e8';

  btn.addEventListener('click', () => {
    const newState = !isChinese;
    chrome.storage.local.set({ isChinese: newState }, () => {
      // 重新載入頁面以套用/取消翻譯
      // 這是最安全的方式，避免破壞 React 的 Virtual DOM
      if (confirm('切換語言需要重新載入頁面。請確認您已儲存工作。是否繼續？')) {
        location.reload();
      }
    });
  });

  document.body.appendChild(btn);
}
`;

export const chromeManifest = `{
  "manifest_version": 3,
  "name": "AI Studio 正體中文",
  "version": "1.0",
  "description": "將 Google AI Studio 介面翻譯為正體中文，並提供中英切換按鈕。",
  "permissions": ["storage"],
  "content_scripts": [
    {
      "matches": ["https://aistudio.google.com/*"],
      "js": ["content.js"],
      "run_at": "document_end"
    }
  ],
  "action": {
    "default_title": "AI Studio 正體中文"
  }
}
`;

export const firefoxManifest = `{
  "manifest_version": 3,
  "name": "AI Studio 正體中文",
  "version": "1.0",
  "description": "將 Google AI Studio 介面翻譯為正體中文，並提供中英切換按鈕。",
  "permissions": ["storage"],
  "content_scripts": [
    {
      "matches": ["https://aistudio.google.com/*"],
      "js": ["content.js"],
      "run_at": "document_end"
    }
  ],
  "action": {
    "default_title": "AI Studio 正體中文"
  },
  "browser_specific_settings": {
    "gecko": {
      "id": "aistudio-zh-tw@example.com",
      "strict_min_version": "109.0"
    }
  }
}
`;
