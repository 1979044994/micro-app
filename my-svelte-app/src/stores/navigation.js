import { writable } from 'svelte/store';

export const currentPage = writable('home');
export const previousPage = writable('home');

export function navigateTo(page) {
  previousPage.set(getCurrentPage());
  currentPage.set(page);
}

function getCurrentPage() {
  let current;
  currentPage.subscribe(value => {
    current = value;
  })();
  return current;
}
