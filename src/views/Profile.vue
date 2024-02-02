<template>

<div class="py-12 px-12 font-inter">
  <div class="flex items-center space-x-4">
    <img class="w-24 h-24 rounded-full" :src="player.avatar" :alt="player.name">
    <div class="font-medium dark:text-white">
        <h1 class="text-2xl font-semibold">{{ player.name }} 
          <a v-if=player.discordUserId :href="`https://discord.com/users/${player.discordUserId}`">
          <img src="../assets/icons/discord.svg" alt="discord logo" class="h-5 w-5 ml-1 inline-block sm:grayscale-0 lg:grayscale hover:grayscale-0 xl:grayscale">
        </a>

        <a v-if="player.instagramUsername" :href="`https://instagram.com/${player.instagramUsername}`">
         <img src="../assets/icons/instagram.svg" alt="instagram logo" class="h-5 w-5 inline-block ml-2 sm:grayscale-0 lg:grayscale hover:grayscale-0 xl:grayscale">
        </a>
        </h1>

       
        <div class="text-sm text-gray-500 dark:text-gray-400"><img src="../assets/icons/time.svg" class="h-4 w-4 inline-block"> {{  player.joinDate }}</div>
        <div class="text-sm text-gray-500 dark:text-gray-400"><img src="../assets/icons/role.svg" class="h-4 w-4 inline-block"> {{  player.role }}</div>
        <div class="text-sm text-gray-500 dark:text-gray-400"> <img src="../assets/icons/grassblock.svg" class="h-4 w-4 inline-block"> {{  player.username }}</div>
      </div>
      
</div>


<p class="text-slate-400 py-4 max-w-4xl" v-if="player.bio">{{ player.bio }}</p>
<p v-else class="text-slate-400 pt-4">No description provided.</p>



<div v-if="playerOnline === true" >
<img src="../assets/online.png" alt="online" class="h-4 w-4 inline-block">
    <p class="text-[#b1b1b1] text-center inline-block mt-1 px-1 font-inter">Playing on server</p>
  </div>
<div v-else>
<img src="../assets/offline.png" alt="offline" class="h-4 w-4 inline-block">
    <p class="text-[#b1b1b1] text-center inline-block mt-1 px-1">Not playing on server </p>
  </div>

>

</div>

</template>

<script>
import playerData from '../assets/json/players.json';
import ColorThief from 'colorthief';

export default {
  data() {
    return {
      players: playerData,
      player: null,
      backgroundStyle: {},
      playerOnline: null,
    };
  },
  created() {
    const playerUsername = this.$route.params.username; 
    this.player = this.players.find((player) => player.id === playerUsername || player.username === playerUsername);
    this.generateBackgroundStyle();
  },
  methods: {
    generateBackgroundStyle() {
      // gradients from hypercolor.dev
      const gradients = [
       'linear-gradient(to right, rgb(55, 65, 81), rgb(17, 24, 39), rgb(0, 0, 0))',
       'linear-gradient(to left, rgb(229, 231, 235), rgb(156, 163, 175), rgb(75, 85, 99))',
       'linear-gradient(to left, rgb(29, 78, 216), rgb(30, 64, 175), rgb(17, 24, 39))',
       'linear-gradient(to right, rgb(17, 24, 39), rgb(75, 85, 99))',
       'radial-gradient(at 100% 0%, rgb(56, 189, 248), rgb(49, 46, 129))'
       
      ]
     const randomizedGradient = gradients[Math.floor(Math.random() * gradients.length)]
     this.backgroundStyle = {
          backgroundImage: randomizedGradient
        };

    
    },
    async isPlayerPlaying() {
      const response = await fetch("https://api.mcsrvstat.us/2/yeet.minecra.fr");      
      const res = await response.json();
      const minecraftUsername = this.player.username.toLowerCase();
      console.log(`username selected: ${minecraftUsername}`)
      const playerList = JSON.stringify(res.players.list).toLowerCase();
    
      console.log(playerList)
      if (res && playerList) {
        if (playerList.includes(minecraftUsername)) {
          this.playerOnline = true;
          console.log(this.playerOnline)
        }
        else {
        this.playerOnline = false;
        console.log(this.playerOnline)
        }
      } else {
        this.playerOnline = "Unknown"
      }
    }
  },
  mounted() {
    this.isPlayerPlaying();
  }
};


</script>

