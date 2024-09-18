<template>
  <q-page>
    <q-card>
      <q-card-section>
        <div class="text-h6">
          {{ isEdit ? 'Edit Queue' : 'Create New Queue' }}
        </div>
      </q-card-section>

      <q-card-section>
        <q-input v-model="queue.queueName" label="Queue Name" />
      </q-card-section>

      <q-card-actions align="right">
        <q-btn color="primary" label="Save" @click="saveQueue" />
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script src="./QueueForm.script.ts"></script>
