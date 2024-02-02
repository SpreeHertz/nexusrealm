<template>
     <div class="flex flex-col mt-4">
      <img :src="avatar" class="w-40 w-42 rounded-lg">
      <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white font-inter pt-2">{{  playername }}</h3>
      <span class="text-gray-500 dark:text-gray-400 font-inter">{{  role }}</span>
      </div>
</template>

<script>
export default {
    name: 'LandingPlayer',
    props: ['avatar', 'playername', 'role']
}
</script>