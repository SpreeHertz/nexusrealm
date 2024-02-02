<template>
    <footer class="rounded-lg shadow m-4">
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">Made by
            <router-link :to="'profile/spreehertz'" class="hover:text-gray-300">
            <img src="../assets/players/spree.png" alt="spree" class="h-6 w-6 rounded-full inline-block">
            spree </router-link> with Vue 3 + TailwindCSS. <a href="https://github.com/spreehertz/yeetsmp" class="hover:underline">View source</a> </span>
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">Last updated: Sat Jun 3 2023. </span>
</footer>

</template>

<script>
export default {
    name: "Footer"
}

</script>