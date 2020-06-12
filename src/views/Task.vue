<template>
  <v-row>
    <v-col v-if="task" md="6" offset="3">
      <h1>{{this.task.title}}</h1>

      <v-form @submit.prevent="submitHandler">
        <v-text-field
          v-model="title"
          :counter="100"
          label="Title"
          required
        ></v-text-field>

        <v-combobox
          v-model="chips"
          chips
          clearable
          label="Task tags"
          multiple
        >
          <template v-slot:selection="{ item }">
            <v-chip
              close
              @click:close="remove(item)"
            >
              <strong>{{ item }}</strong>&nbsp;
            </v-chip>
          </template>
        </v-combobox>

        <v-textarea
          v-model="description"
          label="Task description"
          counter
          maxlength="2048"
          auto-grow
          rows="1"
        ></v-textarea>


        <v-menu
          v-model="menu2"
          :nudge-right="150"
          transition="scale-transition"
          min-width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="date"
              label="Date"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="date" @input="menu2 = false"></v-date-picker>
        </v-menu>
        <div v-if="task.status !== 'completed'">
          <v-btn color="yellow" type="submit">Update</v-btn>
          <v-btn color="green" @click="completeTask">Complete task</v-btn>
          <v-btn color="red" type="submit">Remove</v-btn>
        </div>
      </v-form>
    </v-col>
    <p v-else>Task not found</p>
  </v-row>
</template>

<script>
export default {
  name: 'Task',
  computed: {
    task() {
      return this.$store.getters.taskById(+this.$route.params.id);
    },
  },
  data() {
    return {

      date: new Date().toISOString().substr(0, 10),
      menu2: false,
      chips: [],
      description: '',
      title: '',

    };
  },
  mounted() {
    this.description = this.task.description;
    this.title = this.task.title;
    this.chips = this.task.tags;
    this.date = this.task.date;
  },
  methods: {
    completeTask() {
      this.$store.dispatch('completeTask', this.task.id);
      this.$router.push('/list');
    },
    submitHandler() {
      this.$store.dispatch('updateTask', {
        id: this.task.id,
        title: this.title,
        description: this.description,
        date: this.date,
        chips: this.chips,
      });
      this.$router.push('/list');
    },
    remove(item) {
      this.chips.splice(this.chips.indexOf(item), 1);
      this.chips = [...this.chips];
    },
  },
};

</script>

<style scoped>

</style>
