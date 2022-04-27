import { generateJSON } from "@tiptap/core";
import showdown from "showdown";

import { getExtensions } from "./extensions";

import { DEFAULT_VALUE } from "./constants";
import suggestion from "./emoji/suggestion";


export function parseValue(defaultValue) {
  if (typeof window === "undefined" || defaultValue == null) {
    return DEFAULT_VALUE;
  }

  let value;

  console.log(typeof defaultValue);
  console.log(defaultValue);

  if (typeof defaultValue === "string") {
    try {
      value = JSON.parse(defaultValue);
    } catch (err) {
      const extensions = getExtensions({ suggestion });

      if (defaultValue.startsWith("<")) {
        value = generateJSON(defaultValue, extensions);
      } else {
        const converter = new showdown.Converter();
        value = generateJSON(converter.makeHtml(defaultValue), extensions);
      }
    }
  } else {
    value = defaultValue;
  }

  return value;
}
