import { ref, onMounted } from 'vue';
import { api } from 'boot/axios';
import { useRoute, useRouter } from 'vue-router';
import { Queue } from 'src/models/Queue';

const queue = ref<Queue>({
    queueId: '',
    queueName: '',
  });
const route = useRoute();
const router = useRouter();
const isEdit = ref(false);

const loadQueue = async () => {
  const { id } = route.params;
  if (id) {
    isEdit.value = true;
    try {
      const response = await api.get(`/queues/${id}`);
      queue.value = response.data;
    } catch (error) {
      console.error('Error fetching queue details', error);
    }
  }
};

const saveQueue = async () => {
  try {
    if (isEdit.value) {
      await api.put(`/queues/${queue.value.queueId}`, queue.value);
    } else {
      await api.post('/queues', queue.value);
    }
    router.push('/queues');
  } catch (error) {
    console.error('Error saving queue', error);
  }
};

onMounted(loadQueue);
