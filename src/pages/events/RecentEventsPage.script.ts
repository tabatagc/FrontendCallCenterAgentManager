import { ref, onMounted } from 'vue';
import { api } from 'boot/axios';
import { EventRow } from 'src/models/EventRow';

export default {
  setup() {
    const events = ref<EventRow[]>([]);
    const loading = ref(true);

    const columns = [
      {
        name: 'eventId',
        required: true,
        label: 'ID',
        align: 'left',
        field: (row: EventRow) => row.eventId,
        sortable: true,
      },
      {
        name: 'agentName',
        label: 'Agent',
        align: 'left',
        field: (row: EventRow) => row.agentName,
        sortable: true,
      },
      {
        name: 'action',
        label: 'Action',
        align: 'left',
        field: (row: EventRow) => row.action,
        sortable: true,
      },
      {
        name: 'timestamp',
        label: 'Timestamp',
        align: 'left',
        field: (row: EventRow) => row.timestamp,
        sortable: true,
      },
    ];

    const fetchEvents = async () => {
      try {
        const response = await api.get('/events/recent');
        events.value = response.data;
      } catch (error) {
        console.error('Failed to fetch recent events:', error);
      } finally {
        loading.value = false;
      }
    };

    onMounted(() => {
      fetchEvents();
    });

    return {
      events,
      loading,
      columns,
    };
  },
};
