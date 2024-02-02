<template>
  <DangerNotification title="Server (temporarily) discontinued" description="As of June 2023, we've stopped actively playing on Yeet SMP due to some of our members having issues with their personal life & demotivation to work on our projects. Maybe we'll be back some day." />
    <Navbar />

<div class="main flex justify-center flex-col pt-24 yeetsmp-landing">
    <h1 class="font-inter text-white font-extrabold text-8xl text-center">Yeet SMP</h1>
    <p class="text-center text-[#bababa] pt-4 font-inter ml-2 pb-4 text-2xl">We are a <span class="font-semibold">private, invite-only </span> Minecraft server who loves building farms and making decorations. </p>
    <div class="flex justify-center pr-4 pt-8">
    <p v-if="!serverStatus" class="text-[#b1b1b1] text-center pt-2 font-inter">Loading server status...</p>
    <div v-else-if="serverStatus=true">
    <img src="../assets/online.png" alt="online" class="h-6 w-6 inline-block">
    <p class="text-[#b1b1b1] text-center inline-block mt-1 font-inter">Online | {{  concurrentPlayers ? `${concurrentPlayers}` : "0"}} playing</p>
  </div>
    <div v-else>
    <img src="../assets/offline.png" alt="online" class="h-6 w-6 inline-block">
    <p class="text-[#b1b1b1] text-center inline-block mt-1">Offline</p>
    </div>
    </div>
  </div>
  
  <section id="players">
  <div class="py-8 px-8 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
    <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
      <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white font-inter">Our Players</h2>
      <p class="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400 font-inter">Explore the whole collection of slaves and slavemasters from Yeet.</p>
    </div> 
    <div class="flex flex-wrap justify-center items-center">
      <div class="flex flex-col mt-4 w-full sm:w-1/2 md:w-1/4 lg:w-1/4 mx-auto" v-for="player in players" :key="player.id">
        <router-link :to="'/profile/' + player.username">
          <img :src="player.avatar" class="w-40 w-42 rounded-lg text-slate-200 transition hover:scale-[1.2] delay-75" :alt="`${player.name}'s avatar. It may not load due to them changing their profile picture.'`">
          <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white dark:hover:text-slate-200 font-inter pt-2">{{ player.name }}</h3>
        </router-link>
        <span class="text-gray-500 dark:text-gray-400 font-inter">{{ player.role }}</span>
      </div>
    </div>
  </div>
</section>

<section>
  <div class="max-w-screen-xl px-4  mx-auto text-center  lg:px-6 font-inter">
      <dl class="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white">
          <div class="flex flex-col items-center justify-center">
              <dt class="mb-2 text-3xl md:text-4xl font-extrabold ">50+</dt>
              <dd class="font-light text-gray-500 dark:text-gray-400 ">farms</dd>
          </div>
          <div class="flex flex-col items-center justify-center">
              <dt class="mb-2 text-3xl md:text-4xl font-extrabold ">80K+</dt>
              <dd class="font-light text-gray-500 dark:text-gray-400">blocks travelled</dd>
          </div>
          <div class="flex flex-col items-center justify-center">
              <dt class="mb-2 text-3xl md:text-4xl font-extrabold">110K+</dt>
              <dd class="font-light text-gray-500 dark:text-gray-400">blocks placed</dd>
          </div>
      </dl>
      <p class="font-light text-gray-500  sm:text-sm dark:text-gray-400 font-inter text-center pt-10 mr-2 text-sm"> source: trust me bro </p>
  </div>
</section>

