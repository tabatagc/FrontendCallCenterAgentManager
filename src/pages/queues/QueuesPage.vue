<template>
    <q-page>
      <q-btn label="New Queue" color="primary" @click="createQueue" />
  
      <q-table
        :rows="queues"
        :columns="columns"
        row-key="queueId"
        :loading="loading"
      />
    </q-page>
  </template>
  
  <script src="./QueuesPage.script.ts"></script>
  