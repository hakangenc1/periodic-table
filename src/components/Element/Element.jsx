import React from "react";

import "./Element.css";

const borderColor = {
  actinide: "#C70066", // Deep magenta-pink (radioactive elements often represented in pink/magenta)
  "alkali metal": "#FFB300", // Bright yellow-orange (these metals have a silvery-gold appearance and are highly reactive)
  "alkaline earth metal": "#F0C300", // Golden yellow (these metals are typically silvery-gold colored)
  "diatomic nonmetal": "#1FE000", // Bright green (like chlorine gas)
  metalloid: "#5C7C8A", // Blue-grey (silicon-like color)
  "noble gas": "#C4BBFF", // Soft purple-blue (like neon/argon glow)
  "polyatomic nonmetal": "#0FBF0F", // Forest green (like solid phosphorus)
  "post-transition metal": "#A6A6A6", // Silver-grey (like aluminum/tin)
  "transition metal": "#B08D57", // Bronze-gold (like copper/gold)
  lanthanide: "#069", // Bright pink (similar to actinides, traditionally represented in pink)
  "unknown, probably transition metal": "#7D6D5D", // Darker metallic grey
  "unknown, probably post-transition metal": "#8A8A8A", // Medium grey
  "unknown, probably metalloid": "#4A6B77", // Darker blue-grey
  "unknown, predicted to be noble gas": "#A49BE7", // Muted purple-blue
  "unknown, but predicted to be an alkali metal": "#CC8F00", // Darker golden
};

export default function Element({
  name,
  number,
  symbol,
  xpos,
  ypos,
  category,
  onSelected,
}) {
  return (
    <button
      className="element"
      style={{
        gridColumn: xpos,
        gridRow: ypos,
        border: `2px solid ${borderColor[category]}`,
      }}
      onClick={() => onSelected(number)}
    >
      {symbol}

      <div className="element__name">{name}</div>
      <div className="element__number">{number}</div>
    </button>
  );
}
