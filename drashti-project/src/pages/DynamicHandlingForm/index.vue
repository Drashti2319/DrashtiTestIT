<template>
  <div class="form-container">
    <div v-for="(block, index) in blocks" :key="index" class="form-group">
      <label v-if="block.props.title" :for="block.token">{{ block.props.title }}</label>
      <input
        :type="block.type"
        :id="block.token"
        :placeholder="block.props.placeholder"
        v-model="formData[block.token]"
        :required="block.props.required"
      />
      <br />
    </div>

    <div class="button-container">
      <button @click="submitForm" :disabled="!isFormValid" style="margin-right: 4px">Submit</button>
      <button @click="resetForm">Reset</button>
    </div>
  </div>
</template>

<script>
import blocksData from '@/utils/blocks.json'
export default {
  data() {
    return {
      blocks: blocksData,
      formData: {}
    }
  },
  methods: {
    resetForm() {
      this.formData = {}
    },
    submitForm() {
      if (this.validateForm()) {
        alert('Form submitted successfully!')
        this.formData = {}
      }
    },
    validateForm() {
      let isValid = true
      this.blocks.forEach((block) => {
        if (block.props.required) {
          if (!this.formData[block.token]) {
            isValid = false
            alert(`${block.props.title} is required.`)
            return
          }
          if (block.token === 'PERSON_DOB' && this.formData['IS_PERSON_MINOR']) {
            if (!this.formData[block.token]) {
              isValid = false
              alert('DOB is required for minors.')
              return
            }
          }
        }
      })
      return isValid
    }
  },
  computed: {
    isFormValid() {
      return this.blocks.every((block) => !block.props.required || !!this.formData[block.token])
    }
  },
  watch: {
    'formData.IS_PERSON_MINOR'(newVal) {
      this.blocks.find((block) => block.token === 'PERSON_DOB').props.required = newVal
    }
  }
}
</script>


<style scoped>
.form-container {
  max-width: 400px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  font-weight: bold;
}

input[type='text'],
input[type='date'],
button {
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

button {
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
}
.button-container {
  display: flex;
  justify-content: space-between;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>