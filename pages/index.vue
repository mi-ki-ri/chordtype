<template>
  <b-container>
    <b-container tag="header" class="header" fluid>
      <b-row>
        <b-col>
          &nbsp;
        </b-col>
        <b-col>
          <h1 class="text-center text-white">
            ChordType
          </h1>
        </b-col>
        <b-col class="btnCol">
          <b-button @click="download">
            DL
          </b-button>
        </b-col>
      </b-row>
    </b-container>
    <b-container fluid>
      <b-row>
        <b-col class="editorArea m-2">
          <b-input type="text" v-model="editorTitle" />
          <b-textarea v-model="editorText" class="editor"> </b-textarea>
        </b-col>
        <b-col class="visualArea m-2">
          <b-container id="visual">
            <b-row>
              <b-col>
                <h2 class="text-center">
                  {{ editorTitle }}
                </h2>
              </b-col>
            </b-row>
            <b-row :key="index" v-for="(line, index) of formattedObj">
              <b-col class="bar" :key="bindex" v-for="(bar, bindex) of line">
                <b-row class="chords">
                  <b-col
                    class="chord"
                    :key="cindex"
                    v-for="(ch, cindex) of bar.chords"
                  >
                    {{ ch ? ch : "&nbsp;" }}
                  </b-col>
                </b-row>
                <b-row class="lyric">
                  <b-col
                    class="lyric-sentence"
                    :key="lindex"
                    v-for="(ly, lindex) of bar.lyric"
                  >
                    {{ ly ? ly : "&nbsp;" }}
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </b-container>
        </b-col>
      </b-row>
    </b-container>
  </b-container>
</template>

<script>
import html2canvas from "html2canvas";
import axios from "axios";

export default {
  data() {
    return {
      editorText: "",
      editorTitle: ""
    };
  },
  computed: {
    formattedObj() {
      var splitted = this.editorText.split("\n\n");
      let answerObj = [];

      var splitted = splitted.length == 0 ? [this.editorText] : splitted;

      splitted.forEach((elm, index, array) => {
        console.log("elm", elm);
        let lineObj = [];

        let chordsAndLyric = elm.split("\n");
        let chords = chordsAndLyric[0];
        let lyric = chordsAndLyric[1];

        let splittedChords =
          typeof chords != "undefined" ? chords.split("|") : [chords];
        let splittedLyric =
          typeof lyric != "undefined" ? lyric.split("|") : [lyric];

        console.log("spltdchrd", splittedChords);
        let bars = Math.max(splittedChords.length, splittedLyric.length);
        console.log("bars", bars);

        for (var i = 0; i < bars; i++) {
          let nonnullChords =
            typeof splittedChords[i] != "undefined" ? splittedChords[i] : "";
          let splittedBarChords = nonnullChords.split(",");

          let nonnullLyric =
            typeof splittedLyric[i] != "undefined" ? splittedLyric[i] : "";
          let splittedBarLyric = nonnullLyric.split(",");

          let conmma = Math.max(splittedBarChords.length, splittedBarLyric.length)
          let finalChords = []
          let finalLyric = []
          for( var j = 0; j < conmma; j++ ){
            finalChords.push( typeof splittedBarChords[j] != "undefined" ? splittedBarChords[j] : "" )
            finalLyric.push( typeof splittedBarLyric[j] != "undefined" ? splittedBarLyric[j] : "" )
          }


          lineObj.push({
            chords: finalChords,
            lyric: finalLyric
          });
        }
        answerObj.push(lineObj);
      });
      console.log(answerObj);
      return answerObj;
    }
  },
  methods: {
    download() {
      html2canvas(document.querySelector("#visual")).then(canvas => {
        let link = document.createElement("a");
        
        link.href = canvas.toDataURL("image/png");
        link.download = "test.png";
        link.click();
      });
    }
  }
};
</script>

<style scoped>
.header {
  background-color: var(--cyan);
  height: 10vh;
}
.editor,
.visualArea{
  width: 100%;
  height: 88vh;
  border: 1px solid #ccc;
}

#visual{
  width: 600px;
  max-width: 600px;
  min-height: 800px;
}

.bar {
  border-right: #ccc 1px solid;
}
.bar:last-of-type {
  border-right: none;
}
.chords {
  color: var(--gray);
  margin-bottom: 0.1rem;
  line-height: 1;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}
.chord {
  flex-grow: 1;
  text-align: left;
}
.lyric {
  color: var(--dark);
  margin-bottom: 0.5rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}
.lyric-sentence {
  flex-grow: 1;
  text-align: left;
}
.btnCol {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
</style>
