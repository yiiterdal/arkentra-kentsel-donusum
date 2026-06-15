'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log({ firstName, lastName, email, message });
    setSent(true);
  }

  const inputClass =
    'w-full border border-gray-200 bg-white px-4 py-3 text-base focus:outline-none focus:border-brand-600 focus:ring-1 focus:ring-brand-600 transition-colors';

  if (sent) {
    return (
      <div className="p-8 border border-brand-200 bg-brand-50">
        <p className="text-brand-800 font-medium">Teşekkürler! En kısa sürede size dönüş yapacağız.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold tracking-wide uppercase text-gray-600 mb-2">
            Adı
          </label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className={inputClass}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold tracking-wide uppercase text-gray-600 mb-2">
            Soyadı
          </label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className={inputClass}
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold tracking-wide uppercase text-gray-600 mb-2">
          E-posta
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClass}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-semibold tracking-wide uppercase text-gray-600 mb-2">
          Mesaj
        </label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          className={inputClass}
          required
        />
      </div>

      <button
        type="submit"
        className="px-8 py-3.5 bg-brand-600 text-white text-base font-semibold hover:bg-brand-700 transition-colors"
      >
        Gönder
      </button>
    </form>
  );
}
