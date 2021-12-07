import {
  fetchUsers,
  fetchChannels,
  fetchMessagesForChannel,
} from '../api-calls/calls.js';
import { state } from '../state/state.js';
import {
  sendMessage,
  channelClicked,
  addChannel,
} from '../handlers/handlers.js';

export const homePage = async () => {
  const el = document.createElement('div');
  el.style = 'height:100%;';

  const headerEl = document.createElement('div');
  headerEl.classList.add('header');
  headerEl.innerHTML = getHeaderInnerHtml();
  el.appendChild(headerEl);

  const mainEl = document.createElement('div');
  mainEl.classList.add('main');

  const channelListingsEl = document.createElement('div');
  channelListingsEl.classList.add('listings');
  mainEl.appendChild(channelListingsEl);

  const messageHistoryEl = document.createElement('div');
  messageHistoryEl.classList.add('message-history');
  mainEl.appendChild(messageHistoryEl);

  el.appendChild(mainEl);

  const footerEl = document.createElement('div');
  footerEl.classList.add('footer');
  footerEl.innerHTML = `
  <div class="user-menu"><span class="user-menu_profile-pic"></span>
  <button id="btn-add-channel">
    Add channel
  </button>
  <span class="user-menu_username">${state.username}</span></div>
  <div class="input-box">
    <input id="chat-field" class="input-box_text" type="text"/>
  </div>
  `;
  el.appendChild(footerEl);

  registerUpdates(headerEl, channelListingsEl, messageHistoryEl);

  // register event handlers:
  document.addEventListener('keyup', function (event) {
    if (event.keyCode === 13) {
      sendMessage();
    }
  });

  channelListingsEl.addEventListener('click', channelClicked);
  footerEl.addEventListener('click', addChannel);

  return el;
};

const registerUpdates = (headerEl, channelListEl, messagesEl) => {
  setInterval(async () => {
    headerEl.innerHTML = getHeaderInnerHtml();
    // const users = await fetchUsers();
    // console.log(`USERS: ${users}`);
    const messages = await fetchMessagesForChannel(state.currentChannelId);
    // const mess = Object.entries(messages);
    // console.log(`FETCHED MESSAGES: ${messages}`);
    const channels = await fetchChannels();
    channelListEl.innerHTML = getChannelListInnerHtml(channels);
    messagesEl.innerHTML = getMessagesInnerHtml(messages);
  }, 300);
};

const getChannelListInnerHtml = (channels) => {
  const channelEntriesHtml = channels
    .map((c) => {
      if (state.currentChannelId === c.id) {
        return `<li data-channel-id="${c.id}" data-channel-name="${c.name}" class="channel active"><a data-channel-id="${c.id}" data-channel-name="${c.name}" class="channel_name">
      <span data-channel-id="${c.id}" data-channel-name="${c.name}"><span data-channel-id="${c.id}" data-channel-name="${c.name}" class="prefix">#</span>${c.name}</span></a></li>`;
      } else {
        return `<li data-channel-id="${c.id}" data-channel-name="${c.name}" class="channel"><a data-channel-id="${c.id}" data-channel-name="${c.name}" class="channel_name">
      <span data-channel-id="${c.id}" data-channel-name="${c.name}"><span data-channel-id="${c.id}" data-channel-name="${c.name}" class="prefix">#</span>${c.name}</span></a></li>`;
      }
    })
    .join('');

  return `
  <div class="listings_channels">
    <h2 class="listings_header">Channels</h2>
    <ul class="channel_list">
      ${channelEntriesHtml}
    </ul>
  </div>
      `;
};

const getMessagesInnerHtml = (messages) => {
  return messages
    .map(
      (m) => `
  <div class="message">
    <a class="message_profile-pic" href=""></a>
    <a class="message_username" href="">${m.username}</a>
    <span class="message_timestamp">${new Date(m.timestamp)}</span>
    <span class="message_star"></span>
    <span class="message_content">
     ${m.message}
    </span>
  </div>
  `,
    )
    .join('');
};

const getHeaderInnerHtml = () => {
  return `
<div class="team-menu">Daniel's Team Chat</div>
<div class="channel-menu"><span class="channel-menu_name"><span class="channel-menu_prefix">#</span>                ${state.currentChannelName}</span></div>
  `;
};
