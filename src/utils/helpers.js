export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function formatPhoneDisplay(phone) {
  return phone?.replace(/\s+/g, ' ').trim() ?? '';
}

export function slugify(text = '') {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-');
}

export function truncate(text = '', length = 120) {
  if (text.length <= length) return text;
  return `${text.slice(0, length).trim()}…`;
}

export function scrollToTop(behavior = 'smooth') {
  window.scrollTo({ top: 0, behavior });
}
