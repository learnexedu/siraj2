"use client";
// React & Next
import React from "react";

// components
import Chat from "@/components/home/chat";
import { Button } from "@/components/ui/button";

// icons
import { MessageCircle, X } from "lucide-react";

const ChatButton = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 h-12 w-12 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 z-50"
      >
        {isOpen ? (
          <X className="h-10 w-10" />
        ) : (
          <MessageCircle className="h-10 w-10" />
        )}
      </Button>

      {isOpen && <Chat onClose={() => setIsOpen(false)} />}
    </>
  );
};

export default ChatButton;
