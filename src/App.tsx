/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { Download, Chrome, Globe } from 'lucide-react';
import { chromeManifest, firefoxManifest, contentJs } from './extension-files';

export default function App() {
  const [activeTab, setActiveTab] = useState<'chrome' | 'firefox' | 'content'>('chrome');

  const downloadChromeExtension = async () => {
    const zip = new JSZip();
    zip.file('manifest.json', chromeManifest);
    zip.file('content.js', contentJs);
    const blob = await zip.generateAsync({ type: 'blob' });
    saveAs(blob, 'ai-studio-zh-tw-chrome.zip');
  };

  const downloadFirefoxExtension = async () => {
    const zip = new JSZip();
    zip.file('manifest.json', firefoxManifest);
    zip.file('content.js', contentJs);
    const blob = await zip.generateAsync({ type: 'blob' });
    saveAs(blob, 'ai-studio-zh-tw-firefox.zip');
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans p-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-bold mb-4 text-blue-600">Google AI Studio 正體中文擴充功能</h1>
          <p className="text-lg text-gray-600">
            下載適用於 Google Chrome 與 Firefox 的瀏覽器擴充功能，將 Google AI Studio 介面翻譯為正體中文，並提供一鍵切換中英文的按鈕。
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex flex-col items-center text-center">
            <Chrome className="w-16 h-16 text-blue-500 mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Google Chrome</h2>
            <p className="text-gray-500 mb-6 flex-grow">適用於 Google Chrome、Edge、Brave 等 Chromium 核心瀏覽器。</p>
            <button
              onClick={downloadChromeExtension}
              className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-colors"
            >
              <Download className="w-5 h-5" />
              下載 Chrome 擴充功能 (.zip)
            </button>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex flex-col items-center text-center">
            <Globe className="w-16 h-16 text-orange-500 mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Mozilla Firefox</h2>
            <p className="text-gray-500 mb-6 flex-grow">適用於 Mozilla Firefox 瀏覽器。</p>
            <button
              onClick={downloadFirefoxExtension}
              className="w-full flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white py-3 px-6 rounded-lg font-medium transition-colors"
            >
              <Download className="w-5 h-5" />
              下載 Firefox 擴充功能 (.zip)
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="flex border-b border-gray-200 bg-gray-50">
            <button
              onClick={() => setActiveTab('chrome')}
              className={`flex-1 py-4 px-6 text-sm font-medium border-b-2 transition-colors ${
                activeTab === 'chrome' ? 'border-blue-600 text-blue-600 bg-white' : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-100'
              }`}
            >
              manifest.json (Chrome)
            </button>
            <button
              onClick={() => setActiveTab('firefox')}
              className={`flex-1 py-4 px-6 text-sm font-medium border-b-2 transition-colors ${
                activeTab === 'firefox' ? 'border-orange-600 text-orange-600 bg-white' : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-100'
              }`}
            >
              manifest.json (Firefox)
            </button>
            <button
              onClick={() => setActiveTab('content')}
              className={`flex-1 py-4 px-6 text-sm font-medium border-b-2 transition-colors ${
                activeTab === 'content' ? 'border-green-600 text-green-600 bg-white' : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-100'
              }`}
            >
              content.js (共用)
            </button>
          </div>
          <div className="p-6 bg-gray-900 text-gray-100 overflow-x-auto">
            <pre className="font-mono text-sm">
              <code>
                {activeTab === 'chrome' && chromeManifest}
                {activeTab === 'firefox' && firefoxManifest}
                {activeTab === 'content' && contentJs}
              </code>
            </pre>
          </div>
        </div>
        
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-blue-800 mb-3">安裝說明</h3>
          <ol className="list-decimal list-inside space-y-2 text-blue-900">
            <li>點擊上方按鈕下載對應瀏覽器的 <code>.zip</code> 檔案。</li>
            <li>將下載的 <code>.zip</code> 檔案解壓縮到一個資料夾中。</li>
            <li><strong>Chrome:</strong> 開啟 <code>chrome://extensions/</code>，開啟右上角的「開發人員模式」，點擊「載入未封裝項目」，選擇剛剛解壓縮的資料夾。</li>
            <li><strong>Firefox:</strong> 開啟 <code>about:debugging#/runtime/this-firefox</code>，點擊「載入暫時性附加元件」，選擇解壓縮資料夾中的 <code>manifest.json</code>。</li>
            <li>開啟 <a href="https://aistudio.google.com" target="_blank" rel="noreferrer" className="underline font-medium">Google AI Studio</a>，介面將會自動翻譯為正體中文。</li>
            <li>點擊右下角的浮動按鈕可以隨時切換回英文。</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
