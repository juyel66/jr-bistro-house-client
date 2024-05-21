import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useRef } from "react";

const Pdf = () => {
  const printRef = useRef();

//   const downloadPDF = () => {
//     const input = pdfRef.current;
//     console.log(input);
//     html2canvas(input).then((canvas) => {
//       const imgData = canvas.toDataURL("image/png");
//       const pdf = new jsPDF("p", "mm", "a4", true);
//         const pdfWidth = pdf.internal.pageSize.getWidth();
//         const pdfHeight = pdf.internal.pageSize.getHeight();
//         const imgWidth = canvas.width;
//         const imgHeight = canvas.height;
//         const ratio = Math.min(pdfWidth / imgHeight, pdfHeight / imgHeight);
//         const imgX = (pdfWidth - imgWidth * ratio) / 2;
//         const imgY = 30;
//         pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
//         pdf.save('invoice.pdf');
//     });
//   };



const handleDownloadPdf = async () => {
    const element = document.getElementById('pdf');
    html2canvas(element).then(canvas => {
        const pdf = new jsPDF()
        const imgData = canvas.toDataURL('image/png')
        const imgWidth = 210
        const pageHeight = 295
        const imgHeight = (canvas.height * imgWidth) / canvas.width
        let heightLeft = imgHeight
        let position = 0
        pdf.setFontSize(10)
        pdf.addImage(imgData, 'PNG', 10, 10, imgWidth - 20, imgHeight - 20) // Adding padding of 10 units on all sides
        heightLeft -= pageHeight
      while (heightLeft >= 0) {
          position = heightLeft - imgHeight
          pdf.addPage()
          pdf.addImage(imgData, 'PNG', 10, position + 10, imgWidth - 20, imgHeight - 20) // Adding padding of 10 units on all sides
          heightLeft -= pageHeight
        }
      
        pdf.setFontSize(10)
        pdf.save(`save`)
      })
  };
  

  return (
    <>
      <div>
      <div id="pdf" ref={printRef}>
        <h1 className="text-5xl text-center mt-20 mb-20">How are you</h1>
      </div>
      <div className="flex justify-center mb-20">
        <button onClick={handleDownloadPdf} className="btn btn-outline">
          Download PDF
        </button>
      </div>
      </div>
    </>
  );
};

export default Pdf;
