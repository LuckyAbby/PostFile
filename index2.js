const fileBtn = document.getElementById('file')
const userName = document.getElementById('userName')
fileBtn.addEventListener('change', () => {
  const fd = new FormData()
  fd.append('file', fileBtn.files[0])
  fd.append('userName', userName.value)
  fd.append('age','18')
  const xhr = new XMLHttpRequest()
  xhr.open('POST', 'http://localhost:3036/upload', true)
  // xhr.setRequestHeader("Content-type","multipart/form-data")
  xhr.send(fd)
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log('res is', xhr.responseText)
    }
  }
})
