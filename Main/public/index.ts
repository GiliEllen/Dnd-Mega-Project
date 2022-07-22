console.log('this is index.ts')

async function handleRegister(event: any) {
    event.preventDefault()
    try {
      const username = event.target.username.value;
      const password = event.target.password.value;
      const roomID = 'room1';
      const role = 'user'
      //@ts-ignore
      const { data } = await axios.post("/users/register", {username, password, roomID, role});
      const { register, error } = data;
      if (error) throw error;
      console.log(data);
    } catch(error){
      console.error(error)
    }
  
  }

  const adiv:HTMLElement = document.querySelector('div')

  async function handleLogin(event: any) {
    event.preventDefault()
    try {
      const username = event.target.username.value;
      const password = event.target.password.value;
      const roomID = 'room1';
      const role = 'user'
      //@ts-ignore
      const { data } = await axios.post("/users/login", {username, password, roomID, role});
      const { login, user, error } = data;
      
      if (error) throw error;
      else{
        if((login)&&(role == 'user')){
          window.location.href = `mainPageUser.html?userid=${user._id}`
      }  
        else if((login)&&(role == 'DM')){
          window.location.href = 'mainPageDM.html'
      }
        else{
          adiv.innerText='wrong password/username'
        }
      }
    }
    catch(error){
      console.error(error)
    }
  
  }

  async function loadUserMainPage() {
    try {
      const searchParams = new URLSearchParams(window.location.href)
      const userid = '62d96ac729bed14e36fb7459'
      //@ts-ignore
      const { data } = await axios.post("users/render-user-main-page", {userid})
      const { user, error } = data;
      const pageTitle:HTMLElement = document.querySelector('.title')
      pageTitle.innerHTML = `Welcome ${user.username}`
    }
    catch (error) {
      console.error(error)
    }
  }

// function goToRoomNum(event) {
//     event.preventDefault()
//     try {
//         console.log('heyyyyyyyyyyy')
//         const roomNum = event.target.elements.roomNum.value
//         console.log(roomNum)
//         window.location.href = `room.html?roomnum=${roomNum}`;

//     } catch(error){
//       console.error(error)
//     }
//   }

// function enterRoom(){
//     try {
//         console.log('hello')
//         const searchParams = new URLSearchParams(window.location.href)
//         const roomNum = searchParams.get('roomnum')
//         console.log(roomNum)
//     } catch (error) {
        
//       console.error(error)
//     }
//   }


