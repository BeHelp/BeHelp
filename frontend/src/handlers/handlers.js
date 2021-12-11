import { state } from '../state/state.js';
import { postChannel, postMessage } from '../api-calls/calls.js';
import { login, register } from '../api-calls/calls.js';
import { startApplication } from '../../src/index.js';

export const channelClicked = (event) => {
  if (!event.target.dataset.channelId) {
    return;
  }
  state.currentChannelId = event.target.dataset.channelId;
  state.currentChannelName = event.target.dataset.channelName;
};

export const sendMessage = async () => {
  const message = document.getElementById('chat-field').value;
  await postMessage(message);
  document.getElementById('chat-field').value = '';
};

export const addChannel = async (event) => {
  if (event.target.type === 'submit') {
    const channelName = prompt('Please enter channel name:');
    await postChannel(channelName);
  }
};

export const loginBtnWrapper = async () => {
  const sg1 = document.querySelector('.btn');
  sg1.addEventListener('click', (event) => {
    event.preventDefault();
    startApplication();
  });
};

export const registerBtnWrapper = async () => {
  const sg = document.querySelector('.txt2');
  sg.addEventListener('click', (event) => {
    event.preventDefault();
    register();
  });
};
