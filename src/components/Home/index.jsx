import React, { useState, useEffect } from 'react';

function Index() {
  const [file, setFile] = useState(null); // Faylni saqlash
  const [fileContent, setFileContent] = useState('');
  const [error, setError] = useState('');

  // Fayl tanlash funksiyasi
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      if (selectedFile.name.endsWith('.atc')) {
        setFile(selectedFile); // Faylni o'rnatish
        setError('');
      } else {
        setError('Faqat .atc fayllarini tanlash mumkin!');
        setFile(null); // Noto'g'ri fayl tanlansa, eski faylni olib tashlash
        setFileContent('');
      }
    }
  };

  // Fayl mazmunini o'qish va chiqarish
  useEffect(() => {
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFileContent(e.target.result); // Fayl ichidagi ma'lumotlarni olish
      };
      reader.onerror = () => {
        setError('Faylni o‘qishda xatolik yuz berdi.');
      };
      reader.readAsText(file); // Faylni matn sifatida o'qish
    }
  }, [file]); // `file` o'zgarganda qayta ishlaydi

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>.atc Fayl O‘quvchi</h2>
      <input
        type="file"
        accept=".atc"
        onChange={handleFileChange}
        style={{ marginBottom: '10px' }}
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {fileContent && (
        <div>
          <h3>Fayl ichidagi ma'lumotlar:</h3>
          <pre style={{ background: '#f4f4f4', color: 'black', padding: '10px' }}>
            {fileContent}
          </pre>
        </div>
      )}
    </div>
  );
}

export default Index;
