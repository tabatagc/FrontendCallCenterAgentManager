<template>
    <q-page>
      <q-table
        :rows="agents"
        :columns="columns"
        row-key="agentId"
        :loading="loading"
      />
    </q-page>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { api } from 'boot/axios';
  
  const agents = ref([]);
  const loading = ref(true);
  const columns = [
    { name: 'agentId', required: true, label: 'ID', align: 'left', field: row => row.agentId, sortable: true },
    { name: 'agentName', label: 'Name', align: 'left', field: row => row.agentName, sortable: true },
    { name: 'email', label: 'Email', align: 'left', field: row => row.email, sortable: true },
    { name: 'state', label: 'State', align: 'center', field: row => row.currentState, sortable: true },
    { name: 'lastActivity', label: 'Last Activity', align: 'center', field: row => row.lastActivityTimestampUtc, sortable: true },
  ];
  
  onMounted(async () => {
    try {
      const response = await api.get('/agents');
      agents.value = response.data;
    } catch (error) {
      console.error('Error fetching agents', error);
    } finally {
      loading.value = false;
    }
  });
  </script>
  