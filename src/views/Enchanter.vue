
<template>
<main class="parent">
  <nav class="px-2 sm:px-4 py-2.5 rounded" >
  <div class="container flex flex-wrap items-center justify-between mx-auto">
    <router-link to="/">
      <a class="self-center text-xl font-semibold whitespace-nowrap dark:text-white font-inter">yeet</a>
    </router-link>
      <div class="flex md:order-2">

<!-- responsive -->
      <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
  </div>
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
    <ul class="font-inter mr-12 text-center flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  bg-transparent dark:border-gray-700">
      <li>
        <router-link to="/">
        <a class="block py-2 pl-3 pr-4 text-gray-700 font-semibold rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">home
        </a>
      </router-link>
      </li>
     
      <li>
        <router-link to="/enchanter">
        <a class="block py-2 pl-3 pr-4 text-gray-700 font-semibold rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">enchanter</a>
      </router-link>
      </li>
    </ul>
  </div>
   </div>
</nav>

  <div class="pt-72 flex justify-center">
    <img class="h-20 w-20 rounded-lg" src="https://images-ext-2.discordapp.net/external/0ttTpmj3auExd4JZKgPFtq77utcrYIjxfxaTzeBI9Es/%3Fsize%3D4096/https/cdn.discordapp.com/icons/711095894229123093/f5af914bdfc0c37848f40e32fc2bc0b9.png" alt="yeet-logo">
   <h1 class="text-6xl font-bold text-slate-200 font-inter text-center pl-2 pt-4">
    YeetSMP Enchanter
  </h1>
  
  </div>
 <div class="flex pt-2 justify-center">
  <p class="text-center font-inter text-slate-300 pt-2 font-medium">Hello Yeet SMP member! What enchantment are you looking for?</p>
 </div>
 <form class="flex items-center justify-center pt-4">   
    <label for="simple-search" class="sr-only font-inter">Search</label>
    <div class="relative  w-72">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
        </div>
        <input type="text" v-model="input" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#696969] focus:border-[#696969] block w-full pl-10 p-2.5  dark:bg-[#132c1d] border-none dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#696969] dark:focus:border-[#2b2b2r]" placeholder="Search" required>
    </div>
    
  
</form>
<div class="flex justify-center pt-4 relative item fruit"  v-for="book in filteredList()" :key="book.book">
      <p class="text-center font-inter text-slate-200 block" v-bind:class = "!input?'hidden':' '">
        <img src="../assets/enchantedbook.png" class="h-6 w-6 inline-block"><b>{{  book.book }}</b> is available at {{  book.location }} for <img src="https://freepngimg.com/save/19506-minecraft-emerald-png/620x620" alt="emerald" class="h-6 w-6 inline-block">{{  book.cost }} emeralds.</p>
    </div>
    <div class="item error" v-if="input&&!filteredList().length">
     <p class="text-center font-inter text-slate-200 block pt-6">❌ I do not know where that enchanted book is.</p>
  </div>

  <div class="text-center font-inter text-slate-500 py-96 pt-12">Enchanting data last updated:  24 April 2023 6:02 PM IST.</div>
</main>
</template>

<script setup>

import { ref } from "vue";
import enchantingData from '../assets/json/data.json';

const input = ref("");
function filteredList() {
  return enchantingData
    .filter((item) => item.book.toLowerCase().includes(input.value.toLowerCase()))
    .map((item) => ({
      book: item.book,
      location: item.location,
      cost: item.cost,
    }));
}

const listItems = ref([]);

async function getData() {
  const res = await fetch("https://api.mcsrvstat.us/2/yeet.minecra.fr");
  const finalRes = await res.json();
  listItems.value = finalRes;
 
  
  
}
getData();
</script>

<style scoped>
.parent {
 
  background: linear-gradient(58deg, rgba(2,0,36,1) 0%, rgb(25, 60, 37) 100%, rgb(108, 255, 92) 100%); 
  background-repeat: no-repeat;

}

html {
  background: linear-gradient(58deg, rgba(2,0,36,1) 0%, rgb(25, 60, 37) 100%, rgb(108, 255, 92) 100%); 
  background-repeat: no-repeat;
}

</style>