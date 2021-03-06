function border(str, left = "|", right = "|") {
  return (left || "") + str + (right || "");
}

function spaces(num = 1, spaceSymbol = " ") {
  return spaceSymbol.repeat(num);
}

function getSides(width, leftCorner, rightCorner) {
  return `${leftCorner}${spaces(width - 2, "─")}${rightCorner}`;
}

function cardManufacture(number, suitSymbol, width = 11) {
  if (width < 4) {
    throw "Minimum card width needs to be 4!";
  }
  let widthNoBorders = width - 2;
  let widthHalf = Math.floor(widthNoBorders / 2);

  return `${getSides(width, "┌", "┐")}
|${number}${
    number > 9 ? spaces(widthNoBorders - 2) : spaces(widthNoBorders - 1)
  }│
${border(spaces(widthNoBorders))}
${border(spaces(widthNoBorders))}
${border(
  spaces(widthHalf) + suitSymbol + spaces(width % 2 ? widthHalf : widthHalf - 1)
)}
${border(spaces(widthNoBorders))}
${border(spaces(widthNoBorders))}
│${
    number > 9 ? spaces(widthNoBorders - 2) : spaces(widthNoBorders - 1)
  }${number}│
${getSides(width, "└", "┘")}`;
}

module.exports = {
  cardManufacture,
};
