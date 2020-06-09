<template>
  <v-row>
    <v-col cols="12" md="6" offset="3">
      <h1>Create Task</h1>

      <v-form @submit.prevent="submitHandler">

          <v-text-field
            v-model="title"

            :counter="10"
            label="Title"
            required
          ></v-text-field>

          <v-combobox
            v-model="chips"
            :items="items"
            chips
            clearable
            label="Task tags"
            multiple
          >
            <template v-slot:selection="{ attrs, item, select, selected }">
              <v-chip
                v-bind="attrs"
                :input-value="selected"
                close
                @click="select"
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

          <v-btn type="submit">Create task</v-btn>
  </v-form>

    </v-col>
      </v-row>

</template>

<script>
// @ is an alias to /src

export default {
  name: 'Create',
  components: {
  },
  data() {
    return {
      date: new Date().toISOString().substr(0, 10),
      menu2: false,
      chips: [],
      items: [],
      title: '',
      description: '',
    };
  },

  methods: {
    submitHandler() {
      const task = {
        title: this.title,
        description: this.description,
        id: Date.now(),
        status: 'active',
        tags: this.chips,
        date: this.date,
      };
      console.log(task);
      this.$store.dispatch('createTask', task);
      this.$router.push('/list');
    },
    remove(item) {
      this.chips.splice(this.chips.indexOf(item), 1);
      this.chips = [...this.chips];
    },
  },
};
</script>
