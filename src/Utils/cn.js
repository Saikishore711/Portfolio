// eslint-disable-next-line no-unused-vars, no-undef
const { ClassValue, clsx } = require("clsx");
// eslint-disable-next-line no-undef
const { twMerge } = require("tailwind-merge");

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// eslint-disable-next-line no-undef
module.exports = { cn };
