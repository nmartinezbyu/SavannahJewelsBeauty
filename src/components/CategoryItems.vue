<template>
  <div class="flex-row text-left w-100 bg-white shadow">
    <h4 class="pl-4 my-2 py-2 hover:bg-light-gray">
      <span class="cursor-pointer" v-if="open" v-on:click="toggle(false)"><ChevronDown /></span>
      <span class="cursor-pointer" v-else v-on:click="toggle(true)"><ChevronRight /></span>
      {{category}}
      <span class="cursor-pointer" v-on:click="showAddModal = true"><PlusCircle class="hover:color-success"/></span>
    </h4>
    <div v-if="open">
      <div v-for="item in items" :key="item._id">
        
        <div v-if="editId == item._id" class="d-flex hover:bg-light-gray flex-row align-items-center justify-content-around">
          <input v-model="itemToEdit.name" />
          <img class="flex-col" :src="item.image" height="48" width="48"/>
          <div>Full Price: $<input v-model="itemToEdit.fullPrice" /></div>
          <div>Fill Price: $<input v-model="itemToEdit.fillPrice" /></div>
          <div class="d-inline-flex">
            <div v-on:click="onSave" class="cursor-pointer hover:color-success">
              <CheckBadge />
            </div>
            <div v-on:click="onCancel(item)" class="cursor-pointer hover:color-warning">
              <XIcon />
            </div>
            <div class="flex-col cursor-pointer hover:color-danger" v-on:click="onDelete(item._id)">
              <TrashIcon />
            </div>
          </div>
        </div>
        
        <div v-else class="d-flex hover:bg-light-gray flex-row align-items-center justify-content-around">
          <div>{{item.name}}</div>
          <img :src="item.image" height="48" width="48"/>
          <div>Full Price: ${{item.fullPrice}}</div>
          <div>Fill Price: ${{item.fillPrice}}</div>
          <div class="d-inline-flex">
            <div class="flex-col cursor-pointer hover:color-warning" v-on:click="onEdit(item)">
              <PencilIcon />
            </div>
            <div class="flex-col cursor-pointer hover:color-danger" v-on:click="onDelete(item._id)">
              <TrashIcon />
            </div>
          </div>
        </div>

      </div>
    </div>
    <Modal :showing="showAddModal" @close="showAddModal = false">
      <form v-on:submit="onAdd">
        <div class="form-group">
          <label>Name</label>
          <input class="form-control" v-model="itemToAdd.name" placeholder="Name"/>
        </div>
        <div class="form-group">
          <label>Image</label>
          <input type="file" class="form-control" name="photo" @change="imageChanged">
        </div>
        <div class="form-group">
          <label>Full Price</label>
          <input class="form-control" v-model="itemToAdd.fullPrice" placeholder="Full Price" type="number" min=0/>
        </div>
        <div class="form-group">
          <label>Fill Price</label>
          <input class="form-control" v-model="itemToAdd.fillPrice" placeholder="Fill Price" type="number" min=0/>
        </div>
        <button type="submit" class="btn btn-success btn-lg w-100 p-2 my-3">ADD</button>
      </form>
    </Modal>
  </div>
</template>

<script>
import ChevronDown from '../assets/svg/ChevronDown.vue';
import ChevronRight from '../assets/svg/ChevronRight.vue';
import TrashIcon from '../assets/svg/TrashIcon.vue';
import PlusCircle from '../assets/svg/PlusCircle.vue';
import PencilIcon from '../assets/svg/PencilIcon.vue';
import CheckBadge from '../assets/svg/CheckBadge.vue';
import XIcon from '../assets/svg/XIcon.vue';
import Modal from '../components/Modal.vue';
import axios from 'axios';

export default {
  name: 'CategoryItems',
  components: {
    ChevronDown,
    ChevronRight,
    TrashIcon,
    PlusCircle,
    PencilIcon,
    CheckBadge,
    XIcon,
    Modal
  },
  props: {
    category: String,
    items: Array,
    onSelect: Function
  },
  data() {
    return {
      open: false,
      editId: null,
      editTitle: '',
      showAddModal: false,
      image: null,
      itemToAdd: {
        name: "",
        image: "",
        fullPrice: 0,
        fillPrice: 0,
        type: this.category
      },
      itemToEdit: {
        name: "",
        image: "",
        fullPrice: 0,
        fillPrice: 0,
        type: this.category
      },
      itemIfCanceled: {
        name: "",
        image: "",
        fullPrice: 0,
        fillPrice: 0,
        type: this.category
      }
    }
  },
  methods: {
    toggle: function(open) {
      this.open = open;
    },
    async getLashes() {
      try {
        let response = await axios.get("http://localhost:3001/lashes");
        this.$root.$data.lashes = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    onAdd: async function(event) {
      event.preventDefault();
      try {
        const formData = new FormData();
        formData.append('photo', this.image, this.image.name)
        let r1 = await axios.post('http://localhost:3001/lashes/photos', formData);
        //Don't know if we are adding the rest of the details by here
        //Also should we get rid of the Id in the schema.
        this.itemToAdd.image = r1.data.path;
        let r2 = await axios.post('http://localhost:3001/lashes', this.itemToAdd);
        this.addItem = r2.data;
        this.getLashes();
        this.showAddModal = false;
      } catch (error) {
        console.error(error);
      }
    },
    onEdit: function(item) {
      this.editId = item._id;
      this.itemToEdit = Object.assign({}, item);
      this.itemIfCanceled = JSON.parse(JSON.stringify(item))
    },
    onSave: async function() {
      try {
        await axios.put(`http://localhost:3001/lashes/${this.itemToEdit._id}`, this.itemToEdit);
        this.editId = null;
        this.getLashes();
      } catch (error) {
        console.error(error);
      }
    },
    onCancel: function(item) {
      this.editId = null;
      item = JSON.parse(JSON.stringify(this.itemIfCanceled))
      this.itemToEdit = Object.assign({}, item);
    },
    onDelete: async function(id) {
      try {
        await axios.delete(`http://localhost:3001/lashes/${id}`);
        this.getLashes();
      } catch (error) {
        console.error(error);
      }
    },
    imageChanged(event) {
      this.image = event.target.files[0]
    },
  }
}
</script>

<style>
.cursor-pointer {
  cursor: pointer;
}
.hover\:color-success:hover {
  color: var(--success);
}
.hover\:color-danger:hover {
  color: var(--danger);
}
.hover\:color-warning:hover {
  color: var(--warning);
}
</style>