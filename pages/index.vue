<template>
  <b-container fluid>
    <b-container tag="header" class="header" fluid>
      <b-row>
        <b-col>
          <h1 class="text-center text-white">
            ChordType
          </h1>
        </b-col>
      </b-row>
    </b-container>
    <b-container>
      <b-row>
        <b-col>
          <b-textarea
            v-model="editorText"
            class="editor m-1"
          >
          </b-textarea>
        </b-col>
        <b-col>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2100"
            height="2970"
            class="svg m-1"
          >
            <text x="0" :y="(20 * index)+ 28" :key="index" v-for="(line, index) of formatted" :font-size="line.size">
              {{line.text}}
            </text>
          </svg>
        </b-col>
      </b-row>
    </b-container>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      editorText: "",
    };
  },
  computed:{
    
    formatted(){
      let splitted = this.editorText.split("\n")
      var arrayForReturn = []

      splitted.forEach((line,index,array) =>{
        let text = line
        let size = index != 0 ? 16 : 24


        arrayForReturn.push({
          text: text,
          size: size
        })
      })
      return arrayForReturn
    }
  }
};
</script>

<style scoped>
.header {
  background-color: var(--cyan);
  height: 8vh;
}
.editor,
.canvas,
.svg {
  width: 100%;
  height: 88vh;
  border: 1px solid #ccc;
}
</style>
