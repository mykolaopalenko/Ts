import { concatenation } from './concatenation';
import { isWeekend } from './baseTypes/7.ts';
const button = document.querySelector('button')!;
const input = document.querySelector('input')!;

if (button && input) {
  button.addEventListener('click', () => {
    concatenation(input.value, 'hello!');
  });
}