<div class="px-4 mx-auto max-w-screen-xl sm:pt-12 pb-4 lg:px-6">
    <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white font-inter">Notable Builds</h2>
          <p class="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400 font-inter">From building gigantic farms to aesthetic Japanese builds to making useless farms, we have it all. Take a look.</p>
      </div> 
      </div>

  <div class="px-4 py-8 mx-auto max-w-screen-xl flex basis-2 justify-evenly gap-12">
    <figure>
    <img src="../assets/screenshots/gironf.png"  class='h-56 w-auto rounded-xl inline-block grayscale transition hover:grayscale-0 delay-200 hover:scale-[1.3]'>
    <figcaption class="pt-4 text-center text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400 font-inter">gigantic iron farm (50+ villagers)
      <br>
      by <img src='https://images-ext-2.discordapp.net/external/qthHGo4kdBaiohW9WW7Oe8tbpcTMeU5PQxZ71_6c5fg/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/641608170153836555/e5766147abdff7fc54196ec309bd7ca3.png?width=676&height=676' class="h-6 w-6 inline-block rounded-full"> rakeeb & <img src='/src/assets/players/spree.png' class="h-6 w-6 inline-block rounded-full"> spree
    </figcaption>
  </figure>
    <figure>
    <img src="../assets/screenshots/ifsa.png"  class='h-56 w-auto rounded-xl grayscale transition hover:grayscale-0 delay-200 hover:scale-[1.3]'>
    <figcaption class="pt-4 text-center text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400 font-inter">iron farm storage area
      <br>
      by <img src='https://images-ext-2.discordapp.net/external/qthHGo4kdBaiohW9WW7Oe8tbpcTMeU5PQxZ71_6c5fg/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/641608170153836555/e5766147abdff7fc54196ec309bd7ca3.png?width=676&height=676' class="h-6 w-6 inline-block rounded-full"> rakeeb
    </figcaption>
    </figure>
    <figure>
    <img src="https://media.discordapp.net/attachments/1002536759302819870/1102903839121739786/2023-05-02_14.25.29.png?width=1201&height=676"  class='h-56 w-auto rounded-xl grayscale transition hover:grayscale-0 delay-200 hover:scale-[1.3]'>
    <figcaption class="pt-4 text-center text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400 font-inter">tokyo bay central gate 
      <br>
      (very secret) 
      <br>
      by <img src="https://cdn.discordapp.com/avatars/641637887510708224/1da840532c1ce655138aee8ed50953ad.png?size=4096" class="h-6 w-6 inline-block rounded-full"> alen
    </figcaption>
  </figure>
  </div>

  <div class="px-4 py-8 mx-auto max-w-screen-xl flex basis-2 justify-evenly gap-12">
    <figure>
    <img src="../assets/screenshots/nethr.png"  class='h-56 w-auto rounded-xl grayscale transition hover:grayscale-0 delay-200 hover:scale-[1.3]'>
    <figcaption class="pt-4 text-center text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400 font-inter">japanese nether portal 
      <br>
      by <img src="https://images-ext-1.discordapp.net/external/iOBg09BsTC8fTTMztVLHMTvH5fOI7kX-hTfk5KG8J_A/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/451459773016047636/55da9e3437352ffe0fe2d302941ee67a.png" class="h-6 w-6 inline-block rounded-full"> exility
    </figcaption>
  </figure>
  <figure>
    <img src="../assets/screenshots/tbnp.png"  class='h-56 w-auto rounded-xl grayscale transition hover:grayscale-0 delay-200 hover:scale-[1.3]'>
    <figcaption class="pt-4 text-center text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400 font-inter">tokyo bay nether portal
      <br>
      by <img src="https://cdn.discordapp.com/avatars/641637887510708224/1da840532c1ce655138aee8ed50953ad.png?size=4096" class="h-6 w-6 inline-block rounded-full"> alen
    </figcaption>
  </figure>
  <figure>
    <img src="../assets/screenshots/slavesociety.png"  class='h-56 w-auto rounded-xl grayscale transition hover:grayscale-0 delay-200 hover:scale-[1.3]'>
    <figcaption class="pt-4 text-center text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400 font-inter">slave society / razin's trading center 
      <br>
      by <img src="https://images-ext-2.discordapp.net/external/gLuf7CZkoXYResO6jDOdGI9sfx9pvplKR_z8YqvWlog/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/810506132346896395/bd7fe4ed74394b5280b1e255a4adfc74.png" class="h-6 w-6 inline-block rounded-full"> razin
    </figcaption>
  </figure>
  </div>

  <div class="px-4 py-8 mx-auto max-w-screen-xl flex basis-2 justify-evenly gap-12">
    <figure>
    <img src="../assets/screenshots/storage.png"  class='h-56 w-auto rounded-xl grayscale transition hover:grayscale-0 delay-200 hover:scale-[1.3]'>
    <figcaption class="pt-4 text-center text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400 font-inter"> rakeeb's storage area
      <br>
      by <img src="https://images-ext-2.discordapp.net/external/qthHGo4kdBaiohW9WW7Oe8tbpcTMeU5PQxZ71_6c5fg/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/641608170153836555/e5766147abdff7fc54196ec309bd7ca3.png?width=676&height=676" class="h-6 w-6 inline-block rounded-full"> rakeeb
    </figcaption>
  </figure>

  <figure>
    <img src="../assets/screenshots/icepathway.png"  class='h-56 w-auto rounded-xl grayscale transition hover:grayscale-0 delay-200 hover:scale-[1.3]'>
    <figcaption class="pt-4 text-center text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400 font-inter"> ice pathway (3k+ blocks)
      <br>
      by <img src="/src/assets/players/spree.png" class="h-6 w-6 inline-block rounded-full"> spree & <img src="../assets/players/whip.png" alt="" class="h-6 w-6 inline-block rounded-full"> whip
    </figcaption>
  </figure>
  <figure>
    <img src="../assets/screenshots/spreesheepfarm.png"  class='h-56 w-auto rounded-xl grayscale transition hover:grayscale-0 delay-200 hover:scale-[1.3]'>
    <figcaption class="pt-4 text-center text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400 font-inter"> sheep farm w/ trading center
      <br>
      by <img src="/src/assets/players/spree.png" class="h-6 w-6 inline-block rounded-full"> spree
    </figcaption>
  </figure>
  </div>
  <p class="font-light text-gray-500 lg:mb-2 sm:text-xl dark:text-gray-400 font-inter text-center">..and much more useless stuff that we've decided not to put on the site.</p>
  <p class="font-light text-gray-500 lg:mb-16 dark:text-gray-400 font-inter text-center text-sm">for the members: want your build to be here? build some cool shit then.</p>


  <div class="px-4 mx-auto max-w-screen-xl sm:pt-12 pb-4 lg:px-6">
    <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white font-inter">Projects</h2>
          <p class="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400 font-inter">These are some work-in-progress projects that we want you to see.</p>
      </div> 
      <div class="px-4 py-8 mx-auto max-w-screen-xl flex basis-2 justify-evenly gap-12">
        <figure>
    <img src="../assets/screenshots/glassdome.png"  class='h-56 w-auto rounded-xl inline-block grayscale transition hover:grayscale-0 delay-200 hover:scale-[1.3]'>
    <figcaption class="pt-4  text-white lg:mb-16 sm:text-xl dark:text-gray-100 font-inter font-semibold ">glass dome
      <br>
      <span class="text-gray-400 font-normal"> by <img src='https://images-ext-2.discordapp.net/external/qthHGo4kdBaiohW9WW7Oe8tbpcTMeU5PQxZ71_6c5fg/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/641608170153836555/e5766147abdff7fc54196ec309bd7ca3.png?width=676&height=676' class="h-6 w-6 inline-block rounded-full"> rakeeb, this glass dome will <br> cover the whole base. we smelted 20k+ <br> blocks of glass just for this project. <br> it's partially done and it needs its roof <br> to be covered. </span>
    </figcaption>
  </figure>
  <figure>
    <img src="../assets/screenshots/tokyobay.png"  class='h-56 w-auto rounded-xl inline-block grayscale transition hover:grayscale-0 delay-200 hover:scale-[1.3]'>
    <figcaption class="pt-4 lg:mb-16 sm:text-xl dark:text-gray-100 font-inter font-semibold ">tokyo bay
      <br>
     <span class="text-gray-400 font-normal"> by <img src="https://cdn.discordapp.com/avatars/641637887510708224/1da840532c1ce655138aee8ed50953ad.png?size=4096" class="h-6 w-6 inline-block rounded-full"> alen, this is a <i>very secret</i> japanese <br> themed alternative base that will <br> consist of a city named "tokyo bay". <br>
     <InlineSpree /> and <InlineWhip /> have contributed <br> and are currently the other inhabitants <br> of the base.
    </span>
    </figcaption>
  </figure>
      </div>  
    </div>
    <div class="flex justify-center">
    <p class="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400 font-inter text-center max-w-2xl">Our server has been running since May 2021 (1.16.5) and this is the progress we've made. We're currently playing on 1.19.4 and we're trying to grind as much as we can. We hope we can impress you even more with our future projects. </p>
  </div>
  <div class="flex justify-center font-inter">
   <a href="">
