<template>
  <div>
    <AppSideBar />
    <div
      class="max-w-2xl px-4 py-10 m-auto bg-white sm:px-8 sm:shadow ring-1 ring-gray-200 sm:rounded-lg"
    >
      <main class="max-w-none">
        <ContentDoc>
          <template #empty>
            <h1>Oops, nothing here yet</h1>
            <NuxtLink href="/">Go back home</NuxtLink>
          </template>
          <template #not-found>
            <h1>Oops, nothing found</h1>
            <NuxtLink href="/">Go back home</NuxtLink>
          </template>
        </ContentDoc>
      </main>
    </div>
  </div>
</template>
