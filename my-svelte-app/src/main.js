import './app.css';
import App from './App.svelte';
import './styles/global.css';

const app = new App({
  target: document.body,
  props: {
    url: window.location.pathname  // 确保传入当前路径
  }
});

export default app;
