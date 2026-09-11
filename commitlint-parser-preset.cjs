module.exports = {
  parserOpts: {
    headerPattern: /^(?:[\p{Emoji_Presentation}\p{Extended_Pictographic}]\s?)?(\w+)(?:\(([^)]+)\))?!?: (.+)$/u,
    headerCorrespondence: ['type', 'scope', 'subject'],
  },
};
