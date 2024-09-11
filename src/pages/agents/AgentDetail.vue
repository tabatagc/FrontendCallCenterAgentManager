<template>
    <q-page>
      <q-card>
        <q-card-section>
          <div class="text-h6">Agent Details</div>
        </q-card-section>
  
        <q-card-section>
          <q-input v-model="agent.agentName" label="Agent Name" />
          <q-input v-model="agent.email" label="Email" />
        </q-card-section>
  
        <q-card-actions align="right">
            <q-btn color="primary" label="Save" @click="saveAgent" />
        </q-card-actions>

      </q-card>
    </q-page>
  </template>
  
  <script src="./AgentDetail.script.ts"></script>
  