<template>
    <q-page>
      <q-table
        :rows="events"
        :columns="columns"
        row-key="eventId"
        :loading="loading"
      />
    </q-page>
  </template>
  
  <script src="./RecentEventsPage.script.ts"></script>
  