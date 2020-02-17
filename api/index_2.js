const express = require("express");

// Create express instance
const app = express();
var fs = require( "fs")
import html2canvas from "html2canvas";
import canvas2pdf from "canvas2pdf";
var blobStream = require("blob-stream");
var PDFDocument = require("pdfkit");


// Import API Routes
app.post("/",function(req, res, next) {
    res.send("HelloWorld");
  
    //Create a new PDF canvas context.
    var ctx = new canvas2pdf.PdfContext(blobStream());

    // more canvas drawing, etc...
    ctx.putImageData(req.query.htmlData.getContext("2d"));

    //convert your PDF to a Blob and save to file
    ctx.stream.on("finish", function() {
      var blob = ctx.stream.toBlob("application/pdf");
      res.send("HelloWorld");

      //saveAs(blob, this.editorTitle + ".pdf", true);
    });
    ctx.end();
  
});

// Export the server middleware
module.exports = {
  path: "/api/index",
  handler: app
};
