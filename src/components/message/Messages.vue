<template>
  <div class="message-warp">
    <div class="explan">
      本博客是一个技术分享的平台，如需要与本人联系，请写下您的联系方式，我会在收到您的留言后第一时间与您联系，感谢您的支持。
    </div>
    <textarea cols="30" rows="10" v-model="info" class="info"></textarea>
    <div class="sub">
      <button @click="submit">提交</button>
    </div>
  </div>
</template>

<script>
  import cons from '@/components/constant'

  export default {
    name: 'Messages',
    data () {
      return {
        info: ''
      }
    },
    methods: {
      submit () {
        if (!this.info) {
          alert('请输入留言信息')
        } else {
          this.axios.post(cons.apis + '/blog/message/', {'body': this.info, 'create_date': new Date()}, {
            headers: {
              'Authorization': '123'
            },
            responseType: 'json',
          })
            .then(dat => {
              alert('您的留言提交成功，谢谢您的支持！')
              this.info = ''
            }).catch(err => {
            console.log(err.response)
          })
        }
      },
    },
  }
</script>

<style scoped>
  .message-warp {
    width: 100%;
    min-height: 100%;
    background-color: white;
  }

  .message-warp .explan {
    font-size: 16px;
    margin: 10px 10px;
  }

  .message-warp .info {
    margin: 5px 10px;
    display: block;
    resize: vertical;
    padding: 5px 15px;
    line-height: 1.5;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 80%;
    font-size: inherit;
    color: #606266;
    background-color: #FFF;
    background-image: none;
    border: 1px solid #DCDFE6;
    border-radius: 4px;
    -webkit-transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
    transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
  }

  .sub button {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    border: 1px solid #67C23A;
    -webkit-appearance: none;
    text-align: center;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    outline: 0;
    -webkit-transition: .1s;
    transition: .1s;
    font-weight: 500;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
    color: #FFF;
    background-color: #67C23A;
    margin: 10px 0 20px 10px;
  }
</style>
