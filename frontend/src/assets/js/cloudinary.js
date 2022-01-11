// const url = 'https://api.cloudinary.com/v1_1/behelp/image/upload';
// const form = document.querySelector('form');

// form.addEventListener('submit', (e) => {
//   e.preventDefault();

//   const file = document.querySelector('[type=file]');

//   const formData = new FormData();

//   formData.append('file', file.files[0]);
//   formData.append('upload_preset', 'behelp_web');
//   console.log(formData);

//   fetch(url, {
//     method: 'POST',
//     body: formData,
//   })
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//       if(document.getElementById('data') !== null){
//         document.getElementById('data').innerHTML = data['secure_url'];
//       }
//     });
// });
