import { ref, onMounted } from 'vue';
import { api } from 'boot/axios';
import { useRouter } from 'vue-router';
import { Queue } from 'src/models/Queue';

const queues = ref<Queue[]>([]);
const loading = ref(true);
const columns = [
  { name: 'queueId', required: true, label: 'ID', align: 'left', field: (row: Queue) => row.queueId, sortable: true },
  { name: 'queueName', label: 'Nome da Fila', align: 'left', field: (row: Queue) => row.queueName, sortable: true },
];
const router = useRouter();

const loadQueues = async () => {
  try {
    const response = await api.get('/queues');
    queues.value = response.data;
  } catch (error) {
    console.error('Error fetching queues', error);
  } finally {
    loading.value = false;
  }
};

const createQueue = () => {
  router.push('/queues/new');
};

onMounted(loadQueues);
