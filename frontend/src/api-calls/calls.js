import { state } from '../state/state.js';

async function performFetch(path) {
  const URL = `${window.location.origin}/api/${path}`;

  const encodedURL = encodeURI(URL);
  const response = await fetch(encodedURL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${state.token}`,
    },
  });
  if (!response.ok) {
    console.log(response.headers);
    throw new Error(`HTTP error! status: ${response.status}\n-> ${URL}`);
  }

  const data = await response.json();

  return data;
}

async function performPost(path, body) {
  const URL = `${window.location.origin}/api/${path}`;

  const encodedURL = encodeURI(URL);
  const response = await fetch(encodedURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${state.token}`,
    },
    body: JSON.stringify(body),
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}\n-> ${URL}`);
  }
  const data = await response.json();

  return data;
}

export const fetchChannels = async () => {
  return await performFetch('channels');
};

export const fetchMessagesForChannel = async (channelId) => {
  if (!channelId) {
    return [];
  }
  return await performFetch(`channels/${channelId}/messages`);
};

export const fetchUsers = async () => {
  return await performFetch(`channels/users`);
};

export const postChannel = async (channelName) => {
  return await performPost('channels', { name: channelName });
};

export const postMessage = async (message) => {
  return await performPost(`channels/${state.currentChannelId}/messages`, {
    user: state.username,
    text: message,
  });
};

export const login = async () => {
  try {
    let username = document.querySelector('#username').value;
    let password = document.querySelector('#password').value;
    // console.log(username, password);
    // while (!username || !password) {
    //   alert('You must enter a username and password');
    //   username = prompt('Enter your username');
    //   password = prompt('Enter your password');
    // }
    const URL = `${window.location.origin}/api/login`;
    const encodedURL = encodeURI(URL);
    const response = await fetch(encodedURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        user: username,
        pass: password,
      },
    });
    if (!response.ok) {
      throw new Error(`Please provide the correct login information`);
    }
    document.querySelector('.container').innerHTML = '<div></div>';
    state.token = response.headers.get('Authorization').split(' ')[1];
    // alert(`token: ${state.token}`);
  } catch (error) {
    alert(error);
  }
};

export const register = async () => {
  try {
    let username = prompt('Enter your username');
    let password = prompt('Enter your password');
    // console.log(username, password);
    while (!username || !password) {
      alert('You must enter a username and password');
      username = prompt('Enter your username');
      password = prompt('Enter your password');
    }
    const URL = `${window.location.origin}/api/register`;
    const encodedURL = encodeURI(URL);
    const response = await fetch(encodedURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: username,
        pass: password,
      }),
    });
    if (!response.ok) {
      throw new Error(`Please provide correct register information`);
    }
    alert(`You have successfully registered`);
    // alert(`token: ${state.token}`);
  } catch (error) {
    alert(error);
  }
};
