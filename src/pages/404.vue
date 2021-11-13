<template>
  <div class="min-h-screen flex items-center text-gray-500">
    <div class="container mx-auto md:w-7/12 p-4 flex flex-wrap items-center rounded shadow bg-white">
      <div class="w-full text-center md:text-left p-4">
        <div class="text-6xl font-medium text-violet-500">
          404
        </div>
        <div class="text-xl md:text-3xl font-medium mb-4">
          Oops. Cette page n'existe pas.
        </div>
        <div class="text-lg mb-8">
          Vous avez surrement fait une faute de frape, ou bien cette page a récemment été déplacée.
        </div>
        <router-link
          to="/"
          class="bg-violet-500 rounded-lg p-4 shadow text-white"
        >
          Accueil
        </router-link>
      </div>
    </div>
  </div>
</template>
