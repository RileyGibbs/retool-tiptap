import { useMemo } from "react";

import CharacterCount from "@tiptap/extension-character-count";
import Highlight from "@tiptap/extension-highlight";
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import Typography from "@tiptap/extension-typography";
import StarterKit from "@tiptap/starter-kit";
import Emoji, { emojis } from "@tiptap-pro/extension-emoji";

import suggestion from "./emoji/suggestion";

export function getExtensions(
  { autoLink = true, maxLength, placeholder } = {},
  customExtensions = [],
) {
  return [
    Highlight,
    Typography,
    StarterKit,
    Emoji.configure({
      emojis,
      suggestion,
    }),
    autoLink ? Link : Link.configure({ autolink: false }),
    maxLength && CharacterCount,
    placeholder && Placeholder.configure({ placeholder }),
    ...customExtensions,
  ].filter(Boolean);
}

export function useExtensions(
  { autoLink = true, maxLength, placeholder } = {},
  customExtensions,
) {
  return useMemo(() => getExtensions({ autoLink, maxLength, placeholder }, customExtensions), [
    autoLink,
    customExtensions,
    maxLength,
    placeholder,
  ]);
}