import { useStore } from 'vuex';
import { computed } from 'vue';

export function mapState() {
  const store = useStore();
  return Object.fromEntries(
    Object.keys(store.state).map((key) => {
      return [key, computed(() => store.state[key])];
    }),
  );
}

export function mapGetters() {
  const store = useStore();
  return Object.fromEntries(
    Object.keys(store.getters).map((getter) => [
      getter,
      computed(() => store.getters[getter]),
    ]),
  );
}
export function mapMutations() {
  const store = useStore();
  return Object.fromEntries(
    Object.keys(store._mutations).map((mutation) => [
      mutation,
      (value) => store.commit(mutation, value),
    ]),
  );
}
export function mapActions() {
  const store = useStore();
  return Object.fromEntries(
    Object.keys(store._actions).map((action) => [
      action,
      (value) => store.dispatch(action, value),
    ]),
  );
}
