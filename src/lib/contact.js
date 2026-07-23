export const contactLimits = {
  name: 100,
  email: 254,
  subject: 160,
  message: 4000,
};

function asString(value) {
  return typeof value === "string" ? value : "";
}

function stripControlCharacters(value, preserveLineBreaks = false) {
  return Array.from(asString(value), (character) => {
    const code = character.charCodeAt(0);
    const isLineBreak = preserveLineBreaks && (character === "\n" || character === "\r");
    return (code < 32 || code === 127) && !isLineBreak ? " " : character;
  }).join("");
}

function cleanSingleLine(value) {
  return stripControlCharacters(value)
    .replace(/\s+/g, " ")
    .trim();
}

function cleanMessage(value) {
  return stripControlCharacters(value, true)
    .replace(/\r\n?/g, "\n")
    .trim();
}

export function validateContactInput(input) {
  const values = {
    name: cleanSingleLine(input.name),
    email: cleanSingleLine(input.email).toLowerCase(),
    subject: cleanSingleLine(input.subject),
    message: cleanMessage(input.message),
  };
  const errors = {};

  if (values.name.length < 2 || values.name.length > contactLimits.name) {
    errors.name = "Enter a name between 2 and 100 characters.";
  }

  if (
    values.email.length > contactLimits.email ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)
  ) {
    errors.email = "Enter a valid email address.";
  }

  if (values.subject.length < 3 || values.subject.length > contactLimits.subject) {
    errors.subject = "Enter a subject between 3 and 160 characters.";
  }

  if (values.message.length < 10 || values.message.length > contactLimits.message) {
    errors.message = "Enter a message between 10 and 4,000 characters.";
  }

  return {
    values,
    errors,
    isValid: Object.keys(errors).length === 0,
  };
}
