"use client";

import { Button } from "./ui/button";
import { useState } from "react";

interface CopyPhoneButtonProps {
  phone: string;
}

export function CopyPhoneButton({ phone }: CopyPhoneButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(phone);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Erro ao copiar telefone:", err);
    }
  };

  return (
    <Button
      variant="outline"
      size="icon"
      className="h-8 w-14"
      onClick={handleCopy}
      title={copied ? "Copiado!" : "Copiar telefone"}
    >
      Copiar
    </Button>
  );
}
