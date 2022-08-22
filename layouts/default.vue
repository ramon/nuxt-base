<script setup lang="ts"></script>

<template>
  <div id="app">
    <Head>
      <Title />
      <Link href="/favicon.svg" rel="icon" type="image/svg+xml" />
      <Link href="/favicon.png" rel="icon" type="image/png" />
    </Head>

    <Body class="antialiased" />
    <header>
      <slot name="header" />
    </header>
    <main role="main">
      <slot />
    </main>
    <footer>
      <slot name="footer" />
    </footer>
  </div>
</template>
