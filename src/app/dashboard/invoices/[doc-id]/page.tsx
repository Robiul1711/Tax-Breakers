"use client";
import dynamic from "next/dynamic";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

// Dynamically import PDFViewer (client-side only)
const PDFViewer = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFViewer),
  { ssr: false }
);

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

const InvoicePDF = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
);

const DashboardInvoiceViewDetailsPage = () => {
  return (
    <div className="w-full h-[1000px]">
      <PDFViewer width="100%" height="1000">
        <InvoicePDF />
      </PDFViewer>
    </div>
  );
};

export default DashboardInvoiceViewDetailsPage;