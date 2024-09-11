import { ref, onMounted } from 'vue';
import { api } from 'boot/axios';
import { EventRow } from 'src/models/Event'; 

const events = ref<EventRow[]>([]);
const loading = ref(true);
const columns = [
  { name: 'eventId', required: true, label: 'ID', align: 'left', field: (row: EventRow) => row.eventId, sortable: true },
  { name: 'agentName', label: 'Agent', align: 'left', field: (row: EventRow) => row.agentName, sortable: true },
  { name: 'action', label: 'Action', align: 'left', field: (row: EventRow) => row.action, sortable: true },
  { name: 'timestamp', label: 'Timestamp', align: 'center', field: (row: EventRow) => row.timestampUtc, sortable: true },
];


const loadEvents = async () => {
  try {
    const response = await api.get('/events/recent');
    events.value = response.data;
  } catch (error) {
    console.error('Error fetching events', error);
  } finally {
    loading.value = false;
  }
};

onMounted(loadEvents);
