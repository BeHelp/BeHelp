import { homePage } from './components/home-page.component.js';
import { state } from './state/state.js';
import { loginBtnWrapper, registerBtnWrapper } from './handlers/handlers.js';
import { login } from './api-calls/calls.js';
export const startApplication = async () => {
  try {
    const root = document.getElementById('root');
    root.innerHTML = '';
    await login();
    const res = await homePage();
    root.append(res);
  } catch (error) {
    alert(error);
  }
};

loginBtnWrapper();
registerBtnWrapper();

// startApplication();
