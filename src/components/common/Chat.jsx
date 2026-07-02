import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

export default function Chat() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition hover:bg-blue-700"
      >
        {open ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat Box */}
      <div
        className={`fixed bottom-24 right-5 z-50 w-80 overflow-hidden rounded-2xl bg-white shadow-2xl transition-all duration-300 ${
          open
            ? "visible translate-y-0 opacity-100"
            : "invisible translate-y-5 opacity-0"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between bg-blue-600 px-4 py-3 text-white">
          <div>
            <h2 className="font-semibold">Support Chat</h2>
            <p className="text-xs text-blue-100">We usually reply instantly</p>
          </div>

          <button onClick={() => setOpen(false)}>
            <X size={20} />
          </button>
        </div>


        {/* Messages */}
        <div className="h-80 space-y-3 overflow-y-auto bg-gray-50 p-4">
          <div className="max-w-[80%] rounded-2xl rounded-bl-sm bg-gray-200 px-4 py-2 text-sm">
            Hello 👋 How can we help you today?
          </div>

          <div className="ml-auto max-w-[80%] rounded-2xl rounded-br-sm bg-blue-600 px-4 py-2 text-sm text-white">
            I need support.
          </div>
        </div>

        {/* Input */}
        <div className="flex items-center gap-2 border-t bg-white p-3">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 rounded-full border px-4 py-2 text-sm outline-none focus:border-blue-500"
          />

          <button className="rounded-full bg-blue-600 p-2 text-white hover:bg-blue-700">
            <Send size={18} />
          </button>
        </div>
      </div>
    </>
  );
}