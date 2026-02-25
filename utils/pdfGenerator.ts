import * as Print from "expo-print";
import * as Sharing from "expo-sharing";

export const generateReportPDF = async (techName: string, siteName: string) => {
  const htmlContent = `
    <html>
      <body style="font-family: Helvetica; padding: 20px;">
        <h1 style="color: #1fb6ff;">SolYield Field Report</h1>
        <hr />
        <p><strong>Technician:</strong> ${techName}</p>
        <p><strong>Site Name:</strong> ${siteName}</p>
        <p><strong>Date:</strong> ${new Date().toLocaleDateString()}</p>
        <h3>Summary</h3>
        <p>Visit completed successfully. Maintenance checklist attached locally.</p>
      </body>
    </html>
  `;

  const { uri } = await Print.printToFileAsync({ html: htmlContent });
  await Sharing.shareAsync(uri);
};
