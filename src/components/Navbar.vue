<template>
    <nav class="px-2 sm:px-4 py-2.5 rounded  navbar yeetsmp-landing bg-transparent">
  <div class="container flex flex-wrap items-center justify-between mx-auto">
      <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white font-inter">yeet</span>
  <div class="flex md:order-2">

<!-- responsive -->
      <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
  </div>
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
    <ul class="font-inter mr-12 flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  bg-transparent dark:border-gray-700">
      <li>
        <a href="#home" class="block py-2 pl-3 pr-4 text-gray-700 font-semibold rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">home</a>
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

</template>

<script>
export default {
  name: 'Navbar'
}
</script>