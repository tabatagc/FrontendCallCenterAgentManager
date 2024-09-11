import { ref, onMounted } from 'vue';
import { api } from 'boot/axios';
import { useRoute, useRouter } from 'vue-router';
import { Agent } from 'src/models/Agent';

const agent = ref<Agent>({
  agentId: '',
  agentName: '',
  email: '',
});

const route = useRoute();
const router = useRouter();

const loadAgent = async () => {
  const { id } = route.params;
  try {
    const response = await api.get(`/agents/${id}`);
    agent.value = response.data;
  } catch (error) {
    console.error('Error fetching agent details', error);
  }
};

const saveAgent = async () => {
  try {
    await api.put(`/agents/${agent.value.agentId}`, agent.value);
    router.push('/agents');
  } catch (error) {
    console.error('Error saving agent', error);
  }
};

onMounted(loadAgent);