<button type="button" class="text-white bg-[#46204f] hover:bg-[#381840] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 mr-2 mb-2 dark:bg-[#46204f] dark:hover:bg-[#381840]/1.5 focus:outline-none dark:focus:ring-blue-800 text-sm">Feeling lucky? View a random player's profile!</button>
</a>
</div>
<Footer />
</template>

<script>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

import playerData from '../assets/json/players.json';

import Navbar from '../components/Navbar.vue';
import DangerNotification from '../components/DangerNotification.vue';
import Footer from '../components/Footer.vue';
import LandingPlayer from '../components/LandingPlayer.vue';
import InlineAlen from '../components/InlineAlen.vue';
import InlineSpree from '../components/InlineSpree.vue';
import InlineWhip from '../components/InlineWhip.vue';

export default {
    name: 'Home',
    components: {
        Navbar,
        DangerNotification,
        Footer,
        LandingPlayer,
        InlineAlen,
        InlineSpree,
        InlineWhip
    },
    data() {
      return {
        serverStatus: null,
        isPlayerListVisible: false,
        concurrentPlayers: null,
        players: playerData
        
      };
    },    
    methods: {
      async fetchData() {      
        const response = await fetch("https://api.mcsrvstat.us/2/yeet.minecra.fr");      
        const res = await response.json();
        this.serverStatus = res.online
        // this.concurrentPlayers = res.players.list;
        
        
      },    
    },
    showPlayers() {
      this.isPlayerListVisible = true;
      document.querySelector('playerlist').classList.removed('hidden')

    },
    mounted() {
      this.fetchData();
    },
}

onMounted(() => {
    initFlowbite();
})

</script>

<style>
body {
    background: radial-gradient(55.7% 88.6% at 21.5% 50%,#34103d 0%,#1d1d1d 100%);

}
</style>