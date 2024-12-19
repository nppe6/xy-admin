<script setup lang="ts">
import validate from '@/plugins/validate'
const { Form, Field, ErrorMessage } = validate

const Schema = validate.yup.object({
  account: validate.yup.string().required().email().label('邮箱')
})

const onSubmit = (values) => {
  console.log(values)
}
</script>

<template>
  <div class="h-screen bg-slate-500 flex justify-center items-center">
    <Form
      @submit="onSubmit"
      :validation-schema="Schema">
      <Field
        name="account"
        label="邮箱"
        :rules="{ email: true, required: true }"
        :validate-on-input="true">
      </Field>
      <ErrorMessage name="account"></ErrorMessage>
      <!-- <input type="text" /> -->
      <button class="border bg-green-500 px-4 rounded-md text-white">
        提交
      </button>
    </Form>
  </div>
</template>

<style lang="scss" scoped>
input {
  @apply border-4 p-2 rounded-md focus:border-green-500 outline-none;
}
</style>
