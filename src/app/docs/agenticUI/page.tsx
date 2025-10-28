"use client";

import { CommandInputPreview } from "@/app/components/chat001";
import { commandInputCodeString } from "@/app/components/chat001";
import ComponentShowcasePage from "@/app/components/component-showcase";
import { ArrowRightIcon } from "@/app/components/icons";
import { CommandInputPreview2 } from "@/app/components/chat002";
import { commandInputCodeString2 } from "@/app/components/chat002";
import Link from "next/link";
import {
  AICommandInputPreview003,
  commandInputCodeString003,
} from "@/app/components/chat003";
import {
  aiCommandInputCodeString,
  AICommandInputPreview,
} from "@/app/components/chat004";

export default function AgenticUI() {
  return (
    <div>
      <ComponentShowcasePage
        title="AI Command Input Large"
        description="An advanced input component designed for chat interfaces. Supports auto-resizing, command detection (e.g., '@yt'), file attachments, command selection via a pop-up menu, and selectable modes."
        tags={["Input", "Chat", "AI", "Interactive", "File Upload"]}
        preview={<AICommandInputPreview />}
        codeString={aiCommandInputCodeString}
      />
      <div className="h-5"></div>

      <ComponentShowcasePage
        title="AI Command Input"
        description="An advanced input component for AI chats, featuring an auto-growing textarea, a command menu, and selectable modes."
        tags={["Input", "Form", "Interactive", "AI"]}
        preview={<AICommandInputPreview003 />}
        codeString={commandInputCodeString003}
      />
      <div className="h-5"></div>
      <ComponentShowcasePage
        title="Command Input Small"
        description="An auto-resizing text input that detects and provides feedback for special commands, perfect for chat or AI interfaces.Try using commands @yt,@spotify"
        tags={["Input", "Form", "Interactive", "AI"]}
        preview={<CommandInputPreview />}
        codeString={commandInputCodeString}
      />
      <div className="h-5"></div>
      <ComponentShowcasePage
        title="Command Input Medium"
        description="An intelligent text input supporting commands like @yt, @code, @gemini — complete with menu, auto-resizing textarea, and keyboard handling."
        tags={["input", "commands", "ui", "text"]}
        preview={<CommandInputPreview2 />}
        codeString={commandInputCodeString2}
      />
      <div className="flex justify-end mt-12">
        <Link
          href="/docs/faq"
          className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 text-white font-semibold rounded-lg hover:bg-slate-700 transition-colors"
        >
          Next: faq
          <ArrowRightIcon />
        </Link>
      </div>
    </div>
  );
}
