import { ref, onMounted } from 'vue';
import { api } from 'boot/axios';
import { Queue } from 'src/models/Queue';

export default {
  setup() {
    const queues = ref<Queue[]>([]);
    const loading = ref(true);

    const columns = [
      {
        name: 'queueId',
        required: true,
        label: 'ID',
        align: 'left',
        field: (row: Queue) => row.queueId,
        sortable: true,
      },
      {
        name: 'queueName',
        label: 'Queue Name',
        align: 'left',
        field: (row: Queue) => row.queueName,
        sortable: true,
      },
    ];

    const fetchQueues = async () => {
      try {
        const response = await api.get('/queues');
        queues.value = response.data;
      } catch (error) {
        console.error('Failed to fetch queues:', error);
      } finally {
        loading.value = false;
      }
    };

    const createQueue = () => {};

    onMounted(() => {
      fetchQueues();
    });

    return {
      queues,
      loading,
      columns,
      createQueue,
    };
  },
};
