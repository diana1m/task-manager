<script setup lang="ts"></script>

<template>
  <a-config-provider
    :theme="{
      token: {
        colorPrimary: '#00b96b'
      }
    }"
  >
    <main>
      <RouterView />
    </main>
  </a-config-provider>
</template>
