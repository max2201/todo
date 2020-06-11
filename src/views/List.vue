<template>
    <div>
<h1>List</h1>
      <hr>

<!--      <v-data-table v-if="tasks.length"-->
<!--        :headers="headers"-->
<!--        :items="tasks"-->
<!--        :items-per-page="5"-->
<!--      >-->
<!--        <template v-slot:item.actions="{ item }">-->
<!--          <v-icon-->
<!--            small-->
<!--            class="mr-2"-->
<!--            @click="editItem(item)"-->
<!--          >-->
<!--            mdi-pencil-->
<!--          </v-icon>-->
<!--          <v-icon-->
<!--            small-->
<!--            @click="deleteItem(item)"-->
<!--          >-->
<!--            mdi-delete-->
<!--          </v-icon>-->
<!--        </template>-->
<!--      </v-data-table>-->
<!--      <p v-else>No tasks</p>-->


<!--<v-simple-table>-->
<!--  <thead>-->
<!--  <tr>-->
<!--    <th>#</th>-->
<!--    <th>Title</th>-->
<!--    <th>Date</th>-->
<!--    <th>Description</th>-->
<!--    <th>Status</th>-->
<!--    <th>Open</th>-->
<!--  </tr>-->
<!--  </thead>-->
<!--  <tbody>-->
<!--<tr v-for="(task, idx) of tasks"-->
<!--:key="task.id"-->
<!--&gt;-->
<!--  <td>{{idx+1}}</td>-->
<!--  <td>{{task.title}}</td>-->
<!--  <td>{{task.date}}</td>-->
<!--  <td><div>{{task.description}}</div></td>-->
<!--  <td>{{task.status}}</td>-->
<!--  <td><v-btn to="'/task/' + task.id">Open</v-btn></td>-->
<!--</tr>-->
<!--  </tbody>-->
<!--</v-simple-table>-->

      <v-data-table
        :headers="headers"
        :items="tasks"
      >
          <template v-slot:item.actions="{item}">
          <v-btn :to="/task/+ item.id">Open</v-btn>
          </template>
        <template v-slot:item.description="{item}">
          <div class="text">{{item.description}}</div>
        </template>
        <template v-slot:no-data>
          <p>No tasks</p>
        </template>
      </v-data-table>
</div>
</template>

<script>
export default {
  data: () => ({
    headers: [
      { text: '#', value: 'id' },
      { text: 'Title', value: 'title' },
      { text: 'Date', value: 'date' },
      { text: 'Description', value: 'description' },
      { text: 'Status', value: 'status' },
      { text: 'Open', value: 'actions', sortable: false },
    ],
  }),
  computed: {
    tasks() {
      return this.$store.getters.tasks;
    },
  },
};
</script>

<style scoped>
.text{
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 400px;
  }
</style>
