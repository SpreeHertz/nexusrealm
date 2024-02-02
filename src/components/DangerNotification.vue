<template>
      <div id="stickyBanner" tabindex="-1" class="fixed top-0 left-0 z-50 flex justify-between w-full p-4 border-b border-gray-200 bg-gray-50 dark:bg-[#c24444] dark:border-gray-600">
    <div class="flex items-center mx-auto">
        <p class="flex items-center text-sm font-normal text-white dark:text-gray-400">
   
            

              
            <span class="font-inter text-white"><span class="font-semibold font-inter">{{ title }} •</span> {{  description }}</span>
        </p>
    </div>
    <div class="flex items-center">
        <button @click="closeNotification()" id="triggerElement" type="button" class="flex-shrink-0 inline-flex justify-center items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white">
            <svg aria-hidden="true" class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            <span class="sr-only">Close banner</span>
        </button>
    </div>
</div>
</template>

<script>
import { Dismiss } from 'flowbite';

export default {
    name: "DangerNotification",
    props: ['title', 'description'],
    data() {
        return {
          methods: {
            closeNotification() {
                const $targetEl = document.getElementById('stickyBanner');
                const $triggerEl = document.getElementById('triggerElement');
                const options = {
                    transition: 'transition-opacity',
                    duration: 1000,
                    timing: 'ease-out',

                    onHide: (context, targetEl) => {
                        console.log('element has been dismissed')
                        console.log(targetEl)
                    }
            };
                const dismiss = new Dismiss($targetEl, $triggerEl, options);
                $triggerEl.addEventListener('click', () => dismiss.hide());
            }
          }
        }
    }
   
   
}
</script>