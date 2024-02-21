<template>
    <header>
      <router-link to="/">
        <h1>New web</h1>
      </router-link>
    </header>
    <main>    
      <router-view/>
    </main>
</template>
<style>
 h1 {
    text-align: center;
 }
 body {
    background-color: burlywood;
 }
</style>