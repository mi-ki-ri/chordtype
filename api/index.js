const express = require("express");
const app = express();
import canvas2pdf from "canvas2pdf";
var blobStream = require("blob-stream");

app.post("/pdf", (req, res) => {
  res.send("API server works fine");

  //Create a new PDF canvas context.
  var ctx = new canvas2pdf.PdfContext(blobStream());

  // more canvas drawing, etc...
  ctx.putImageData(req.query.htmlData.getContext("2d"));

  //convert your PDF to a Blob and save to file
  ctx.stream.on("finish", function() {
    var blob = ctx.stream.toBlob("application/pdf");
    res.send(blob;

    //saveAs(blob, this.editorTitle + ".pdf", true);
  });
  ctx.end();
});

module.exports = {
  path: "/api",
  handler: app
};
