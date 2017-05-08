<template>
 <Col span="10">
  <Form ref="formCustom" :model="formCustom" style="margin-top: 30px"  :label-width="80">
    <Form-item label="书名"  >
      <Input  v-model="formCustom.bookName"></Input>
    </Form-item>
    <Form-item label="价格"  >
      <Input  v-model="formCustom.price"></Input>
    </Form-item>
    <Form-item label="封面"  >
      <Input  v-model="formCustom.imgUrl" ></Input>
    </Form-item>
    <Form-item>
      <Button type="primary" @click="handleSubmit(formCustom)">添加</Button>
      <Button type="ghost" @click="handleReset('formCustom')" style="margin-left: 8px">重置</Button>
    </Form-item>
  </Form>
  </Col>
</template>
<script>
  export default {
      name:'Add',
    data () {
      return {
        formCustom: {
          bookName: '',
          price: '',
          imgUrl: '',
          id:''
        }
      }
        },
    methods: {
      handleSubmit (name) {
          if (name) {
              this.$store.dispatch('addBook',name)
            this.$Message.success('提交成功!');
              this.$router.push('/list')
          } else {
            this.$Message.error('表单验证失败!');
          }

      },
      handleReset (name) {
        this.$refs[name].resetFields();
      }
    }
  }
</script>


