<template>
  <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
    <div class="relative py-3 sm:max-w-xl sm:mx-auto">
      <div class="absolute inset-0 bg-gradient-to-r from-violet-400 to-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl" />
      <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
        <div class="max-w-md mx-auto">
          <div>
            <h1 class="text-5xl text-gray-500">Projo</h1>
          </div>
          <div class="divide-y divide-gray-200">
            <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
              <p>L'application de scorring pour les matchs d'improvisation.</p>

              <p class="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero explicabo harum ut reiciendis saepe eos, placeat voluptates corrupti quas magni enim voluptate recusandae ullam non,
                expedita laboriosam! Voluptatibus, neque accusantium?
              </p>
            </div>
            <div class="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
              <p>
                <router-link to="/controls" class="bg-violet-500 rounded-lg p-4 shadow text-white"> Nouvelle session </router-link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
