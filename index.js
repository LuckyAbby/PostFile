const fileBtn = document.getElementById('file')
const userName = document.getElementById('userName')
fileBtn.addEventListener('change', () => {
  const fd = new FormData()
  fd.append('file', file.files[0])
  fd.append('userName', userName.value)
  fd.append('age','18')
  fetch('http://localhost:3036/upload', {
    method: 'POST',
    body: fd,
    // headers: {
	  //   'Content-Type': 'multipart/form-data'
    // }
  }).then(res => {
    if(res.ok) {
      console.log('success')
      return res.json();
    } else {
      console.log('网络错误')
    }
  }).then(res => {
    console.log('res is',res);
  })
})
