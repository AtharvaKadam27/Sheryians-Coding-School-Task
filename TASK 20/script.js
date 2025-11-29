const reels = [
  {
    likedCount: 120,
    shareCount: 15,
    isLiked: true,
    isFollowed: true,
    commentCount: 34,
    username: "john_doe",
    profileImage:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZWx8ZW58MHx8MHx8fDA%3D",
    video:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZWx8ZW58MHwxfDB8fHww",
    caption: "Enjoying the weekend! 🌴",
  },
  {
    likedCount: 542,
    shareCount: 42,
    isLiked: false,
    isFollowed: false,
    commentCount: 88,
    username: "travel_girl",
    profileImage:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWx8ZW58MHx8MHx8fDA%3D",
    video:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWx8ZW58MHx8MHx8fDA%3D",
    caption: "Paris is unreal ✨🇫🇷",
  },
  {
    likedCount: 93,
    shareCount: 8,
    isLiked: false,
    isFollowed: true,
    commentCount: 17,
    username: "chef_mario",
    profileImage:
      "https://plus.unsplash.com/premium_photo-1673757121102-0ca51260861f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1vZGVsfGVufDB8fDB8fHww",
    video:
      "https://plus.unsplash.com/premium_photo-1673757121102-0ca51260861f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1vZGVsfGVufDB8fDB8fHww",
    caption: "Best pasta recipe! 🍝",
  },
  {
    likedCount: 1200,
    shareCount: 305,
    isLiked: true,
    isFollowed: false,
    commentCount: 201,
    username: "tech_world",
    profileImage:
      "https://images.unsplash.com/photo-1488161628813-04466f872be2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1vZGVsfGVufDB8fDB8fHww",
    video:
      "https://images.unsplash.com/photo-1763689389840-0afa417e0939?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8",
    caption: "New phone unboxing 🔥📱",
  },
  {
    likedCount: 61,
    shareCount: 4,
    isLiked: false,
    isFollowed: false,
    commentCount: 6,
    username: "fitness_boy",
    profileImage:
      "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1vZGVsfGVufDB8fDB8fHww",
    video:
      "https://images.unsplash.com/photo-1763661582974-ee6218176217?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8",
    caption: "Morning workout done 💪",
  },
  {
    likedCount: 800,
    shareCount: 70,
    isLiked: true,
    isFollowed: true,
    commentCount: 140,
    username: "singer_me",
    profileImage:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZWx8ZW58MHx8MHx8fDA%3D",
    video:
      "https://plus.unsplash.com/premium_photo-1661775820832-f971657b13f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1vZGVsfGVufDB8MXwwfHx8MA%3D%3D",
    caption: "Singing live tonight 🎤",
  },
];

let isMuted = false;

function addReel() {
  let reel = "";

  let reelContainer = document.querySelector(".reels-container");

  reels.forEach((item, idx) => {
    let isLiked = item.isLiked
      ? `<h3><i data-id=${idx} class="love ri-heart-3-fill"></i></h3>`
      : `<h3><i data-id=${idx} class="ri-heart-3-line"></i></h3>`;
    reel += `<div class="reel">
            <img src="${item.video} alt="">
            <div class="bottom">
              <div class="top">
                <img
                  src="${item.profileImage}"
                  alt=""
                />
                <p>${item.username}</p>
                <button class="follow" data-id=${idx}>${
      item.isFollowed ? "Following" : "Follow"
    }</button>
              </div>
              <h4>${item.caption}</h4>
            </div>
           <div class="right">
              <div class="like">
                ${isLiked}
                <h4>${item.likedCount}</h4>
              </div>
              <div class="comment">
                <h3><i class="ri-chat-3-fill"></i></h3>
                <h4>${item.commentCount}</h4>
              </div>
              <div class="share">
                <h3><i class="ri-share-forward-line"></i></h3>
                <h4>${item.shareCount}</h4>
              </div>
              <div class="more">
                <h3><i class="ri-more-2-fill"></i></h3>
              </div>
            </div>
            
          </div>`;
  });

  reelContainer.innerHTML =
    reel +
    `<div class="mute">${
      isMuted
        ? '<i class="ri-volume-mute-fill"></i>'
        : '<i class="ri-volume-up-fill"></i>'
    }</div>`;
}

addReel();

let reelContainer = document.querySelector(".reels-container");
reelContainer.addEventListener("click", (e) => {
  if (reels[e.target.dataset.id]) {
    if (e.target.className == "follow") {
      if (reels[e.target.dataset.id]) {
        if (reels[e.target.dataset.id].isFollowed) {
          reels[e.target.dataset.id].isFollowed = false;
        } else {
          reels[e.target.dataset.id].isFollowed = true;
        }
      }
    } else {
      if (reels[e.target.dataset.id].isLiked) {
        reels[e.target.dataset.id].isLiked = false;
        reels[e.target.dataset.id].likedCount--;
      } else {
        reels[e.target.dataset.id].isLiked = true;
        reels[e.target.dataset.id].likedCount++;
      }
    }
  }

  // addReel();
});

function removeMute() {
  console.log("hey");

  let mute = document.querySelector(".mute");
  mute.style.opacity = 1;
  setTimeout(() => {
    mute.style.opacity = 0;
  }, 1500);
}

reelContainer.addEventListener("dblclick", (e) => {
  if (e.target.tagName == "IMG") {
    if (isMuted) {
      isMuted = false;
    } else {
      isMuted = true;
    }
  }

  addReel();
  removeMute();
});
