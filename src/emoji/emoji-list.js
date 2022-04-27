import React, { forwardRef, useEffect, useImperativeHandle, useState } from "react";


export const EmojiList = forwardRef(({ items, command }, ref) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const selectItem = (index) => {
    const item = items[index];
    if (item) command({ name: item.name });
  };

  const upHandler = () => {
    setSelectedIndex((selectedIndex + items.length - 1) % items.length);
  };

  const downHandler = () => {
    setSelectedIndex((selectedIndex + 1) % items.length);
  };

  const enterHandler = () => {
    selectItem(selectedIndex);
  };

  useEffect(() => setSelectedIndex(0), [items]);

  useImperativeHandle(ref, () => ({
    onKeyDown: ({ event }) => {
      if (event.key === "ArrowUp") {
        upHandler();
        return true;
      }

      if (event.key === "ArrowDown") {
        downHandler();
        return true;
      }

      if (event.key === "Enter") {
        enterHandler();
        return true;
      }

      return false;
    },
  }));

  return (
    <div>
      {items.map((item, index) => (
        <button key={index} className={styles.button} onClick={() => selectItem(index)}>
          <div>
            {item.fallbackImage ? <img src={item.fallbackImage} /> : item.emoji}
          </div>
          <div>:{item.name}:</div>
        </button>
      ))}
    </div>
  );
});