'use client';
import { useState } from 'react';
import axios from 'axios';

export default function Create() {
  const [file, setFile] = useState<File | null>(null);
  const [caption, setCaption] = useState('');
  const [ticker, setTicker] = useState('');
  const [aiSuggested, setAISuggested] = useState(false);

  const handleUpload = async () => {
    if (!file) return;
    const formData = new FormData();
    formData.append('file', file);
    const aiResponse = await axios.post('/api/ai-suggest', formData);
    setCaption(aiResponse.data.caption);
    setTicker(aiResponse.data.ticker);
    setAISuggested(true);
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Create a Coin</h1>
      <input type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} />
      <button onClick={handleUpload} className="bg-blue-600 text-white px-4 py-2 mt-2 rounded">
        Get AI Suggestions
      </button>

      {aiSuggested && (
        <div className="mt-4">
          <input value={caption} onChange={(e) => setCaption(e.target.value)} className="w-full border p-2 mb-2" />
          <input value={ticker} onChange={(e) => setTicker(e.target.value)} className="w-full border p-2 mb-2" />
          <button className="bg-green-600 text-white px-4 py-2 rounded">
            Mint via Zora SDK (Coming Soon)
          </button>
        </div>
      )}
    </div>
  );
}
